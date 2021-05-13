import useTranslation from "next-translate/useTranslation";
import LogoCoin from "./LogoCoin";

export default function Logo() {
  const { t } = useTranslation("common");

  return (
    <a href="https://phong.vn">
      <div className="inline-flex items-center space-x-2">
        <div className="-mt-20 transform translate-y-10 scale-110 origin-center">
          <LogoCoin />
        </div>
        <h1 className="text-black dark:text-white font-carbon-bold uppercase text-xl rainbow_text_hover">
          {t("logo-title")}
        </h1>
      </div>
    </a>
  );
}
