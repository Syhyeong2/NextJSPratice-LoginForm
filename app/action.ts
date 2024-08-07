"use server";
import { z } from "zod";

const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@zod\.com$/);
const passwordRegex = new RegExp(/^(?=.*[0-9]).*$/);

const formSchema = z.object({
  email: z
    .string()
    .email()
    .regex(emailRegex, "Only @zod.com emails are allowed"),
  username: z.string().min(4, "Username should be at least 5 characters long"),
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
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
