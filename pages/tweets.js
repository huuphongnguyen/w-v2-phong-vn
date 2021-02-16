import Container from "../components/Container";
import { NextSeo } from "next-seo";
import { ArrowNarrowRight } from "../components/icons/HeroIcons";
import TweetStatic from "../components/TweetStatic";

const url = "https://phong.vn/tweets";
const title = "Tweets – PHONG FOUNDATION";
const description =
  "Các Tweets thật sự hay và đáng để lưu trữ lại. Được đăng tải bởi những người rất rất giỏi, thể hiện quan điểm của họ về những vấn đề liên quan. ";

const tweetarray = [
  "20",
  "976588005547954177",
  "1359214111956086788",
  "1356707686428020738",
  "1337641645680992256",
  "1316077913477840897",
  "1283040429848629249",
  "1251864062172041219",
  "1075194755175243781",
];

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

        <div>
          <ArrowNarrowRight classNameSync="w-7 h-7 text-black dark:text-white" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tweetarray.map((tweet, index) => (
              <TweetStatic tweetId={tweet} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
