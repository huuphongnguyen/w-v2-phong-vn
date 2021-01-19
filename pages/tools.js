import Container from "../components/Container";
import { NextSeo } from "next-seo";

const url = "https://phong.vn/tools";
const title = "Tools – PHONG FOUNDATION";
const description =
  "Tổng hợp những tool, những công cụ hay và tiện lợi giúp PHONG FOUNDATION thực hiện công việc tốt hơn.";

export default function Tools() {
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
            Tools
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm mb-4">
          Tổng hợp những tool, những công cụ hay và tiện lợi giúp thực hiện công
          việc tốt hơn.
        </p>
      </div>
    </Container>
  );
}
