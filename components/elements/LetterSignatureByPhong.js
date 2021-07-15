import PhongSignature from "./PhongSignature";
import useTranslation from "next-translate/useTranslation";

export default function LetterSignatureByPhong() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="my-4 flex items-center space-x-4">
        <div className="w-16 h-16 object-cover relative">
          <img src="/avatar.jpg" className="rounded-full absolute" />
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
  );
}
