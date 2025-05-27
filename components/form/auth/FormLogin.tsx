"use client";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import useErrorHandler from "@/hooks/useErrorHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ValidationFormLogin,
  ValidationFormLoginSchema,
} from "@/validations/auth-validation";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

export default function FormLogin() {
  const router = useRouter();
  const { handleRejection } = useErrorHandler();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationFormLoginSchema>({
    resolver: zodResolver(ValidationFormLogin),
  });

  const onLoginWithCredential: SubmitHandler<
    ValidationFormLoginSchema
  > = async (data) => {
    try {
      setIsLoading(true);

      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result && !result.ok) {
        setIsLoading(false);
        throw result.error;
      }

      toast.success("¡Inicio de sesión exitoso!");
      router.push("/account");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      handleRejection(error);
    }
  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit(onLoginWithCredential)}
        className="flex flex-col mt-16 gap-5"
      >
        <div>
          <h2 className="text-lg font-semibold">Iniciar sesión</h2>
          <p className="text-xs text-secondary">
            Elige entre una gran variedad de productos.
          </p>
        </div>
        <Link
          href=""
          className="flex gap-2 bg-white shadow-sm py-2 px-5 rounded-full justify-center items-center hover:bg-slate-100 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 186.69 190.5"
          >
            <g transform="translate(1184.583 765.171)">
              <path
                clipPath="none"
                mask="none"
                d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                fill="#4285f4"
              />
              <path
                clipPath="none"
                mask="none"
                d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                fill="#34a853"
              />
              <path
                clipPath="none"
                mask="none"
                d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                fill="#fbbc05"
              />
              <path
                d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                fill="#ea4335"
                clipPath="none"
                mask="none"
              />
            </g>
          </svg>
          Iniciar sesión con Google
        </Link>
        <div className="flex justify-between items-center gap-3">
          <div className="h-[1px] w-full bg-secondary" />
          <p className="text-xs">o</p>
          <div className="h-[1px] w-full bg-secondary" />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-xs text-secondary">
            Correo electrónico
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="ledbeey@gmail.com"
            className="py-2 px-3 rounded-full shadow-sm"
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
            placeholder="Introduce tu contraseña"
            className="py-2 px-3 rounded-full shadow-sm"
          />
          {errors.password && (
            <p className="text-[10px] text-red-500">
              {errors.password?.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black py-2 px-3 rounded-full text-white hover:bg-black/80 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>
      </form>
      <div className="text-xs text-secondary mt-3 flex gap-1 justify-end">
        ¿Eres nuevo?
        <Link href="/account/register" className="font-semibold">
          Crea una cuenta
        </Link>
      </div>
    </Fragment>
  );
}
