import Container from "../components/Container";
import LetterByPhong from "../components/elements/LetterByPhong";
import NextImage from "next/image";
import { Globe } from "akar-icons";
import {
  foundersData,
  librariesData,
  mainTechsData,
} from "../data/creditsData";
import ExternalLink from "../components/elements/ExternalLink";

export default function Credits() {
  const foundersDataArray = foundersData;
  const mainTechsDataArray = mainTechsData;
  const librariesDataArray = librariesData;

  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-xl uppercase font-carbon-bold">
          <p>/</p>
          <h1>Credits</h1>
        </div>
        <div className="text-black dark:text-white space-y-7">
          <LetterByPhong letterNumber="#0002">
            <p>
              Dành một lời cảm ơn và trân trọng nhất đến các thư viện và dự án
              mã nguồn mở dưới đây. Thế giới này vận hành theo hướng học hỏi và
              kế thừa những điều tuyệt vời trước đó. Sẽ rất khó hoặc có thể
              không bao giờ Phong có thể tạo được một trang cho bản thân nếu
              không có các dự án này. Cảm ơn những người rất giỏi từ khắp nơi
              trên hành tinh này.
            </p>
          </LetterByPhong>
          <div className="space-y-4">
            <div>
              <h2 className="font-bold text-xl">
                Những người rất giỏi đã hỗ trợ
              </h2>
              <p className="text-sm">
                Các chia sẻ / tutorial / open-source / tweet được chia sẻ bởi
                những người rất giỏi này đã giúp rất rất nhiều.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {foundersDataArray.map((founder, index) => (
                <div className="p-2 border-2 border-black dark:border-white inline-block">
                  <div
                    className="md:flex items-center space-x-0 md:space-x-2"
                    key={index}
                  >
                    <NextImage src={founder[1]} height={90} width={90} />
                    <div>
                      <h3 className="font-bold">{founder[0]}</h3>
                      <p className="font-carbon-bold text-gray-500 dark:text-gray-400 text-lg uppercase">
                        {founder[2]}
                      </p>
                      <p>{founder[3]}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <a href={founder[4]} target="_blank">
                          <Globe className="w-5 h-5" />
                        </a>

                        <a href={founder[5]} target="_blank">
                          <img
                            src="/icons/twitter.svg"
                            className="w-5 h-5 dark:fill-white"
                          />
                        </a>
                        <a href={founder[6]} target="_blank">
                          <img
                            src="/icons/github.svg"
                            className="w-5 h-5 dark:fill-white"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-bold text-xl">
                Những công nghệ chính sử dụng
              </h2>
              <p className="text-sm">
                Những công nghệ chính sử dụng trong quá trình xây dựng và phát
                triển website / các app liên quan.
              </p>
            </div>
            <div className="space-y-2">
              {mainTechsDataArray.map((mainTech, index) => (
                <div key={index} className="border_dash_animated">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold uppercase font-carbon-bold text-xl border_dashed_animated">
                      {mainTech[0]}
                    </h3>
                    <p>-</p>
                    <div className="space-x-2">
                      <ExternalLink href={mainTech[2]}>Website</ExternalLink>
                      <ExternalLink href={mainTech[3]}>Github</ExternalLink>
                    </div>
                  </div>
                  <p className="text-sm">{mainTech[1]}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-bold text-xl">Những thư viện hỗ trợ</h2>
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
            <div className="space-y-2">
              {librariesDataArray.map((library, index) => (
                <div key={index} className="border_dash_animated">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold uppercase font-carbon-bold text-xl border_dashed_animated">
                      {library[0]}
                    </h3>
                    <p>-</p>
                    <div className="space-x-2">
                      <ExternalLink href={library[2]}>Website</ExternalLink>
                      <ExternalLink href={library[3]}>Github</ExternalLink>
                    </div>
                  </div>
                  <p className="text-sm">{library[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
