"use client";
import { uploadTweet } from "@/app/(tabs)/tweets/action";
import { useFormState } from "react-dom";

export default function AddTweet() {
  const [state, dispatch] = useFormState(uploadTweet, null);
  return (
    <div>
      <form action={dispatch}>
        <input
          name="content"
          className="w-full h-20 p-3 my-5 ring-2 mt-10 ring-gray-400"
          placeholder="what's happing?"
        ></input>
        <button className="bg-blue-300 p-3 mb-10 rounded-lg">POST</button>
      </form>
    </div>
  );
}
