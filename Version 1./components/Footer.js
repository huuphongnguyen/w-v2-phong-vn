import Image from "next/image";
import Lottie from "react-lottie";
import animationData from "../public/lotties/waveline.json";
import TravelAnimationData from "../public/lotties/travel.json";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Twitter,
  Soundcloud,
  Spotify,
  Github,
  DevTo,
  ProductHunt,
  Telegram,
  Instagram,
} from "../components/icons/LogoIcons";
import { ChevronDown } from "./icons/CustomIcons";
import { QuestionMarkCircle } from "./icons/HeroIcons";
import DropNowPlayingInfo from "./elements/DropNowPlayingInfo";
import DropTravelLottie from "./elements/DropTravelLottie";

export default function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const TravelDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TravelAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const router = useRouter();

  const githublink = "https://github.com/huuphongnguyen";
  const producthuntlink = "https://producthunt.com/@isnhp";
  const devtolink = "https://dev.to/black";
  const twitterlink = "https://twitter.com/isnhp";
  const spotifylink =
    "https://open.spotify.com/user/bwunro2q3l6dcfnvz6vb07g89?si=PuclZr0ZSS6cm0EMh2Gq-g";
  const soundcloudlink = "https://soundcloud.com/isnhp";
  const telegramlink = "https://t.me/isnhp";
  const instagramlink = "https://instagram.com/isnhp";

  return (
    <footer className="flex-col space-y-1 items-center max-w-4xl w-full mt-5 md:mt-0 mb-2 md:mb-8 mx-auto ">
      <div className="md:flex md:space-x-7">
        <div className="grid grid-cols-1 bg-gray-200 dark:bg-gray-200 bg-opacity-60 px-2 mb-10 md:px-10 rounded-xl w-full md:w-5/6 md:h-270px justify-center items-center">
          <div className="grid grid-cols-3 md:flex pb-10 ml-3 gap-3 md:w-full items-center pt-6 -mb-12">
            <NextLink href="/tools">
              <a>
                <div className="inline-flex text-gray-700 text-xs hover:bg-gray-200 dark:hover:bg-gray-300 px-2 py-1 transform -translate-x-2 font-bold rounded-md cursor-pointer uppercase">
                  <p>/ Tools</p>
                </div>
              </a>
            </NextLink>
            <NextLink href="/credit">
              <a>
                <div className="inline-flex text-gray-700 text-xs hover:bg-gray-200 dark:hover:bg-gray-300 px-2 py-1 transform -translate-x-2 font-bold rounded-md cursor-pointer uppercase">
                  <p>/ Credit</p>
                </div>
              </a>
            </NextLink>
            <NextLink href="/tweets">
              <a>
                <div className="inline-flex text-gray-700 text-xs hover:bg-gray-200 dark:hover:bg-gray-300 px-2 py-1 transform -translate-x-2 font-bold rounded-md cursor-pointer uppercase">
                  <p>/ Tweets</p>
                </div>
              </a>
            </NextLink>
            <NextLink href="/domains">
              <a>
                <div className="inline-flex text-gray-700 text-xs hover:bg-gray-200 dark:hover:bg-gray-300 px-2 py-1 transform -translate-x-2 font-bold rounded-md cursor-pointer uppercase">
                  <p>/ Domains</p>
                </div>
              </a>
            </NextLink>
            <NextLink href="/snippets">
              <a>
                <div className="inline-flex text-gray-700 text-xs hover:bg-gray-200 dark:hover:bg-gray-300 px-2 py-1 transform -translate-x-2 font-bold rounded-md cursor-pointer uppercase">
                  <p>/ Snippets</p>
                </div>
              </a>
            </NextLink>
            <NextLink href="/words">
              <a>
                <div className="inline-flex text-gray-700 text-xs hover:bg-gray-200 dark:hover:bg-gray-300 px-2 py-1 transform -translate-x-2 font-bold rounded-md cursor-pointer uppercase">
                  <p>/ Words</p>
                </div>
              </a>
            </NextLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex relative flex-col mb-8 items-start justify-start">
              <div className="flex items-center">
                <div className="flex">
                  <div className="flex transform -translate-x-4 translate-y-6">
                    <Lottie
                      options={defaultOptions}
                      width={120}
                      height={40}
                      isClickToPauseDisabled={true}
                    />
                  </div>
                </div>
              </div>
              <div className=" transform origin-left scale-75 translate-y-4 mb-20 items-center">
                <img
                  src="https://playing.xn--gi-6ja.com/now-playing"
                  width="256"
                  height="64"
                  alt="Now Playing"
                />
                <DropNowPlayingInfo
                  className="outline-none"
                  namebutton={
                    <div className="absolute top-0 transform translate-x-9 translate-y-3 p-2 rounded-full right-0 hover:bg-gray-300  cursor-pointer">
                      <QuestionMarkCircle classNameSync="w-6 h-6 text-gray-500 hover:text-black" />
                    </div>
                  }
                >
                  <div className="bg-white relative z-100">
                    <p className="text-black">
                      Được đồng bộ theo thời gian thực với Spotify của Phong,
                      thông qua Spotify API.
                      <br />
                      <strong>Bí mật</strong> [ /credit 1.1 ]: 2 người ở 2 vị
                      trí khác nhau vào cùng một thời điểm và nghe cùng 1 bài
                      hát với cùng thời lượng sẽ kích hoạt được khả năng mà con
                      người đã mất "Thần giao cách cảm".
                    </p>
                  </div>
                </DropNowPlayingInfo>
              </div>
              <div className="pt-4 px-1 flex absolute bottom-0 w-full-110 items-center">
                <div className="flex items-center">
                  <Image
                    className="rounded-full"
                    src="/icons/plant.svg"
                    alt="Phong"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="text-xs ml-2 text-black">
                  <p>
                    designed / build / developed by{" "}
                    <a className="font-bold" href="https://phong.vn/phong">
                      Phong
                    </a>
                  </p>
                  <p>
                    hosted on{" "}
                    <a
                      className="font-bold"
                      href="https://vercel.com"
                      target="_blank"
                    >
                      Vercel
                    </a>{" "}
                  </p>
                  <p>
                    made with{" "}
                    <a
                      className="font-bold"
                      href="https://nextjs.org"
                      target="_blank"
                    >
                      Next.js
                    </a>{" "}
                    /{" "}
                    <a
                      className="font-bold"
                      href="https://tailwindcss.com/"
                      target="_blank"
                    >
                      TailwindCSS
                    </a>{" "}
                    /{" "}
                    <a
                      className="font-bold"
                      href="https://mdxjs.com/"
                      target="_blank"
                    >
                      MDX
                    </a>{" "}
                    /{" "}
                    <a
                      className="font-bold"
                      href="https://notion.so/"
                      target="_blank"
                    >
                      Notion
                    </a>
                  </p>
                  <p>
                    This website is an Open Source Project on{" "}
                    <a
                      className="font-bold"
                      href="https://github.com/huuphongnguyen/w-v2-phong-vn"
                      target="_blank"
                    >
                      Github
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <DropTravelLottie
              className="outline-none bg-red-100"
              namebutton={
                <div className=" filter-grayscale z-10 ml-10 flex items-center justify-center">
                  <Lottie
                    options={TravelDefaultOptions}
                    width={1000 / 3.5}
                    height={800 / 3.5}
                    isClickToPauseDisabled={true}
                  />
                </div>
              }
            />
          </div>
        </div>
        <div className="hidden md:flex text-gray-500 w-full md:w-1/6 mb-10 justify-center">
          <div className="w-full">
            <div className="pt-4 pb-8 bg-gray-100 rounded-xl px-4 h-270px">
              <div className="h-full mb-2 overflow-y-scroll space-y-2 justify-center no-scrollbar">
                <a href={githublink} target="_blank">
                  <div className="inline-flex w-full py-2 items-center mx-auto space-x-1 justify-center hover:bg-gray-200 rounded-md cursor-pointer hover:text-black">
                    <Github classNameSync="w-5 h-5 fill-current" />
                    <p className="text-sm font-bold">Github</p>
                  </div>
                </a>

                <a href={producthuntlink} target="_blank">
                  <div className="inline-flex w-full py-2 items-center mx-auto space-x-1 justify-center hover:bg-gray-200 rounded-md cursor-pointer hover:text-yellow-600">
                    <ProductHunt classNameSync="w-5 h-5 fill-current" />
                    <p className="text-sm font-bold">@isnhp</p>
                  </div>
                </a>

                <a href={twitterlink} target="_blank">
                  <div className="inline-flex w-full py-2 items-center mx-auto space-x-1 justify-center hover:bg-gray-200 rounded-md cursor-pointer hover:text-green-500">
                    <Twitter classNameSync="w-5 h-5 fill-current" />
                    <p className="text-sm font-bold">Twitter</p>
                  </div>
                </a>

                <a href={spotifylink} target="_blank">
                  <div className="inline-flex w-full py-2 items-center mx-auto space-x-1 justify-center hover:bg-gray-200 rounded-md cursor-pointer hover:text-green-500">
                    <Spotify classNameSync="w-5 h-5 fill-current" />
                    <p className="text-sm font-bold">Spotify</p>
                  </div>
                </a>

                <a href={devtolink} target="_blank">
                  <div className="inline-flex w-full py-2 items-center mx-auto space-x-1 justify-center hover:bg-gray-200 rounded-md cursor-pointer hover:text-black">
                    <DevTo classNameSync="w-6 h-6 fill-current" />
                    <p className="text-sm font-bold">@black</p>
                  </div>
                </a>

                <a href={soundcloudlink} target="_blank">
                  <div className="inline-flex w-full py-2 items-center mx-auto space-x-1 justify-center hover:bg-gray-200 rounded-md cursor-pointer hover:text-yellow-600">
                    <Soundcloud classNameSync="w-5 h-5 fill-current" />
                    <p className="text-sm font-bold">@donuf</p>
                  </div>
                </a>

                <a href={telegramlink} target="_blank">
                  <div className="inline-flex w-full py-2 items-center mx-auto space-x-1 justify-center hover:bg-gray-200 rounded-md cursor-pointer hover:text-blue-400">
                    <Telegram classNameSync="w-5 h-5 fill-current" />
                    <p className="text-sm font-bold">@isnhp</p>
                  </div>
                </a>

                <a href={instagramlink} target="_blank">
                  <div className="inline-flex w-full py-2 items-center mx-auto space-x-1 justify-center hover:bg-gray-200 rounded-md cursor-pointer hover:text-black">
                    <Instagram classNameSync="w-5 h-5 fill-current" />
                    <p className="text-sm font-bold">@donuf</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center space-x-1 justify-center opacity-50">
                <p className="text-xs">scroll more</p>
                <ChevronDown classNameSync="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
