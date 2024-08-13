"use server";

import db from "@/lib/db";

export async function getMoreTweets(page: number) {
  const products = await db.tweet.findMany({
    select: {
      id: true,
      user: true,
      tweet: true,
      created_at: true,
    },
    skip: page * 1,
    take: 1,
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
    take: 1,
    orderBy: {
      created_at: "desc",
    },
  });
  return tweet;
}
