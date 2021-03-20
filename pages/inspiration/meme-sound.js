import Container from "../../components/Container";
import MEMESoundGrid from "../../components/elements/MEMESoundGrid";
import NextLink from "next/link";

const memesoundEndpoint = process.env.NOTION_API_TABLE_MEMESOUND;

export async function getStaticProps() {
  const res = await fetch(memesoundEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function MEMESound({ data }) {
  const memesoundarray = [data];

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
          <h1>MEME's sound board</h1>
        </div>
        <div className="my-3">
          <p className="text-black dark:text-white text-sm">
            Dùng khi Voice Chat trên Clubhouse / Twitter Spaces / Telegram Voice
            / etc. <br />
            Dữ liệu fetching trực tiếp từ trang Notion của Phong và được tổng
            hợp bằng tay nên số lượng sẽ không được nhiều và bao gồm các âm
            thanh phổ biến.
          </p>
        </div>
        <div>
          <MEMESoundGrid sync={memesoundarray[0]} />
        </div>
      </div>
    </Container>
  );
}
