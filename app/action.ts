"use server";
import { emailRegex, passwordRegex } from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .regex(emailRegex, "Only @zod.com emails are allowed"),
  username: z.string().min(5, "Username should be at least 5 characters long"),
  password: z
    .string()
    .min(10, "Password should be at least 10 characters long")
    .regex(passwordRegex, "Password should contain at least one number"),
});

export async function handleForm(prevstate: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { token: false, error: result.error.flatten() };
  } else if (result.success) {
    return { token: true };
  } else {
    console.log(result);
  }
}
