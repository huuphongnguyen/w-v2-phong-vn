import Container from "../components/Container";
import { NextSeo } from "next-seo";
import HumanCard from "../components/HumanCard";

const url = "https://phong.vn/humans";
const title = "Con người – PHONG FOUNDATION";
const description =
  "Nơi tổng hợp Profile của Phong và một vài thành viên khác từ những người tham gia giúp đỡ và phát triển cho PHONG FOUNDATION";

export default function Humans() {
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
            Con người
          </h1>
        </div>
        <div className="text-black dark:text-white my-10 space-y-3 text-sm">
          <HumanCard
            imagesrc="/avatar.jpg"
            namehuman="Nguyễn Hữu Phong"
            des="Founder & Creator"
            profileurl="/phong"
          />
        </div>
      </div>
    </Container>
  );
}
