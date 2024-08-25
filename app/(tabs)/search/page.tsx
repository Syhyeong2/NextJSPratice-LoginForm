"use client";
import { useFormState } from "react-dom";
import { searchTweets } from "./action";
import TweetList from "@/components/tweet-list";
import SearchTweetList from "@/components/search-tweet-list";

export default function Search() {
  const [state, dispatch] = useFormState(searchTweets, null);
  return (
    <div className="p-5">
      <form action={dispatch}>
        <input
          name="searchInput"
          type="searchInput"
          placeholder="search here"
          className="border-2 border-black h-10 w-80 p-2"
        ></input>
        <button className="bg-slate-400 p-2">search</button>
        {state?.error && <div>{String(state?.error)}</div>}
      </form>
      {state?.tweet && <SearchTweetList tweets={state.tweet} />}
    </div>
  );
}
