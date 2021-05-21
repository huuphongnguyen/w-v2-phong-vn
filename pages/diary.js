import Container from "../components/Container";
import NextLink from "next/link";
import { Client } from "@notionhq/client";
import { useEffect } from "react";

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_OFFICIAL_KEYS });

  const blockId = process.env.NOTION_PAGE_ID_TEST_PAGE;
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return {
    props: {
      data: response,
    },
  };
}

export default function Diary({ data }) {
  useEffect(() => {
    console.log(data);
  });
  const getPageDisplay = () => {
    let jsx = [];
    data.results.forEach((block) => {
      if (block.type === "paragraph") {
        jsx.push(
          <p className="text-black">
            {block.paragraph.text.map((t) => t?.plain_text)}
          </p>
        );
      }
      if (block.type === "bulleted_list_item") {
        jsx.push(
          <ul className="text-black">
            <li>{block.bulleted_list_item.text[0]?.plain_text}</li>
          </ul>
        );
      }
    });
    return jsx;
  };
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4 pt-5">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-xl uppercase font-carbon-bold">
          <NextLink href="/">
            <a>
              <p className="text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white">
                FRONT-PAGE
              </p>
            </a>
          </NextLink>
          <p>/</p>
          <h1>Diary</h1>
        </div>
        <div className="text-black dark:text-white space-y-20">
          {getPageDisplay()}
          <p>OK</p>
        </div>
      </div>
    </Container>
  );
}
