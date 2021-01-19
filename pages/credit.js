import Container from "../components/Container";
import { NextSeo } from "next-seo";

const url = "https://phong.vn/credit";
const title = "Credit – PHONG FOUNDATION";
const description =
  "Trang tổng hợp và credit các nguồn mà website của PHONG FOUNDATION sử dụng. Một sự cảm ơn và trân trọng nhất dành cho những người đã tạo ra các công cụ tuyệt vời này.";

export default function Credit() {
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
            Credit
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm mb-4">
          Trang tổng hợp và credit các nguồn mà website của PHONG FOUNDATION sử
          dụng. Một sự cảm ơn và trân trọng nhất dành cho những người đã tạo ra
          các công cụ tuyệt vời này.
        </p>
        <div>
          <div className="w-300px h-300px bg-pink-300">
            <iframe
              src="https://my.spline.design/georginayeboahcupcakes-96cb5b22ffd2df3f0a1ae89467079365/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}
