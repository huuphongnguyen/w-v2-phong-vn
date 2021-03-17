import React from "react";
import { Tweet } from "react-static-tweets";

export default function TweetStatic({ tweetId }) {
  return (
    <div>
      <Tweet id={tweetId} />
    </div>
  );
}
