"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const tweetSchema = z.object({
  content: z.string().min(1, "require"),
});

export async function getMoreTweets(page: number) {
  const products = await db.tweet.findMany({
    select: {
      id: true,
      user: true,
      tweet: true,
      created_at: true,
    },
    skip: page * 4,
    take: 4,
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}

export async function getTweet() {
  const tweet = await db.tweet.findMany({
    select: {
      id: true,
      user: true,
      tweet: true,
      created_at: true,
    },
    take: 4,
    orderBy: {
      created_at: "desc",
    },
  });
  return tweet;
}

export async function uploadTweet(prev: any, formData: FormData) {
  const data = {
    content: formData.get("content"),
  };
  const result = tweetSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const tweet = await db.tweet.create({
        data: {
          tweet: result.data.content,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
      });
      redirect("tweets");
    }
  }
}
