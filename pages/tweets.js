import Container from "../components/Container";
import { NextSeo } from "next-seo";

const url = "https://phong.vn/tweets";
const title = "Tweets – PHONG FOUNDATION";
const description =
  "Các Tweets thật sự hay và đáng để lưu trữ lại. Được đăng tải bởi những người rất rất giỏi, thể hiện quan điểm của họ về những vấn đề liên quan. ";

export default function Tweets() {
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

        <div className="w-full">
          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              just setting up my twttr
            </p>
            &mdash; jack (@jack){" "}
            <a href="https://twitter.com/jack/status/20?ref_src=twsrc%5Etfw">
              March 21, 2006
            </a>
          </blockquote>
        </div>
      </div>
    </Container>
  );
}
