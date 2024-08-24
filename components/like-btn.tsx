"use client";

import { dislikeTweet, likeTweet } from "@/app/(tabs)/tweets/[id]/actions";
import { useOptimistic } from "react";

interface LikeBtnProps {
  likeCount: number;
  isLiked: boolean;
  tweetId: number;
}

export default function LikeBtn({ likeCount, isLiked, tweetId }: LikeBtnProps) {
  const [state, reducerFn] = useOptimistic(
    { isLiked, likeCount },
    (previousState, payload) => ({
      isLiked: !previousState.isLiked,
      likeCount: previousState.isLiked
        ? previousState.likeCount - 1
        : previousState.likeCount + 1,
    })
  );
  const onClick = async () => {
    reducerFn(undefined);
    if (isLiked) {
      await dislikeTweet(tweetId);
    } else {
      await likeTweet(tweetId);
    }
  };
  return (
    <button
      onClick={onClick}
      className={`bg-gray-600 mt-5 text-white p-2 rounded-xl flex ${
        state.isLiked && "bg-orange-400"
      }`}
    >
      Like {state.likeCount}
    </button>
  );
}
