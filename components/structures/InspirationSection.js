import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function InspirationSection() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white uppercase font-carbon-bold">
          /
        </p>
        <h1 className="text-black dark:text-white uppercase font-carbon-bold">
          inspiration
        </h1>
      </div>

      <div className="px-4 py-2">
        <NextLink href="/inspiration/archillect">
          <a>
            <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-flex">
              {t("inspiration-archillect-title")}
            </h2>
          </a>
        </NextLink>
        <p className="text-gray-500 dark:text-gray-400">
          {t("inspiration-archillect-description")}
        </p>
      </div>

      <div className="px-4 py-2">
        <NextLink href="/inspiration/twitter-hashflags">
          <a>
            <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-flex">
              {t("inspiration-twitterhashflags-title")}
            </h2>
          </a>
        </NextLink>
        <p className="text-gray-500 dark:text-gray-400">
          {t("inspiration-twitterhashflags-description")}
        </p>
      </div>
    </div>
  );
}
