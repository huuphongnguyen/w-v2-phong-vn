import { File } from "akar-icons";
import useTranslation from "next-translate/useTranslation";

export default function SubPageSection() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white uppercase font-carbon-bold">
          /
        </p>
        <h1 className="text-black dark:text-white uppercase font-carbon-bold">
          sub-page
        </h1>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div>
          <div className="flex items-center space-x-2">
            <File className="text-black dark:text-white" />
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="https://log.phong.vn" target="_blank">
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-flex">
                  log.phong.vn
                </h2>
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                {t("subpage-log-description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
