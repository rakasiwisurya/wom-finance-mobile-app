import { z } from "zod";

export const schemaSignUp = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z
    .string()
    .min(1, { error: "Email is required" })
    .email({ error: "Invalid email" }),
  password: z
    .string()
    .min(6, { error: "Password must be at least 6 characters" }),
});

export type FormDataSignUp = z.infer<typeof schemaSignUp>;
