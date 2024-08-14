import TweetList from "@/components/tweet-list";
import { getTweet } from "./action";
import AddTweet from "@/components/add-tweet";

export default async function Tweets() {
  const tweet = await getTweet();
  return (
    <div>
      <AddTweet />
      <TweetList tweet={tweet} />
    </div>
  );
}
