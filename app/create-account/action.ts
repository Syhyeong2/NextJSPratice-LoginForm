"use server";

import bcrypt from "bcrypt";
import { z } from "zod";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: { username },
    select: { id: true },
  });
  return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return Boolean(user) === false;
};

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    email: z
      .string()
      .email()
      .refine(
        checkUniqueEmail,
        "There is an account already registered with that email."
      ),
    username: z
      .string()
      .min(5, "Username should be at least 5 characters long")
      .refine(checkUniqueUsername, "This Username is already taken"),
    password: z.string(),
    confirm_password: z.string(),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });

export async function handleCreateAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = await formSchema.safeParseAsync(data);
  console.log(result?.error?.flatten());
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    const session = await getSession();
    session.id = user.id;
    await session.save();
    redirect("/");
  }
}
