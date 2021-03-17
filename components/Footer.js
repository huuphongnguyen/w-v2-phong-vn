export default function Footer() {
  return (
    <footer>
      <div className="items-start mx-auto w-full max-w-3xl space-y-1">
        <p className="font-carbon-bold text-black dark:text-white uppercase">
          Designed / Developed / Code by PHONG
        </p>
        <div className="flex items-center space-x-2">
          <p className="font-carbon-bold text-black dark:text-white uppercase">
            Built with
          </p>
          <div className="flex items-center space-x-2">
            <img
              src="/icons/next-dot-js.svg"
              className="w-7 h-7 dark:fill-white"
            />
            <img
              src="/icons/tailwindcss.svg"
              className="w-7 h-7 dark:fill-white"
            />
            <img src="/icons/vercel.svg" className="w-7 h-7 dark:fill-white" />
            <img src="/icons/notion.svg" className="w-7 h-7 dark:fill-white" />
            <img
              src="/icons/cloudflare.svg"
              className="w-7 h-7 dark:fill-white"
            />
            <img src="/icons/github.svg" className="w-7 h-7 dark:fill-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
