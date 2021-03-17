import useTranslation from "next-translate/useTranslation";

export default function Logo() {
  const { t } = useTranslation("common");

  return (
    <a href="https://phong.vn">
      <div className="inline-flex items-center space-x-2">
        <div className="w-7 h-7 bg-black dark:bg-white"></div>
        <h1 className="text-black dark:text-white font-carbon-bold uppercase text-xl rainbow_text_hover">
          {t("logo-title")}
        </h1>
      </div>
    </a>
  );
}
