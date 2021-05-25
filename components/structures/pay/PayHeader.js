import { ChevronDown, Heart, Ribbon } from "akar-icons";
import NextImage from "next/image";
import NextLink from "next/link";
import PayThemeSwitcher from "./PayThemeSwitcher";

export default function PayHeader() {
  return (
    <div>
      <div className="items-start mx-auto w-full max-w-xl space-y-6">
        <div className="w-full flex items-center justify-center mt-10">
          <div className="w-[100px] h-[100px] relative">
            <NextImage
              src="/phong-logo-black.svg"
              layout="fill"
              className="object-fill absolute"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-center">
          <h1 className="text-black dark:text-white font-carbon-bold uppercase text-2xl inline-flex">
            Phong.vn
          </h1>
          <img src="/icons/badge-check.svg" className="w-7 h-7 text-black" />
        </div>
        <div className="w-full flex items-center justify-center space-x-2">
          <NextLink href="/">
            <a>
              <div className="border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white group inline-flex space-x-1 items-center px-2">
                <p className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black font-carbon-bold uppercase text-lg inline-flex">
                  Home
                </p>
                <Ribbon
                  className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
                  size={22}
                />
              </div>
            </a>
          </NextLink>
          <NextLink href="/phong">
            <a>
              <div className="border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white group inline-flex space-x-1 items-center px-2">
                <p className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black font-carbon-bold uppercase text-lg inline-flex">
                  Contact
                </p>
                <Heart
                  className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
                  size={22}
                />
              </div>
            </a>
          </NextLink>
          <PayThemeSwitcher />
        </div>
      </div>
      <div className="items-start mx-auto w-full max-w-xl space-y-6 mt-4">
        <p className="text-black dark:text-white font-carbon-bold uppercase text-xl text-center">
          "Buy me a coffee if you want. <br /> Thank you and love it."
        </p>
        <div className="flex items-center justify-center">
          <ChevronDown
            className="text-black dark:text-white animate-bounce"
            size={22}
          />
        </div>
      </div>
    </div>
  );
}
