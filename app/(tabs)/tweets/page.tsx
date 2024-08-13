import TweetList from "@/components/tweet-list";
import { getTweet } from "./action";

export default async function Tweets() {
  const tweet = await getTweet();
  return (
    <div>
      <TweetList tweet={tweet} />
    </div>
  );
}
