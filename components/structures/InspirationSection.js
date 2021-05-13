import useTranslation from "next-translate/useTranslation";
import NextImage from "next/image";
export default function InspirationSection() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="w-[300px] h-[432px] hidden md:block absolute transform scale-[0.75] origin-center translate-x-96 translate-y-0">
        <NextImage
          src="https://media0.giphy.com/media/LOi2LqxPSTtTQxDpJv/giphy.gif?cid=ecf05e470nnvb56oae8py846vjr2gjx03o7cmgz7kcoooho3&rid=giphy.gif&ct=s"
          layout="fill"
          className="absolute"
        />
      </div>

      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          /
        </p>
        <h1 className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          Inspiration
        </h1>
      </div>

      <div className="pr-0 md:pr-72">
        <div className="px-4 py-2">
          <a href="/inspiration/archillect">
            <h2 className="text-black dark:text-white font-bold inline-block rainbow_text_hover ">
              {t("inspiration-archillect-title")}
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            {t("inspiration-archillect-description")}
          </p>
        </div>

        <div className="px-4 py-2">
          <a href="/inspiration/twitter-hashflags">
            <h2 className="text-black dark:text-white font-bold inline-block rainbow_text_hover">
              {t("inspiration-twitterhashflags-title")}
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            {t("inspiration-twitterhashflags-description")}
          </p>
        </div>

        <div className="px-4 py-2">
          <a href="/inspiration/meme-sound">
            <h2 className="text-black dark:text-white font-bold inline-block rainbow_text_hover">
              {t("inspiration-memesound-title")}
            </h2>
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            {t("inspiration-memesound-description")}
          </p>
        </div>
      </div>
    </div>
  );
}
