import { Air, Door, Send } from "akar-icons";
import NextLink from "next/link";

export default function EndPostSection({ children, telegramid }) {
  return (
    <div className="w-full space-y-6">
      <div>{children}</div>
      <div className="w-full flex items-center justify-center space-x-2">
        <NextLink href="/">
          <a>
            <div className="inline-flex items-center space-x-1 border-2 border-black dark:border-white p-2 transform transition-all bg-white hover:bg-black group">
              <p className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black inline-flex font-carbon-bold uppercase">
                Home
              </p>
              <Door
                className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
                size={22}
              />
            </div>
          </a>
        </NextLink>
        <NextLink href="/phong">
          <a>
            <div className="inline-flex items-center space-x-1 border-2 border-black dark:border-white p-2 transform transition-all bg-white hover:bg-black group">
              <p className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black inline-flex font-carbon-bold uppercase">
                Touch
              </p>
              <Air
                className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
                size={22}
              />
            </div>
          </a>
        </NextLink>
        <a href={`https://t.me/phongchannel/${telegramid}`} target="_blank">
          <div className="inline-flex items-center space-x-1 border-2 border-black dark:border-white p-2 transform transition-all bg-white hover:bg-black group">
            <p className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black inline-flex font-carbon-bold uppercase">
              Comment
            </p>
            <Send
              className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
              size={22}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
