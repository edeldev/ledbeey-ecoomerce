"use client";
import { Fragment, useState } from "react";
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
import { Input, Label } from "@/components/ui/form";

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
    <Fragment>
      <form
        onSubmit={handleSubmit(onRegisterWithCredential)}
        className="flex flex-col mt-16 gap-5"
      >
        <h2 className="text-lg font-semibold">Crear una cuenta</h2>
        <div className="flex flex-col gap-3">
          <Label htmlFor="username">Nombre</Label>
          <Input
            register={register("username")}
            id="username"
            type="text"
            placeholder="Ej. Edel Ballesteros"
            errors={errors.username}
            message={errors.username?.message}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            register={register("email")}
            type="email"
            id="email"
            placeholder="ledbeey@gmail.com"
            errors={errors.email}
            message={errors.email?.message}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            register={register("password")}
            type="password"
            id="password"
            placeholder="Mínimo 8 caracteres"
            errors={errors.password}
            message={errors.password?.message}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="confirm-password">Confirmar contraseña</Label>
          <Input
            register={register("confirmPassword")}
            type="password"
            id="confirm-password"
            placeholder="Vuelva a ingresar su contraseña"
            errors={errors.confirmPassword}
            message={errors.confirmPassword?.message}
          />
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
    </Fragment>
  );
}
