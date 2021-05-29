import useTranslation from "next-translate/useTranslation";
import { Hashtag_vi_blog } from "../elements/HashtagsData";
import NextImage from "next/image";
import toast from "react-hot-toast";

export const blogData = [
  [
    " Notion là gì? Ứng dụng quan trọng nhất của mình",
    "blog/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh",
    "2021-05-29",
    "#vi-blog",
  ],
  [
    "Mình đã mua tên miền .ETH của ENS Domain như thế nào?",
    "blog/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao",
    "2021-05-24",
    "#vi-blog",
  ],
  [
    "Dispo là gì? Tại sao mình thích Dispo?",
    "blog/dispo-la-gi-tai-sao-minh-thich-dispo",
    "2021-02-15",
    "#vi-blog",
  ],
  [
    "Case Study: Quá trình xây dựng thương hiệu - tái cấu trúc Anh Xuyến",
    "blog/case-study-qua-trinh-xay-dung-thuong-hieu-tai-cau-truc-anh-xuyen",
    "2019-06-11",
    "#vi-blog",
  ],
];
export default function BlogSection() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white uppercase font-carbon-bold text-xl">
          /
        </p>
        <h1 className="text-black dark:text-white uppercase font-carbon-bold text-xl">
          Blog
        </h1>
      </div>
      <div className="flex items-start space-x-4 md:space-x-6">
        <div
          className="hidden md:block transform transition-all hover:scale-[1.1] hover:-rotate-12 cursor-pointer"
          onClick={() =>
            toast(
              <p className="text-black dark:text-white text-base">
                {t("common:blog-toast-image")}
              </p>,
              {
                icon: "🙄",
              }
            )
          }
        >
          <NextImage
            src="/static/the-memories-blog.svg"
            width="219.2px"
            height="355.2px"
            className=""
          />
        </div>
        <div className="pr-4 py-2 space-y-4 md:space-y-2">
          {blogData.map((b, index) => (
            <div className="flex-cols items-center" key={index}>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 dark:text-gray-400 font-bold font-carbon-bold inline-flex">
                  {b[2]}
                </p>
                {b[3] === "#vi-blog" ? <Hashtag_vi_blog t={t} /> : ""}
              </div>
              <a href={`https://phong.vn/${b[1]}`}>
                <h2 className="text-black dark:text-white inline-block font-bold rainbow_text_hover">
                  {b[0]}
                </h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
