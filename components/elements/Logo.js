import useTranslation from "next-translate/useTranslation";
import NextImage from "next/image";
import LogoCoin from "./LogoCoin";

export default function Logo() {
  const { t } = useTranslation("common");

  return (
    <a href="https://phong.vn">
      <div className="inline-flex items-center space-x-2">
        <div className="w-16 h-16 relative">
          <NextImage
            src="/phong-logo.gif"
            className="object-cover absolute filter filter-saturate-175"
            layout="fill"
          />
        </div>
        {/* <div>
          <LogoCoin />
        </div> */}
        <h1 className="text-black dark:text-white font-carbon-bold uppercase text-xl rainbow_text_hover">
          {t("logo-title")}
        </h1>
      </div>
    </a>
  );
}
