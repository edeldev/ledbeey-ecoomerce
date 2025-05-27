import { z } from "zod";

/* ---------------------------- LOGIN VALIDATION ---------------------------- */
export const ValidationFormLogin = z.object({
  email: z
    .string()
    .min(1, { message: "Correo electrónico es requerido" })
    .email({ message: "Debe ser un correo electrónico válido" }),

  password: z.string().min(1, { message: "Contraseña es requerida" }),
});

export type ValidationFormLoginSchema = z.infer<typeof ValidationFormLogin>;

/* --------------------------- REGISTER VALIDATION -------------------------- */
export const ValidationFormRegister = z
  .object({
    username: z.string().min(1, { message: "Nombre de usuario es requerido" }),

    email: z
      .string()
      .min(1, { message: "Correo electrónico es requerido" })
      .email({ message: "Debe ser un correo electrónico válido" }),

    password: z.string().min(1, { message: "Contraseña es requerida" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirmar contraseña es requerido" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: `Las contraseñas no coinciden`,
  });

export type ValidationFormRegisterSchema = z.infer<
  typeof ValidationFormRegister
>;
