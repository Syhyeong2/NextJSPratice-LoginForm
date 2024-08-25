"use server";

import { z } from "zod";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

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

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine(
      checkUniqueEmail,
      "There is an account already registered with that email."
    ),
  username: z
    .string()
    .min(3, "Username should be at least 3 characters long")
    .refine(checkUniqueUsername, "This Username is already taken"),
  bio: z.string(),
});

export async function editUserProfile(prevState: any, formData: FormData) {
  const session = await getSession();

  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    bio: formData.get("bio"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.update({
      where: {
        id: session.id,
      },
      data: {
        username: result.data.username,
        email: result.data.email,
        bio: result.data.bio,
      },
      select: {
        id: true,
      },
    });
    redirect(`/profile/${user.id}`);
  }
}
