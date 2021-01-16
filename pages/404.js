import Container from "../components/Container";
import NextLink from "next/link";
import Lottie from "react-lottie";
import art from "../public/lotties/404.json";

export default function Custom404() {
  const art404 = {
    loop: true,
    autoplay: true,
    animationData: art,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl w-full">
        <div className="flex space-x-2">
          <span className="text-3xl font-domainet md:text-5xl text-black dark:text-white">
            /
          </span>
          <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            404 - This page could not be found.
          </h1>
        </div>
        <Lottie options={art404} width={250} height={250} />
        <div className="text-black dark:text-white my-10 space-y-3 text-sm">
          <NextLink href="/">
            <a>
              <div className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  ></path>
                </svg>
                <p>Quay trở lại trang chủ</p>
              </div>
            </a>
          </NextLink>
        </div>
      </div>
    </Container>
  );
}
