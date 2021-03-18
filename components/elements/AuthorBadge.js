import NextImage from "next/image";

export default function AuthorBadge() {
  return (
    <div className="flex items-center space-x-1">
      <div className="w-10 h-10 object-cover relative">
        <NextImage
          src="/avatar.jpg"
          layout="fill"
          className="rounded-full absolute"
          quality={50}
        />
      </div>
      <div className="-space-y-1">
        <p className="text-black dark:text-white font-bold">Nguyễn Hữu Phong</p>
        <p className="text-gray-500 dark:text-gray-400 font-bold font-carbon-bold text-xl uppercase">
          @isnhp
        </p>
      </div>
    </div>
  );
}
