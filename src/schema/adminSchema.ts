import { z } from "zod";
import { SECRET_KEY } from "astro:env/client";

// Admin schema de registro
export const adminSchema = z
  .object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({
      message: "Invalid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(30, { message: "Password must be less than 30 characters" }),
    repeatPassword: z
      .string()
      .min(6, { message: "Repeat Password must be at least 6 characters" })
      .max(30, { message: "Repeat Password must be less than 30 characters" }),
    secretKey: z
      .string()
      .min(6, { message: "Secret Key must be at least 6 characters" })
      .max(30, { message: "Secret Key must be less than 30 characters" })
      .refine((secretKey) => secretKey === SECRET_KEY, {
        message: "Invalid secret key",
      }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

// Admin schema de login
export const loginAdminSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

// Admin schema de actualización
export const updateAdminSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, {
        message: "Current Password must be at least 6 characters",
      })
      .nullable()
      .optional(),
    newPassword: z
      .string()
      .min(6, {
        message: "New Password must be at least 6 characters",
      })
      .nullable()
      .optional()
      .nullish()
      .or(z.literal("")),
    repeatNewPassword: z
      .string()
      .min(6, {
        message: "Repeat New Password must be at least 6 characters",
      })
      .nullable()
      .optional()
      .nullish()
      .or(z.literal("")),
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters" })
      .nullish()
      .or(z.literal("")), //Esto permitirá que el campo sea una cadena vacía o una cadena con al menos 3 caracteres.
    image: z.string().nullable().optional(),
  })
  .refine((data) => data.newPassword === data.repeatNewPassword, {
    message: "New Passwords do not match",
  });
