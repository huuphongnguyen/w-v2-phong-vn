import Container from "../components/Container";
import { NextSeo } from "next-seo";
import ToolCard from "../components/ToolCard";
import { useState } from "react";

const url = "https://phong.vn/tools";
const title = "Tools – PHONG FOUNDATION";
const description =
  "Tổng hợp những tool, những công cụ hay và tiện lợi giúp PHONG FOUNDATION thực hiện công việc tốt hơn.";

const defaultEndpointx = process.env.TOOLS_NOTION_UNOFFICIAL_API;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpointx);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Tools({ data }) {
  const toolsdata = [data];
  const toolsarray = toolsdata[0];

  const [searchValue, setSearchValue] = useState("");
  const filteredToolsData = toolsarray.filter((dt) =>
    dt.fields.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl w-full">
        <div className="flex space-x-2">
          <span className="text-3xl font-domainet md:text-5xl text-black dark:text-white">
            /
          </span>
          <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Tools
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm mb-4">
          Tổng hợp những tool, những công cụ hay và tiện lợi giúp thực hiện công
          việc tốt hơn.
        </p>
        <p className="text-black dark:text-white text-sm mb-4 items-center md:flex">
          Đồng bộ thông qua Notion API. Xem tổng hợp / duplicate tại
          <a
            href="https://www.notion.so/isnhp/930aa0192d3e4dfc88eb30bfeee208a7?v=f3222a3da894498d9c8058ea00c308f1"
            target="_blank"
          >
            <div className="inline-flex items-center space-x-1 px-2 py-1 bg-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mx-2 cursor-pointer transform translate-y-1 md:translate-y-0 bg-gray-200 md:bg-transparent">
              <img
                src="https://www.notion.so/images/favicon.ico"
                width={20}
                height={20}
              />
              <div className="font-bold"> Phong / Tools</div>
            </div>
          </a>
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Tìm kiếm bài viết, chủ đề, keywords,..."
            className="px-4 py-2 text-sm md:text-md border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-yellow-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-2 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && <></>}
        <p className="text-black dark:text-gray-200 font-bold">Tất cả /</p>
        {!filteredToolsData.length && (
          <p className="text-black">
            Không tìm thấy Tool nào có tên trùng khớp :(
          </p>
        )}
        {filteredToolsData.map((tool, index) => (
          <ToolCard
            key={index}
            toolicon={tool.fields.icon[0]}
            toolname={tool.fields.name}
            tooldescription={tool.fields.description}
            toolurl={tool.fields.url}
            tooltags={tool.fields.tags}
          />
        ))}
      </div>
    </Container>
  );
}
