import NextImage from "next/image";

export default function Logo() {
  return (
    <a href="https://phong.vn">
      <div className="bg-white dark:bg-black p-0 -ml-4 md:ml-0 md:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="flex relative items-center w-[140px] h-[31px]">
          <NextImage
            src="/PHONG.svg"
            layout="fill"
            className="object-cover absolute dark:fill-white"
          />
        </div>
      </div>
    </a>
  );
}
