import useTranslation from "next-translate/useTranslation";
import { Hashtag_vi_blog, Hashtag_en_blog } from "../elements/HashtagsData";
import NextImage from "next/image";

export default function BlogSection({ resultssync }) {
  const { t } = useTranslation();

  console.log("bloglist", resultssync);

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
      <div className="flex items-start space-x-4 md:space-x-6 pl-3">
        <div className="pr-4 py-2 space-y-4 md:space-y-2">
          {resultssync.map((block) => (
            <div className="flex items-center space-x-3">
              <div className="w-[10%] md:w-auto">
                <div className="w-8 h-8 relative">
                  <NextImage
                    src={block.properties.icon.files[0].name}
                    layout="fill"
                    className="object-cover absolute"
                  />
                </div>
              </div>
              <div className="flex-cols items-center" key={block.id}>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-500 dark:text-gray-400 font-bold font-carbon-bold inline-flex">
                    {block.properties.daywrite.rich_text[0].plain_text}
                  </p>
                  {block.properties.Tags.multi_select.map((tag) =>
                    tag.name === "#vi-blog" ? (
                      <div id={tag.id}>
                        <Hashtag_vi_blog t={t} />{" "}
                      </div>
                    ) : tag.name === "#en-blog" ? (
                      <div id={tag.id}>
                        <Hashtag_en_blog t={t} />{" "}
                      </div>
                    ) : (
                      ""
                    )
                  )}
                  {block.properties.notes.multi_select?.map((note) => (
                    <p className="text-black dark:text-white border-2 border-black dark:border-white px-1 text-xs uppercase font-bold">
                      {note.name}
                    </p>
                  ))}
                </div>
                <a href={block.properties.slug.rich_text[0].plain_text}>
                  <h2 className="text-black dark:text-white inline-block font-bold rainbow_text_hover">
                    {block.properties.titleblog.rich_text[0].plain_text}
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
