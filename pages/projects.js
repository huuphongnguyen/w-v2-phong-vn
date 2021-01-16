import Container from "../components/Container";
import { NextSeo } from "next-seo";

const url = "https://phong.vn/projects";
const title = "Projects – PHONG FOUNDATION";
const description =
  "Những dự án mà Phong nói riêng và PHONG FOUNDATION nói chung đã - đang - và có thể sẽ thực hiện. Những thất bại - những kỷ niệm - những điều nhỏ được trải qua đều được tổng hợp tại đây";

export default function Projects() {
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
            Projects
          </h1>
        </div>
        <div className="text-black dark:text-white my-10 space-y-3 text-sm"></div>
      </div>
    </Container>
  );
}
