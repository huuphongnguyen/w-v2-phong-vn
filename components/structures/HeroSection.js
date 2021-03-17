import NextImage from "next/image";
import PhongSignature from "../elements/PhongSignature";
import useTranslation from "next-translate/useTranslation";

export default function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <div className="p-2 w-full md:w-full-80 mx-auto border-2 border-black dark:border-white">
      <div className="space-y-4">
        <p className="text-black dark:text-white text-sm">{t("letter-p1")}</p>
        <p className="text-black dark:text-white text-sm">{t("letter-p2")}</p>
        <div className="my-4 flex items-center space-x-4">
          <div className="w-16 h-16 object-cover relative">
            <NextImage
              src="/avatar.jpg"
              layout="fill"
              className="rounded-full absolute"
            />
          </div>
          <div className="h-16 mt-10 flex items-end">
            <div className="absolute">
              <PhongSignature classsvg="stroke-current text-black dark:text-white transform scale-75 translate-y-16 origin-top-left" />
            </div>
            <div className="border-t-2 border-black dark:border-white inline-flex">
              <p className="text-black dark:text-white text-sm uppercase">
                {t("letter-name")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
