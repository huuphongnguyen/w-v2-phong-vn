import Image from "next/image";
import Lottie from "react-lottie";
import animationData from "../public/lotties/waveline.json";
import { useRouter } from "next/router";

export default function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const router = useRouter();

  return (
    <footer className="flex-col space-y-1 items-center max-w-4xl w-full mt-5 md:mt-0 md:mb-8 mx-auto bg-gray-200 dark:bg-gray-200 bg-opacity-60 px-2 mb-10 md:px-10 rounded-xl">
      <div className="flex flex-col mb-8">
        <div className="flex items-center">
          <div className="flex">
            <div className="flex transform -translate-x-4 translate-y-6">
              <Lottie options={defaultOptions} width={120} height={40} />
            </div>
          </div>
        </div>
        <div className=" transform origin-left scale-75 translate-y-4">
          <img
            src="https://playing.xn--gi-6ja.com/now-playing"
            width="256"
            height="64"
            alt="Now Playing"
          ></img>
        </div>
        <div className="pt-4 px-1 flex items-center">
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
              <a className="font-bold" href="https://vercel.com">
                Vercel
              </a>{" "}
              / with{" "}
              <a className="font-bold" href="https://nextjs.org">
                Next.js
              </a>{" "}
              /{" "}
              <a className="font-bold" href="https://tailwindcss.com/">
                TailwindCSS
              </a>{" "}
              /{" "}
              <a className="font-bold" href="https://mdxjs.com/">
                MDX
              </a>
            </p>
            <p>
              This website is an Open Source Project on{" "}
              <a
                className="font-bold"
                href="https://github.com/huuphongnguyen/w-v2-phong-vn"
              >
                Github
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
