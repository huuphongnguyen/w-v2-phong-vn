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
        <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Bài viết
        </h1>
        <p className="text-black dark:text-white text-sm mb-4">
          {`Đây là nơi tập hợp những bài viết được viết bởi Phong và thỉnh thoảng cùng một vài người khác. Những bài viết này chủ yếu chia sẻ, note, suy nghĩ về một vấn đề nào đó trong quá trình dự án này phát triển, phần lớn bao gồm những kinh nghiệm, thất bại và những điều học được qua những gì đã trải qua. Hiện tại có khoảng ${posts.length} bài viết và sẽ được cập nhật sớm.`}
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
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Tất cả bài viết
        </h3>
        {!filteredBlogPosts.length && "Không tìm thấy bài viết nào liên quan."}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}
