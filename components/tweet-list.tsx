"use client";

import { getMoreTweets } from "@/app/(tabs)/tweets/action";
import Link from "next/link";
import { useState } from "react";

interface TweetProps {
  tweet: {
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

export default function TweetList({ tweet }: TweetProps) {
  const [tweets, setTweets] = useState(tweet);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const newTweets = await getMoreTweets(page + 1);
    if (newTweets.length !== 0) {
      setPage((prev) => prev + 1);
      setTweets((prev) => [...prev, ...newTweets]);
    } else {
      setIsLastPage(true);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className="w-full bg-slate-400 h-px"></div>

      {tweets.map((tweet, index) => (
        <Link key={index} href={`/tweets/${tweet.id}`}>
          <div className="p-3">
            <div className="flex items-center gap-3">
              <div className="ml-5 size-10 bg-gray-400 rounded-full"></div>
              <div className="font-bold">{tweet.user.username}</div>
            </div>
            <div className="mx-16 my-6	break-words">{tweet.tweet}</div>
            <div className="w-full bg-slate-400 h-px"></div>
          </div>
        </Link>
      ))}
      {isLastPage ? (
        <div>last page</div>
      ) : (
        <div
          onClick={onLoadMoreClick}
          className="flex justify-center items-center bg-red-400 mb-20"
        >
          more
        </div>
      )}
    </>
  );
}
