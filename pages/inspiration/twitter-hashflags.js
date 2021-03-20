import Container from "../../components/Container";
import NextLink from "next/link";
import TwitterHashflagsGrid from "../../components/elements/TwitterHashflagsGrid";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

export default function TwitterHashflags() {
  const { t } = useTranslation("hashflags");

  const [isShowingTwitterHashflagsGrid, ShowTwitterHashflagsGrid] = useState(
    false
  );

  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-x-1">
        <NextLink href="/">
          <a>
            <div className="inline-flex items-center space-x-1 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white text-xl uppercase font-carbon-bold">
              <p>/</p>
              <p>Inspiration</p>
            </div>
          </a>
        </NextLink>
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-xl uppercase font-carbon-bold">
          <p>/</p>
          <h1>Twitter Hashflags</h1>
        </div>
      </div>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <p className="text-black dark:text-white">
          {t("hashflags-p1")} <br />
          {t("hashflags-p2")}
          <br /> {t("hashflags-p3")}{" "}
        </p>

        <div className="text-black dark:text-white">
          <strong>500</strong> {t("hashflags-p4")}
          <br />
          {t("hashflags-p5")}
        </div>

        <div>
          <div className="text-black mb-4">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="focus:outline-none w-full px-2 text-black dark:text-white border-2 border-black dark:border-white font-carbon-bold text-lg font-bold uppercase"
                onClick={() => {
                  ShowTwitterHashflagsGrid(true);
                }}
              >
                <p className="rainbow_text_hover inline-block">
                  {t("hashflags-show")}
                </p>
              </button>

              <button
                type="button"
                className="focus:outline-none w-full px-2 text-black dark:text-white border-2 border-black dark:border-white font-carbon-bold text-lg font-bold uppercase"
                onClick={() => {
                  ShowTwitterHashflagsGrid(false);
                }}
              >
                <p className="rainbow_text_hover inline-block">
                  {t("hashflags-hide")}
                </p>
              </button>
            </div>
          </div>
        </div>
        {isShowingTwitterHashflagsGrid ? (
          <TwitterHashflagsGrid />
        ) : (
          <div className="text-black dark:text-white">{t("hashflags-p6")}</div>
        )}
      </div>
    </Container>
  );
}
