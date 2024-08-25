"use server";

import db from "@/lib/db";
import { z } from "zod";

const formSchema = z.object({
  searchInput: z.string().min(1),
});

export async function searchTweets(prevState: any, formData: FormData) {
  const data = {
    searchInput: formData.get("searchInput"),
  };
  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    return {
      success: false,
      error: result.error.flatten().fieldErrors.searchInput,
    };
  } else {
    const tweet = await db.tweet.findMany({
      where: {
        tweet: {
          contains: result.data.searchInput,
        },
      },
      select: {
        id: true,
        user: true,
        tweet: true,
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    if (tweet.length === 0) {
      return { success: false, error: "there is no tweet" };
    } else {
      return { success: true, tweet: tweet };
    }
  }
}
