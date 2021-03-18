import NextLink from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="items-start mx-auto w-full max-w-3xl space-y-1">
        <div className="flex items-center space-x-1 font-carbon-bold text-black dark:text-white uppercase">
          <p className="">Designed / Developed / Code by</p>
          <a href="https://phong.vn">
            <p className="inline-block rainbow_text_hover">PHONG</p>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-carbon-bold text-black dark:text-white uppercase">
            Built with
          </p>
          <div className="flex items-center space-x-2">
            <a href="https://nextjs.org" target="_blank">
              <img
                src="/icons/next-dot-js.svg"
                className="w-7 h-7 dark:fill-white"
              />
            </a>
            <a href="https://tailwindcss.com" target="_blank">
              <img
                src="/icons/tailwindcss.svg"
                className="w-7 h-7 dark:fill-white"
              />
            </a>
            <a href="https://vercel.com" target="_blank">
              <img
                src="/icons/vercel.svg"
                className="w-7 h-7 dark:fill-white"
              />
            </a>
            <a href="https://notion.so" target="_blank">
              <img
                src="/icons/notion.svg"
                className="w-7 h-7 dark:fill-white"
              />
            </a>
            <a href="https://cloudflare.com" target="_blank">
              <img
                src="/icons/cloudflare.svg"
                className="w-7 h-7 dark:fill-white"
              />
            </a>
            <a href="https://github.com" target="_blank">
              <img
                src="/icons/github.svg"
                className="w-7 h-7 dark:fill-white"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-1 font-carbon-bold text-black dark:text-white uppercase">
          <p>and other open-source projects listed</p>
          <NextLink href="/credits">
            <a>
              <p className="underline inline-block rainbow_text_hover">here</p>.
            </a>
          </NextLink>
        </div>
        <div className="flex items-center space-x-1 font-carbon-bold text-black dark:text-white uppercase">
          <p className="">This website is also open-sourced on</p>
          <a href="https://github.com/huuphongnguyen/phong.vn" target="_blank">
            <p className="inline-block rainbow_text_hover">Github</p>.
          </a>
        </div>
      </div>
    </footer>
  );
}
