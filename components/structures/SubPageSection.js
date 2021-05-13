import { File } from "akar-icons";
import useTranslation from "next-translate/useTranslation";
import NextImage from "next/image";

export default function SubPageSection() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="w-[387px] h-[480px] hidden md:block absolute transform scale-[0.65] rotate-12 origin-center translate-x-96 -translate-y-20">
        <NextImage
          src="https://media0.giphy.com/media/3oz8xMcMytpQVPay9a/giphy.gif?cid=790b7611f190ff60ed17eae999eb01a7994e5ed751b0da4f&rid=giphy.gif&ct=s"
          layout="fill"
          className="absolute"
        />
      </div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          /
        </p>
        <h1 className="text-black dark:text-white text-xl uppercase font-carbon-bold">
          Sub-page
        </h1>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <File className="text-black dark:text-white" />
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="https://log.phong.vn" target="_blank">
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  log.phong.vn
                </h2>
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                {t("subpage-log-description")}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <File className="text-black dark:text-white" />
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a
                href="https://y.at/%E2%9C%8C%F0%9F%91%BD%F0%9F%91%89%F0%9F%9A%80"
                target="_blank"
              >
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-75">
                      <NextImage
                        className="object-cover absolute"
                        src="/emoji/emoji-hello.png"
                        layout="fill"
                      />
                    </div>
                    <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-100">
                      <NextImage
                        className="object-cover absolute"
                        src="/emoji/emoji-aliens.png"
                        layout="fill"
                      />
                    </div>
                    <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-150">
                      <NextImage
                        className="object-cover absolute"
                        src="/emoji/emoji-touch.png"
                        layout="fill"
                      />
                    </div>
                    <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-200">
                      <NextImage
                        className="object-cover absolute"
                        src="/emoji/emoji-rocket.png"
                        layout="fill"
                      />
                    </div>
                  </div>
                  <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                    .y.at
                  </h2>
                </div>
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                Humans are Aliens
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <File className="text-black dark:text-white" />
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="https://mmm.page/phong.main" target="_blank">
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  mmm.page/phong.main
                </h2>
              </a>
              <p className="text-gray-500 dark:text-gray-400">hmmmm!!!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
