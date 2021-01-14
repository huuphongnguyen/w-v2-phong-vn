import Image from "next/image";
import Lottie from "react-lottie";
import animationData from "../public/lotties/waveline.json";
import { useRouter } from "next/router";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-sm text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

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
    <footer className="flex-col space-y-1 items-center max-w-4xl w-full mt-10 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
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
        <div className="py-4 px-1 flex items-center">
          <div className="flex items-center">
            <Image
              className="rounded-full"
              src="/icons/plant.svg"
              alt="Phong"
              width={30}
              height={30}
            />
          </div>
          <div className="text-xs ml-2">
            <p>
              designed / build / developed by{" "}
              <a className="font-bold" href="https://phong.vn">
                phong
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
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
