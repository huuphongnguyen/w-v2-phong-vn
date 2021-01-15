import Container from "../components/Container";
import { NextSeo } from "next-seo";

const url = "https://phong.vn/about";
const title = "Giới thiệu – PHONG FOUNDATION";
const description =
  "Một vài dòng giới thiệu về dự án PHONG FOUNDATION. Được viết bởi Nguyễn Hữu Phong";

export default function About() {
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
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl">
        <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Giới thiệu
        </h1>
        <div className="text-black dark:text-white my-10 space-y-3 text-sm"></div>
      </div>
    </Container>
  );
}
