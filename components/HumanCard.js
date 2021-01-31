import NextImage from "next/image";
import NextLink from "next/link";
import { BadgeCheckSolid, Identification } from "./icons/HeroIcons";

export default function HumanCard({ imagesrc, des, namehuman, profileurl }) {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <NextImage
          className="rounded-md"
          src={imagesrc}
          width={100}
          height={100}
          quality="50"
          priority="true"
        />
      </div>
      <div className="space-y-4">
        <div className="space-y-1 mb-3">
          <div className="flex items-center space-x-1">
            <h2 className="text-xl md:text-2xl font-bold">{namehuman}</h2>
            <BadgeCheckSolid classNameSync="w-7 h-7 text-red-500" />
          </div>
          <p>{des}</p>
        </div>
        <NextLink href={profileurl}>
          <a>
            <div className="inline-flex items-center space-x-1 hover:bg-gray-200 dark:hover:bg-gray-700 p-0 md:p-2 rounded-md md:transform md:-translate-x-2 cursor-pointer">
              <Identification classNameSync="w-7 h-7 mr-1" />
              <p className="font-bold">Trang thông tin</p>
            </div>
          </a>
        </NextLink>
      </div>
    </div>
  );
}
