import Container from "../../components/Container";
import NextLink from "next/link";
import ArchillectGrid from "../../components/elements/ArchillectGrid";
import { useState } from "react";
import ArchillectTenMinutesCounter from "../../components/elements/ArchillectTenMinutesCounter";
import useTranslation from "next-translate/useTranslation";

const archillectEndpoint = process.env.ARCHILLECT_AI_UNOFFICIAL_API;

export async function getServerSideProps() {
  const res = await fetch(archillectEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Archillect({ data }) {
  const archillectarray = [data];

  const [isShowingArchillectImageGrid, showArchillectImageGrid] = useState(
    false
  );

  const { t } = useTranslation("archillect");

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
          <h1>Archillect</h1>
        </div>
      </div>
      <div className="items-start mx-auto w-full max-w-3xl">
        <p className="text-black dark:text-white text-sm">
          {t("archillect-p1")} <br />
          {t("archillect-p2")}
        </p>
        <div className="mb-4 space-y-1">
          <ArchillectTenMinutesCounter />
          <p className="text-black dark:text-white text-sm">
            {t("archillect-p3")}
          </p>
          <div className="text-red-500 text-xl font-carbon-bold flex items-center space-x-2">
            <p>BLOCKS: </p>
            <p>
              {data[0].id} - {data[49].id}
            </p>
          </div>
        </div>
        <div className="">
          <div className="text-black mb-4">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="focus:outline-none w-full px-2 text-black dark:text-white border-2 border-black dark:border-white font-carbon-bold text-lg font-bold uppercase rainbow_text_hover"
                onClick={() => {
                  showArchillectImageGrid(true);
                }}
              >
                Archillect/on
              </button>

              <button
                type="button"
                className="focus:outline-none w-full px-2 text-black dark:text-white border-2 border-black dark:border-white font-carbon-bold text-lg font-bold uppercase rainbow_text_hover"
                onClick={() => {
                  showArchillectImageGrid(false);
                }}
              >
                Archillect/off
              </button>
            </div>
          </div>
        </div>
        {isShowingArchillectImageGrid ? (
          <ArchillectGrid sync={archillectarray[0]} />
        ) : (
          <div className="text-black dark:text-white text-sm">
            {t("archillect-p4")} <br />
            {t("archillect-p5")}{" "}
            <a
              className="font-bold rainbow_text_hover"
              href="https://archillect.com/"
              target="_blank"
            >
              {t("archillect-p6")}
            </a>
            .
          </div>
        )}
      </div>
    </Container>
  );
}
