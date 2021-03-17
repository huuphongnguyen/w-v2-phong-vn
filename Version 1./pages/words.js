import Container from "../components/Container";
import { NextSeo } from "next-seo";

const url = "https://phong.vn/words";
const title = "Words – PHONG FOUNDATION";
const description =
  "Từ ngày đầu tiên của năm 2021, mỗi ngày Phong sẽ cập nhật một từ hoặc cụm từ. Đây chỉ là một side-project thử nghiệm cách viết một AI như thế nào. Các từ được chọn được một AI mình viết mang tên là Xesi lựa chọn và phân tích từ dữ liệu hoạt động hằng ngày.";

const defaultEndpointx = process.env.WORDS_NOTION_UNOFFICIAL_API;

export async function getStaticProps() {
  const res = await fetch(defaultEndpointx);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Words({ data }) {
  const wordsdata = [data];
  const wordsarray = wordsdata[0];

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
            Words
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm">
          Từ ngày đầu tiên của năm 2021, mỗi ngày Phong sẽ cập nhật một từ hoặc
          cụm từ. Đây chỉ là một side-project thử nghiệm cách viết một AI như
          thế nào. Các từ được chọn được một AI mình viết mang tên là Xesi, cô
          ấy lựa chọn và phân tích từ dữ liệu hoạt động hằng ngày, từ đó tổng
          hợp và gửi lại những kết quả cô ấy thấy là phù hợp nhất.
          <br /> Hiện tại Xesi vẫn đang được phát triển Private cho mục đích cá
          nhân và dữ liệu được ghi trực tiếp vào Notion của mình, và được đồng
          bộ đến website này thông qua Notion API.
        </p>
        <div className="text-black dark:text-white font-bold text-sm  mb-4">
          Thank you and love{" "}
          <a href="https://www.notion.so" target="_blank">
            <div className="inline-flex items-center space-x-1 px-2 py-1 bg-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mx-2 cursor-pointer transform translate-y-1 md:translate-y-1 bg-gray-200 md:bg-transparent">
              <img
                src="https://www.notion.so/images/favicon.ico"
                width={20}
                height={20}
              />
              <div className="font-bold">Notion</div>
            </div>
          </a>
        </div>
        <div className="space-y-3">
          <div className="space-y-2">
            <h2 className="text-black dark:text-white font-bold text-3xl font-carbon-bold uppercase px-2">
              2021 / January
            </h2>
            <div>
              {wordsarray &&
                wordsarray
                  .filter((word) =>
                    word.fields.day.start_date.includes("2021-01")
                  )
                  .map((word, index) => (
                    <div
                      className="font-carbon-bold uppercase text-white dark:text-gray-700 bg-black dark:bg-white inline-flex items-center mx-1 my-1 px-2 py-1 rounded-full"
                      key={index}
                    >
                      <p>{word.fields.keyword}</p>
                    </div>
                  ))}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-black dark:text-white font-bold text-3xl font-carbon-bold uppercase px-2">
              2021 / February
            </h2>
            <div>
              {wordsarray &&
                wordsarray
                  .filter((word) =>
                    word.fields.day.start_date.includes("2021-02")
                  )
                  .map((word) => (
                    <div className="font-carbon-bold uppercase text-white dark:text-gray-700 bg-black dark:bg-white inline-flex items-center mx-1 my-1 px-2 py-1 rounded-full">
                      <p>{word.fields.keyword}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
