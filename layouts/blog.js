import Image from "next/image";
import { parseISO, format } from "date-fns";
import { useRouter } from "next/router";
import NextLink from "next/link";

import Container from "../components/Container";
import BlogSeo from "../components/BlogSeo";

const editUrl = (slug) =>
  `https://github.com/huuphongnguyen/w-v2-phong-vn/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({ children, frontMatter }) {
  const router = useRouter();
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

          <div
            className="flex space-x-2 items-center p-0 md:p-2 cursor-pointer mb-2 rounded-md text-black dark:text-white hover:bg-gray-200 dark:hover:text-black"
            onClick={() => router.back()}
          >
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
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                ></path>
              </svg>
            </div>
            <p className="text-sm font-bold">Quay trở lại Trang Blog chính</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
            <NextLink href="/phong">
              <a>
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
              </a>
            </NextLink>
            <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
              {frontMatter.readingTime.text}
              {` • `}
            </p>
          </div>
          <div className=" flex justify-between space-x-7 w-full mb-4">
            <div className="w-1/3">
              <Image
                className="rounded-xl"
                src={frontMatter.image}
                width={300}
                height={300}
                quality="50"
                priority="true"
              />
            </div>
            <div className="inline-flex w-2/3">
              <p className="text-black dark:text-gray-400 text-sm">
                {frontMatter.summary}
              </p>
            </div>
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
