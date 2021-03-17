import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Hashtag_vi_blog } from "../elements/HashtagsData";

export const blogData = [
  [
    "Dispo là gì? Tại sao mình thích Dispo?",
    "/blog/dispo-la-gi-tai-sao-minh-thich-dispo",
    "2021-02-15",
    "#vi-blog",
  ],
];
export default function BlogSection() {
  const { t } = useTranslation("hashtags");

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white uppercase font-carbon-bold">
          /
        </p>
        <h1 className="text-black dark:text-white uppercase font-carbon-bold">
          Blog
        </h1>
      </div>
      <div className="px-4 py-2">
        {blogData.reverse().map((b, index) => (
          <div
            className="flex-cols md:flex items-center space-x-0 md:space-x-2"
            key={index}
          >
            <p className="text-gray-500 dark:text-gray-400 font-bold font-carbon-bold inline-flex">
              {b[2]}
            </p>
            <NextLink href={b[1]}>
              <a>
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-flex">
                  {b[0]}
                </h2>
              </a>
            </NextLink>
            {b[3] === "#vi-blog" ? <Hashtag_vi_blog t={t} /> : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
