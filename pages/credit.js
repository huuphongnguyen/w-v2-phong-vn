import Container from "../components/Container";
import { NextSeo } from "next-seo";
import { UserGroup, GlobeAlt } from "../components/icons/HeroIcons";
import NextImage from "next/image";
import { Github, Twitter } from "../components/icons/LogoIcons";

const url = "https://phong.vn/credit";
const title = "Credit – PHONG FOUNDATION";
const description =
  "Trang tổng hợp và credit các nguồn mà website của PHONG FOUNDATION sử dụng. Một sự cảm ơn và trân trọng nhất dành cho những người đã tạo ra các công cụ tuyệt vời này.";

const defaultEndpoint = process.env.CREDIT_NOTION_UNOFFICIAL_API;

export async function getStaticProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Credit({ data }) {
  const creditsdata = [data];
  const creditsarray = creditsdata[0];

  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl w-full">
        <div className="flex space-x-2">
          <span className="text-3xl font-domainet md:text-5xl text-black dark:text-white">
            /
          </span>
          <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Credit
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm mb-4">
          Trang tổng hợp và credit các nguồn mà website của PHONG FOUNDATION sử
          dụng. Một sự cảm ơn và trân trọng nhất dành cho những người đã tạo ra
          các công cụ tuyệt vời này.
        </p>
        <div className="text-black dark:text-gray-200">
          <div className="mb-7">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <UserGroup classNameSync="text-black dark:text-white w-7 h-7" />
                <h2 className="font-bold text-xl md:text-2xl">
                  Những người rất giỏi đã hỗ trợ
                </h2>
              </div>
              <p className="text-sm">
                Các chia sẻ / tutorial / open-source / tweet được chia sẻ bởi
                những người rất giỏi này đã giúp rất rất rất nhiều. Dành những
                lời cảm ơn và trân trọng nhất.
              </p>
            </div>
            <div className="my-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="inline-flex items-center space-x-3 p-2 bg-gray-200 dark:bg-gray-700 rounded-2xl">
                  <div>
                    <NextImage
                      className="rounded-xl"
                      src="https://pbs.twimg.com/profile_images/1029230542716264448/LgLb--Of_400x400.jpg"
                      height={90}
                      width={90}
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <h3 className="font-bold text-lg">Guillermo Rauch</h3>
                      <p className="text-base font-bold text-gray-500 dark:text-gray-400">
                        @rauchg
                      </p>
                    </div>
                    <p className="text-sm">
                      CEO of{" "}
                      <a
                        className="font-bold"
                        href="https://vercel.com"
                        target="_blank"
                      >
                        Vercel
                      </a>
                    </p>
                    <div className="flex items-center space-x-1">
                      <a href="https://twitter.com/rauchg" target="_blank">
                        <div className="inline-flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer ">
                          <Twitter classNameSync="text-black fill-current dark:text-gray-200 w-5 h-5 " />
                        </div>
                      </a>
                      <a href="https://rauchg.com/" target="_blank">
                        <div className="inline-flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer">
                          <GlobeAlt classNameSync="text-black dark:text-gray-200 w-5 h-5" />
                        </div>
                      </a>

                      <a href="https://github.com/rauchg" target="_blank">
                        <div className="inline-flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer">
                          <Github classNameSync="fill-current text-black dark:text-gray-200 w-5 h-5" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-3 p-2 bg-gray-200 dark:bg-gray-700 rounded-2xl">
                  <div>
                    <NextImage
                      className="rounded-xl"
                      src="https://pbs.twimg.com/profile_images/1194080814688079872/6qhYKGKC_400x400.jpg"
                      height={90}
                      width={90}
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <h3 className="font-bold text-lg">Lee Robinson</h3>
                      <p className="text-base font-bold text-gray-500 dark:text-gray-400">
                        @leeerob
                      </p>
                    </div>
                    <p className="text-sm">
                      Solutions Architect / DevRel at{" "}
                      <a
                        className="font-bold"
                        href="https://vercel.com"
                        target="_blank"
                      >
                        Vercel
                      </a>
                    </p>
                    <div className="flex items-center space-x-1">
                      <a href="https://twitter.com/leeerob" target="_blank">
                        <div className="inline-flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer ">
                          <Twitter classNameSync="text-black fill-current dark:text-gray-200 w-5 h-5 " />
                        </div>
                      </a>
                      <a href="https://leerob.io/" target="_blank">
                        <div className="inline-flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer">
                          <GlobeAlt classNameSync="text-black dark:text-gray-200 w-5 h-5" />
                        </div>
                      </a>

                      <a href="https://github.com/leerob" target="_blank">
                        <div className="inline-flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer">
                          <Github classNameSync="fill-current text-black dark:text-gray-200 w-5 h-5" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-3 p-2 bg-gray-200 dark:bg-gray-700 rounded-2xl">
                  <div>
                    <NextImage
                      className="rounded-xl"
                      src="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg"
                      height={90}
                      width={90}
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <h3 className="font-bold text-lg">Adam Wathan</h3>
                      <p className="text-base font-bold text-gray-500 dark:text-gray-400">
                        @adamwathan
                      </p>
                    </div>
                    <p className="text-sm">
                      Creator of{" "}
                      <a
                        className="font-bold"
                        href="https://tailwindcss.com"
                        target="_blank"
                      >
                        TailwindCSS
                      </a>
                    </p>
                    <div className="flex items-center space-x-1">
                      <a href="https://twitter.com/adamwathan" target="_blank">
                        <div className="inline-flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer ">
                          <Twitter classNameSync="text-black fill-current dark:text-gray-200 w-5 h-5 " />
                        </div>
                      </a>
                      <a href="https://adamwathan.me/" target="_blank">
                        <div className="inline-flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer">
                          <GlobeAlt classNameSync="text-black dark:text-gray-200 w-5 h-5" />
                        </div>
                      </a>

                      <a href="https://github.com/adamwathan" target="_blank">
                        <div className="inline-flex items-center justify-center p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer">
                          <Github classNameSync="fill-current text-black dark:text-gray-200 w-5 h-5" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-7">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <UserGroup classNameSync="text-black dark:text-white w-7 h-7" />
                <h2 className="font-bold text-xl md:text-2xl">
                  Những công nghệ chính sử dụng
                </h2>
              </div>
              <p className="text-sm">
                Những công nghệ chính sử dụng trong quá trình xây dựng và phát
                triển website / các app liên quan.
              </p>
            </div>
            <div className="my-3 space-y-2">
              {creditsarray
                .filter((credit) => credit.fields.tag.includes("main"))
                .map((credit, index) => (
                  <div
                    key={index}
                    className="flex-col items-center space-x-3 bg-gray-200 dark:bg-gray-700 p-2 rounded-xl"
                  >
                    <div className="space-y-2 md:space-y-0 space-x-3 md:flex items-center md:space-x-2 md:items-center">
                      <h3 className="text-white bg-black px-2 py-1 rounded-full text-sm font-bold">
                        {credit.fields.name}
                      </h3>
                      <div className="flex item-center space-x-1">
                        <a href={credit.fields.website} target="_blank">
                          <p className="px-2 py-1 bg-red-100 text-black text-sm uppercase font-bold rounded-full">
                            Website
                          </p>
                        </a>
                        <a href={credit.fields.github} target="_blank">
                          <p className="px-2 py-1 bg-blue-100 text-black text-sm uppercase font-bold rounded-full">
                            Github
                          </p>
                        </a>
                      </div>
                    </div>
                    <p className="text-sm mt-2">{credit.fields.description}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="mb-7">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <UserGroup classNameSync="text-black dark:text-white w-7 h-7" />
                <h2 className="font-bold text-xl md:text-2xl">
                  Những thư viện hỗ trợ
                </h2>
              </div>
              <p className="text-sm">
                Những thư viện hỗ trợ chức năng và hỗ trợ thực hiện các tác vụ
                khác giúp việc viết code trở nên tốt hơn.
                <br /> Xem đầy đủ / chi tiết tại{" "}
                <a
                  className="font-bold"
                  href="https://github.com/huuphongnguyen/phong.vn/blob/main/package.json"
                  target="_blank"
                >
                  phong.vn/package.json
                </a>{" "}
                trên Github
              </p>
            </div>
            <div className="my-3 space-y-2">
              {creditsarray
                .filter((credit) => credit.fields.tag.includes("support"))
                .map((credit, index) => (
                  <div
                    key={index}
                    className="flex-col items-center space-x-3 bg-gray-200 dark:bg-gray-700 p-2 rounded-xl"
                  >
                    <div className="space-y-2 md:space-y-0 space-x-3 md:flex items-center md:space-x-2 md:items-center">
                      <h3 className="text-white bg-black px-2 py-1 rounded-full text-sm font-bold">
                        {credit.fields.name}
                      </h3>
                      <div className="flex item-center space-x-1">
                        <a href={credit.fields.website} target="_blank">
                          <p className="px-2 py-1 bg-red-100 text-black text-sm uppercase font-bold rounded-full">
                            Website
                          </p>
                        </a>
                        <a href={credit.fields.github} target="_blank">
                          <p className="px-2 py-1 bg-blue-100 text-black text-sm uppercase font-bold rounded-full">
                            Github
                          </p>
                        </a>
                      </div>
                    </div>
                    <p className="text-sm mt-2">{credit.fields.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
