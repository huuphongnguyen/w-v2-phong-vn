import NextLink from "next/link";
import { Toaster } from "react-hot-toast";
import {
  Hashtag_2019,
  Hashtag_2020,
  Hashtag_2021,
  Hashtag_developing,
  Hashtag_shutdown,
  Hashtag_stillloveit,
  Hashtag_2017,
} from "../elements/HashtagsData";
import useTranslation from "next-translate/useTranslation";

export default function ProjectsSection() {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white uppercase font-carbon-bold">
          /
        </p>
        <h1 className="text-black dark:text-white uppercase font-carbon-bold">
          projects
        </h1>
      </div>

      <div className="px-4 py-2 space-y-4">
        <div>
          <NextLink href="#">
            <a>
              <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-flex">
                {t("projects-ax-title")}
              </h2>
            </a>
          </NextLink>
          <p className="text-gray-500 dark:text-gray-400">
            {t("projects-ax-description")}
          </p>
          <div className="flex space-x-2">
            <Hashtag_2017 t={t} />
            <Hashtag_developing t={t} />
          </div>
        </div>

        <div>
          <NextLink href="#">
            <a>
              <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-flex">
                {t("projects-embvn-title")}
              </h2>
            </a>
          </NextLink>
          <p className="text-gray-500 dark:text-gray-400">
            {t("projects-embvn-description")}
          </p>
          <div className="flex space-x-2">
            <Hashtag_2021 t={t} />
            <Hashtag_developing t={t} />
          </div>
        </div>

        <div>
          <NextLink href="#">
            <a>
              <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-flex">
                {t("projects-blvck-title")}
              </h2>
            </a>
          </NextLink>
          <p className="text-gray-500 dark:text-gray-400">
            {t("projects-blvck-description")}
          </p>
          <div className="flex space-x-2">
            <Hashtag_2019 t={t} />
            <Hashtag_2020 t={t} />
            <Hashtag_shutdown t={t} />
            <Hashtag_stillloveit t={t} />
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
