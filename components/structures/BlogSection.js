import useTranslation from "next-translate/useTranslation";
import { Hashtag_vi_blog, Hashtag_en_blog } from "../elements/HashtagsData";
import { blogsData } from "../../data/blogsData";

export default function BlogSection() {
  const { t } = useTranslation();

  const bloglist = blogsData;

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white uppercase font-carbonbold text-xl">
          /
        </p>
        <h1 className="text-black dark:text-white uppercase font-carbonbold text-xl">
          Blog
        </h1>
      </div>
      <div className="flex items-start space-x-4 md:space-x-6 pl-3">
        <div className="pr-4 py-2 space-y-4 md:space-y-2">
          {bloglist.map((blog, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-[10%] md:w-auto">
                <div className="w-8 h-8 relative">
                  <img src={blog[1]} className="object-cover absolute" />
                </div>
              </div>
              <div className="flex-cols items-center">
                <div className="flex items-center space-x-2">
                  <p className="text-gray-500 dark:text-gray-400 font-bold font-carbonbold inline-flex">
                    {blog[4]}
                  </p>
                  {blog[2].map((tag, index) =>
                    tag === "#vi-blog" ? (
                      <div id={tag} key={index}>
                        <Hashtag_vi_blog t={t} />{" "}
                      </div>
                    ) : tag === "#en-blog" ? (
                      <div id={tag} key={index}>
                        <Hashtag_en_blog t={t} />{" "}
                      </div>
                    ) : (
                      ""
                    )
                  )}
                  {blog[3].map((note, index) => (
                    <p
                      key={index}
                      className={`${
                        note === ""
                          ? "hidden"
                          : "text-black dark:text-white border-2 border-black dark:border-white px-1 text-xs uppercase font-bold"
                      }`}
                    >
                      {note}
                    </p>
                  ))}
                </div>
                <a href={blog[5]}>
                  <h2 className="text-black dark:text-white inline-block font-bold rainbow_text_hover">
                    {blog[0]}
                  </h2>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
