import Container from "../components/Container";
import { NextSeo } from "next-seo";

import Tweet from "../components/elements/Tweet";
import { getTweets } from "../lib/twitter";

const url = "https://phong.vn/tweets";
const title = "Tweets – PHONG FOUNDATION";
const description =
  "Các Tweets thật sự hay và đáng để lưu trữ lại. Được đăng tải bởi những người rất rất giỏi, thể hiện quan điểm của họ về những vấn đề liên quan. ";

// export async function getStaticProps() {
//   const tweets = await getTweets([
//     "935857414435495937",
//     "1334528781139259400",
//     "1334334544598740994",
//     "826528907381739520",
//     "1308509070140162048",
//     "997895977179721728",
//     "1341090253864542208",
//     "1026872652290379776",
//     "1346113149112619016",
//     "1340107217970683906",
//     "992629481578745856",
//     "989142253468708864",
//     "807626710350839808",
//     "1341962177272537089",
//     "1342869937841266688",
//     "1116362674319908864",
//     "1331380003716681728",
//     "1002104154737684480",
//   ]);

//   return { props: { tweets } };
// }

export default function Tweets({ tweets }) {
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
        {/* <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </div> */}
      </div>
    </Container>
  );
}
