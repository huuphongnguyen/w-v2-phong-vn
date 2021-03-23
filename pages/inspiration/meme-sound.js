import Container from "../../components/Container";
import MEMESoundGrid from "../../components/elements/MEMESoundGrid";
import NextLink from "next/link";
import useTranslate from "next-translate/useTranslation";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";

const memesoundEndpoint = process.env.NOTION_API_TABLE_MEMESOUND;

export async function getServerSideProps() {
  const res = await fetch(memesoundEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function MEMESound({ data }) {
  const { t } = useTranslate("memesound");

  const memesoundarray = [data];

  const seotitle = `MEME's Sound Board - Phong.vn`;
  const seodescrip = `Dùng khi Voice Chat trên Clubhouse / Twitter Spaces / Telegram Voice. Dữ liệu fetching trực tiếp từ trang Notion của Phong và được tổng hợp bằng tay nên số lượng sẽ không được nhiều và bao gồm các âm thanh phổ biến.`;
  const seourl = `https://phong.vn/inspiration/meme-sound`;
  const seopreviewimg = "/static/images/inspiration/meme-sound-feature-img.png";

  return (
    <Container>
      <NextSeo
        title={seotitle}
        description={seodescrip}
        canonical={seourl}
        openGraph={{
          seotitle,
          seodescrip,
          seourl,
          images: [
            {
              url: seopreviewimg,
              alt: seotitle,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <TwitterSEO
        currentURL={seourl}
        previewImage={`https://phong.vn/${seopreviewimg}`}
        siteName={seotitle}
        pageTitle={seotitle}
        description={seodescrip}
      />
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
          <h1>MEME's sound board</h1>
        </div>
        <div className="my-3">
          <p className="text-black dark:text-white text-sm">
            {t("memesound-description-p1")} <br />
            {t("memesound-description-p2")}
          </p>
        </div>
        <div>
          <MEMESoundGrid sync={memesoundarray[0]} />
        </div>
      </div>
    </Container>
  );
}
