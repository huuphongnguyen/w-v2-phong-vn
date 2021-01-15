import Image from "next/image";
import { parseISO, format } from "date-fns";

import Container from "../components/Container";
import BlogSeo from "../components/BlogSeo";

const editUrl = (slug) =>
  `https://github.com/leerob/leerob.io/edit/master/data/blog/${slug}.mdx`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container>
      <BlogSeo
        url={`https://phong.vn/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl">
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
            <div className="flex items-center">
              <Image
                alt="Phong"
                height={40}
                width={40}
                src="/avatar.jpg"
                className="rounded-full"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                {frontMatter.by}
                {"Phong / "}
                {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
              </p>
            </div>
            <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
              {frontMatter.readingTime.text}
              {` • `}
            </p>
          </div>
          <div className="prose dark:prose-dark max-w-none w-full">
            {children}
          </div>
          <div className="mt-8"></div>
          <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 p-3 rounded-md hover:bg-gray-200 dark:hover:text-black font-bold">
            <div>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </div>
            <a
              href={editUrl(frontMatter.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Chỉnh sửa bài viết này trên Github"}
            </a>
          </div>
        </article>
      </div>
    </Container>
  );
}
