import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import { getUsersTweet } from "./action";
import TweetList from "@/components/tweet-list";
import ProfileTweetList from "@/components/profile-tweet-list";
import Link from "next/link";

async function getUser(userId: number) {
  if (userId) {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function Profile({ params }: { params: { id: string } }) {
  const session = await getSession();
  const profileId = Number(params.id);
  const user = await getUser(profileId);
  const tweets = await getUsersTweet(profileId);
  return (
    <div className="h-screen p-5">
      <div className="w-full text-4xl font-extrabold m-3">
        This is {user?.username}s Profile
      </div>
      <div className="m-3">{user.bio}</div>
      {session.id === profileId && (
        <Link
          href={`/profile/${profileId}/edit`}
          className="bg-slate-500 rounded-xl h-10 w-20 flex items-center justify-center m-3"
        >
          Edit
        </Link>
      )}
      {tweets.length === 0 ? (
        <div>there is no tweet</div>
      ) : (
        <ProfileTweetList tweet={tweets} />
      )}
    </div>
  );
}
