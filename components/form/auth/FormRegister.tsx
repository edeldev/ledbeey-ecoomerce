"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ValidationFormRegister,
  ValidationFormRegisterSchema,
} from "@/validations/auth-validation";

import useErrorHandler from "@/hooks/useErrorHandler";
import { signUpWithCredential } from "@/services/auth";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function FormRegister() {
  const { handleRejection } = useErrorHandler();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset: resetFormRegister,
    formState: { errors },
  } = useForm<ValidationFormRegisterSchema>({
    resolver: zodResolver(ValidationFormRegister),
  });

  const onRegisterWithCredential: SubmitHandler<
    ValidationFormRegisterSchema
  > = async (data) => {
    try {
      setIsLoading(true);

      await signUpWithCredential({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      resetFormRegister();
      toast.success("¡Registro exitoso!");

      await signIn("credentials", {
        redirect: true,
        email: data.email,
        password: data.password,
        callbackUrl: "/account",
      });
    } catch (error) {
      handleRejection(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onRegisterWithCredential)}
        className="flex flex-col mt-16 gap-5 "
      >
        <h2 className="text-lg font-semibold">Crear una cuenta</h2>
        <div className="flex flex-col gap-3">
          <label htmlFor="username" className="text-xs text-secondary">
            Nombre
          </label>
          <input
            {...register("username")}
            id="username"
            type="text"
            placeholder="Ej. Edel Ballesteros"
            className="py-2 px-3 rounded-full shadow-sm text-sm"
          />
          {errors.username && (
            <p className="text-[10px] text-red-500">
              {errors.username?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-xs text-secondary">
            Correo electrónico
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="ledbeey@gmail.com"
            className="py-2 px-3 rounded-full shadow-sm text-sm"
          />
          {errors.email && (
            <p className="text-[10px] text-red-500">{errors.email?.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="text-xs text-secondary">
            Contraseña
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Mínimo 8 caracteres"
            className="py-2 px-3 rounded-full shadow-sm text-sm"
          />
          {errors.password && (
            <p className="text-[10px] text-red-500">
              {errors.password?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="confirm-password" className="text-xs text-secondary">
            Confirmar contraseña
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirm-password"
            placeholder="Vuelva a ingresar su contraseña"
            className="py-2 px-3 rounded-full shadow-sm text-sm"
          />
          {errors.confirmPassword && (
            <p className="text-[10px] text-red-500">
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black py-2 px-3 text-sm rounded-full text-white hover:bg-black/80 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Creando..." : "Crear cuenta"}
        </button>
      </form>
      <div className="text-xs text-secondary mt-3 flex gap-1 justify-end">
        ¿Ya tienes una cuenta?
        <Link href="/account/login" className="font-semibold">
          Iniciar sesión
        </Link>
      </div>
    </>
  );
}
