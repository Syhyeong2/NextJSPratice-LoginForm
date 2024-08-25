"use client";

import { getMoreTweets } from "@/app/(tabs)/tweets/action";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface TweetListProps {
  tweets: {
    tweet: string;
    id: number;
    created_at: Date;
    user: {
      id: number;
      username: string;
      password: string;
      email: string;
      avatar: string;
      bio: string | null;
      created_at: Date;
      updated_at: Date;
    };
  }[];
}

export default function SearchTweetList({ tweets }: TweetListProps) {
  return (
    <>
      <div className="w-full bg-slate-400 h-px"></div>
      {tweets.map((tweet, index) => (
        <div key={index}>
          <div className="flex mt-6 gap-3">
            <Link href={`/profile/${tweet.user.id}`}>
              <div className="ml-5 size-10 bg-gray-400 rounded-full mt-1"></div>
            </Link>
            <Link href={`/profile/${tweet.user.id}`}>
              <div className="font-bold">{tweet.user.username}</div>
            </Link>
          </div>
          <Link href={`/tweets/${tweet.id}`}>
            <div className="mb-4">
              <div className="break-words ml-[4.5rem] -mt-5">{tweet.tweet}</div>
            </div>
            <div className="w-full bg-slate-400 h-px"></div>
          </Link>
        </div>
      ))}
    </>
  );
}
