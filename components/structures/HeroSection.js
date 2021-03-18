import NextImage from "next/image";
import PhongSignature from "../elements/PhongSignature";
import useTranslation from "next-translate/useTranslation";

export default function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <div className="p-2 w-full md:w-full-80 mx-auto border-2 border-black dark:border-white">
      <div className="space-y-4">
        <div className="text-black dark:text-white text-sm">
          {t("letter-p1a")}{" "}
          <a
            className="font-bold rainbow_text_hover"
            href="https://www.google.com/search?gs_ssp=eJzj4tDP1TfIyDPJMGD0EsjIV0jOyFTIzczLUEjOLKkEAHbGCNs&q=ho+chi+minh+city&oq=ho+chi+minh+&aqs=chrome.1.69i57j46j0l3j69i60l2j69i61.4942j0j4&sourceid=chrome&ie=UTF-8"
            target="_blank"
          >
            {t("letter-p1b")}
          </a>
          {t("letter-p1c")}{" "}
          <a
            className="font-bold rainbow_text_hover"
            href="https://www.instagram.com/dlwlrma/?hl=vi"
            target="_blank"
          >
            IU (Lee Ji-Eun)
          </a>
          {t("letter-p1d")}
        </div>
        <p className="text-black dark:text-white text-sm">{t("letter-p2")}</p>
        <div className="my-4 flex items-center space-x-4">
          <div className="w-16 h-16 object-cover relative">
            <NextImage
              src="/avatar.jpg"
              layout="fill"
              className="rounded-full absolute"
              quality={50}
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
