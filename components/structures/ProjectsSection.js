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
import NextImage from "next/image";
import { ArrowUpRight } from "akar-icons";

export default function ProjectsSection() {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="w-[326px] h-[480px] hidden md:block absolute transform scale-[0.35] md:scale-50 origin-center -translate-x-28 -translate-y-16 -rotate-6">
        <NextImage
          src="https://media0.giphy.com/media/H6bpouTIgqRYn8xzyz/giphy.gif?cid=4fcb451e3i8ou5hf8je0vjdsrs8fue3t1pp0cxkxt27ye39i&rid=giphy.gif&ct=s"
          layout="fill"
          className="absolute"
        />
      </div>
      <div className="flex items-center space-x-2">
        <div className="inline-flex items-center space-x-1">
          <p className="text-black dark:text-white text-xl uppercase font-carbon-bold">
            /
          </p>
          <h1 className="text-black dark:text-white text-xl uppercase font-carbon-bold">
            Projects
          </h1>
        </div>
        <a href="/projects">
          <div className="flex items-center space-x-1 bg-black px-2 py-1">
            <p className="text-white dark:text-black font-bold uppercase text-xs">
              See all
            </p>
            <ArrowUpRight className="text-white dark:text-black" size={18} />
          </div>
        </a>
      </div>

      <div className="px-4 py-2 space-y-4 pl-4 md:pl-36">
        <div>
          <NextLink href="/projects/axembroidery">
            <a>
              <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
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
          <NextLink href="/projects/embvn">
            <a>
              <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
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
          <NextLink href="/projects/blvcksaigon">
            <a>
              <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
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
