import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";

import Footer from "../components/Footer";
import Logo from "./Logo";

export default function Container({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white dark:bg-black">
      <header className="flex-col space-y-1 justify-between items-center max-w-4xl w-full px-8 py-2 mt-10 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <div className="w-full flex justify-center">
          <div className="bg-white dark:bg-white px-10 pt-10 pb-8 inline-flex rounded-full items-center justify-center">
            <Logo />
          </div>
        </div>
        <h1 className=" text-3xl md:text-5xl tracking-tight text-center pt-5 text-black dark:text-white font-domainet">
          PHONG FOUNDATION
        </h1>
        <p className=" text-black dark:text-white text-sm md:text-md text-center uppercase">
          created by phong
        </p>
      </header>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full px-6 pt-10 mb-7 pb-3 md:px-8 md:py-2 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <div className="scrollmenu ml-4">
          <NextLink href="/blog">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-sm border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Bài viết
            </a>
          </NextLink>
          <NextLink href="/gioithieu">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-sm border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Giới thiệu
            </a>
          </NextLink>
          <NextLink href="/projects">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-sm border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Projects
            </a>
          </NextLink>
          <NextLink href="/lienhe">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-sm border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Liên hệ
            </a>
          </NextLink>
          <NextLink href="/humans">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-sm border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Founders & Members
            </a>
          </NextLink>
          <NextLink href="/">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-sm border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Trang chủ
            </a>
          </NextLink>
        </div>
      </nav>
      <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
        {children}
        <Footer />
      </main>
    </div>
  );
}
