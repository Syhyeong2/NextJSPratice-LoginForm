"use server";
import bcrypt from "bcrypt";
import { passwordRegex } from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

interface FieldErrors {
  email?: string[];
  username?: string[];
  password?: string[];
}

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  return Boolean(user);
};

const checkUsernameExists = async (username: string) => {
  const user = await db.user.findUnique({
    where: { username },
    select: { id: true },
  });
  return Boolean(user);
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine(checkEmailExists, "An account with this email does not exist."),
  username: z
    .string()
    .min(5, "Username should be at least 5 characters long")
    .refine(
      checkUsernameExists,
      "An account with this Username does not exist."
    ),
  password: z.string().min(5, "Password should be at least 5 characters long"),
});

export async function handleIogin(prevstate: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    const ok = await bcrypt.compare(result.data.password, user!.password ?? "");
    if (ok) {
      const session = await getSession();
      session.id = user!.id;
      await session.save();
      redirect("/tweets");
    } else {
      const fieldErrors: FieldErrors = {};
      fieldErrors.password = ["Wrong password."];
      return { fieldErrors };
    }
  }
}
