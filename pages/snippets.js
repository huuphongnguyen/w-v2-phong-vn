import Container from "../components/Container";
import { NextSeo } from "next-seo";

const url = "https://phong.vn/snippets";
const title = "Snippets – PHONG FOUNDATION";
const description =
  "Trang tổng hợp những đoạn code, những tính năng nhỏ dùng trong việc phát triển ứng dụng. Ngoài ra còn có nhữnọ điều khác nữa.";

export default function Snippets() {
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
            Snippets
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm mb-4">
          Trang tổng hợp những đoạn code, những tính năng nhỏ dùng trong việc
          phát triển ứng dụng. Ngoài ra còn có những điều khác.
        </p>
        <div></div>
      </div>
    </Container>
  );
}
