"use server";

import db from "@/lib/db";

export async function getUsersTweet(userId: number) {
  const tweet = await db.tweet.findMany({
    where: {
      userId: userId,
    },
    include: {
      user: true,
      like: true,
    },
    take: 4,
    orderBy: {
      created_at: "desc",
    },
  });
  return tweet;
}

export async function getMoreUsersTweets(page: number, userId: number) {
  const products = await db.tweet.findMany({
    where: {
      userId: userId,
    },
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
