import { useState } from "react";
import { NextSeo } from "next-seo";

import Container from "../components/Container";
import BlogPost from "../components/BlogPost";
import { getAllFilesFrontMatter } from "../lib/mdx";

const url = "https://phong.vn/blog";
const title = "Blog – PHONG FOUNDATION";
const description =
  "Những bài viết, những chia sẻ, những điều liên quan đến PHONG FOUNDATION đang làm. Được viết bởi phong và một vài thành viên khác.";

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
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
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl">
        <div className="flex space-x-2">
          <span className="text-3xl font-domainet md:text-5xl text-black dark:text-white">
            /
          </span>
          <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Bài viết
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm mb-4">
          {`Đây là nơi tập hợp những bài viết được viết bởi Phong và thỉnh thoảng cùng một vài người khác. Những bài viết này chủ yếu chia sẻ, note, suy nghĩ về một vấn đề nào đó trong quá trình dự án này phát triển, phần lớn bao gồm những kinh nghiệm, thất bại và những điều học được qua những gì đã trải qua. Hiện tại có khoảng ${posts.length} bài viết và sẽ được cập nhật sớm.`}
        </p>
        <div className="mb-4 flex items-center space-x-1">
          <div className="">
            <svg
              class="w-6 h-6 stroke-current text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
          </div>
          <p className="text-gray-500 text-xs pl-2">
            Các feature image của bài viết được chọn lọc và lấy cảm hứng từ kho
            lưu trữ của AI{" "}
            <a className="font-bold" href="https://archillect.com/">
              Archillect
            </a>
          </p>
        </div>
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
        <h3 className="uppercase text-sm md:text-md tracking-tight mb-4 mt-4 text-black dark:text-white">
          Tất cả bài viết /
        </h3>
        {!filteredBlogPosts.length && "Không tìm thấy bài viết nào liên quan."}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}
