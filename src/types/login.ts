import { z } from "zod";

export const schemaLogin = z.object({
  email: z
    .string()
    .min(1, { error: "Email is required" })
    .email({ error: "Invalid email" }),
  password: z.string().min(1, { error: "Password is required" }),
});

export type FormDataLogin = z.infer<typeof schemaLogin>;
