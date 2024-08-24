import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound } from "next/navigation";
import { dislikeTweet, likeTweet } from "./actions";
import LikeBtn from "@/components/like-btn";
import { unstable_cache as nextCache, revalidateTag } from "next/cache";

export async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }
  return false;
}

export async function getDetailTweet(id: number) {
  try {
    const tweet = await db.tweet.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });
    return tweet;
  } catch (e) {
    return null;
  }
}

async function getLikeStatus(tweetId: number, userId: number) {
  const isLiked = await db.like.findUnique({
    where: {
      id: {
        tweetId,
        userId: userId!,
      },
    },
  });
  const likeCount = await db.like.count({
    where: {
      tweetId,
    },
  });
  return {
    likeCount,
    isLiked: Boolean(isLiked),
  };
}
function getCachedLikeStatus(tweetId: number, userId: number) {
  const cachedOperation = nextCache(getLikeStatus, ["product-like-status"], {
    tags: [`like-status-${tweetId}`],
  });
  return cachedOperation(tweetId, userId);
}

export default async function TweetDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const session = await getSession();

  const tweet = await getDetailTweet(id);
  if (!tweet) {
    return notFound();
  }
  const isOwner = await getIsOwner(tweet.userId);
  const { likeCount, isLiked } = await getCachedLikeStatus(
    id,
    session.id as number
  );
  console.log(likeCount, isLiked);
  return (
    <div className="p-5 h-screen">
      <div>{tweet?.user.username}</div>
      <div>-----------------</div>
      <div>{tweet?.tweet}</div>
      {isOwner && (
        <button className="bg-gray-600 mt-5 text-white p-2 rounded-xl">
          Delete tweet
        </button>
      )}
      <LikeBtn likeCount={likeCount} isLiked={isLiked} tweetId={id} />
    </div>
  );
}
