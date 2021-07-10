import useTranslation from "next-translate/useTranslation";
import LetterByPhong from "../elements/LetterByPhong";

export default function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <div>
      <LetterByPhong letterNumber="#0001">
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
      </LetterByPhong>
    </div>
  );
}
