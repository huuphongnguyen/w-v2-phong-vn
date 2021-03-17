import NextLink from "next/link";

import Footer from "../components/Footer";
import Logo from "./Logo";
import ThemeSwitcher from "./elements/ThemeSwitcher";

export default function Container({ children }) {
  return (
    <div className="bg-white dark:bg-black">
      <header className="flex-col space-y-1 justify-between items-center max-w-4xl w-full px-8 py-2 mt-10 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <div className="w-full flex justify-center">
          <div className="bg-white dark:bg-white px-10 pt-10 pb-8 inline-flex rounded-full items-center justify-center">
            <Logo />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl tracking-tight text-center pt-5 text-black dark:text-white font-domainet">
          PHONG FOUNDATION
        </h1>
        <p className=" text-black dark:text-white text-sm md:text-md text-center">
          created by{" "}
          <a className="font-bold" href="https://phong.vn/phong">
            Phong
          </a>
        </p>
      </header>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full px-6 pt-5 mb-7 pb-3 md:px-8 md:py-2 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60 z-100">
        <ThemeSwitcher />
        <div className="scrollmenu ml-4">
          <NextLink href="/blog">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-xs border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Bài viết
            </a>
          </NextLink>
          <NextLink href="/white-paper">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-xs border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              White-Paper
            </a>
          </NextLink>
          <NextLink href="/projects">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-xs border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Projects
            </a>
          </NextLink>
          <NextLink href="/contact">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-xs border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Liên hệ
            </a>
          </NextLink>
          <NextLink href="/humans">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-xs border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Con người
            </a>
          </NextLink>
          <NextLink href="/">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:text-gray-900 uppercase text-xs border-gray-900 dark:border-gray-100 hover:bg-black dark:bg-black dark:hover:bg-white border mr-2 md:p-2">
              Trang chủ
            </a>
          </NextLink>
        </div>
      </nav>
      <main className="flex flex-col justify-center bg-white dark:bg-black px-4">
        {children}
        <Footer />
      </main>
    </div>
  );
}
