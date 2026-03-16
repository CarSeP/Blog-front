import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "The name is required")
      .max(64, "The name is too long (max 50 characters)"),
    username: z
      .string()
      .min(3, "The username must be at least 3 characters long")
      .max(20, "The username is too long"),
    email: z.email("Invalid email address").max(64, "Email is too long"),
    password: z
      .string()
      .min(8, "The password must be at least 8 characters long")
      .max(32, "The password is too long (max 100 characters)"),
  })
  .strict();
