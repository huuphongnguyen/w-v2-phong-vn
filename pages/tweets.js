import Container from "../components/Container";
import { NextSeo } from "next-seo";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { ArrowNarrowRight } from "../components/icons/HeroIcons";

const url = "https://phong.vn/tweets";
const title = "Tweets – PHONG FOUNDATION";
const description =
  "Các Tweets thật sự hay và đáng để lưu trữ lại. Được đăng tải bởi những người rất rất giỏi, thể hiện quan điểm của họ về những vấn đề liên quan. ";

const defaultEndpointx = process.env.TWEETS_NOTION_UNOFFICIAL_API;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpointx);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Tweets({ data }) {
  const tweetsdata = [data];
  const tweetsarray = tweetsdata[0];

  console.log("tw", tweetsarray);

  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl w-full">
        <div className="flex space-x-2">
          <span className="text-3xl font-domainet md:text-5xl text-black dark:text-white">
            /
          </span>
          <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Tweets
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm mb-4">
          Các Tweets thật sự hay và đáng để lưu trữ lại. Được đăng tải bởi những
          người rất rất giỏi, thể hiện quan điểm của họ về những vấn đề liên
          quan.
        </p>

        <div>
          <ArrowNarrowRight classNameSync="w-7 h-7 text-black dark:text-white" />
        </div>

        <div className="flex py-5 space-x-2 w-full overflow-x-scroll">
          {tweetsarray.map((tweet) => (
            <div className="w-300px">
              <TwitterTweetEmbed tweetId={tweet.fields.tweetid} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
