import { useState } from "react";
import ArchillectImageGrid from "../components/ArchillectImageGrid";
import Container from "../components/Container";
import ExternalLink from "../components/elements/ExternalLink";
import {
  CubeTransparent,
  Mail,
  MailOpen,
  ChevronUp,
  Cube,
  DocumentText,
  Document,
  TrendingDown,
  TrendingUp,
} from "../components/icons/HeroIcons";
import { ChevronDown } from "../components/icons/CustomIcons";
import toast, { Toaster } from "react-hot-toast";
import HashflagsGrid from "../components/HashflagsGrid";
import { Archillect, Twitter } from "../components/icons/LogoIcons";
import FullLetter from "../components/FullLetter";
import EmojiGrid from "../components/EmojiGrid";
import TextLoop from "react-text-loop";

const defaultEndpoint = process.env.ARCHILLECT_AI_UNOFFICIAL_API;
const emojiEndpoint = process.env.EMOJI_APPLE_API;

var _ = require("lodash");

const FullLetterFetching = () => <FullLetter />;

const ArchillectImageGridShow = ({ sync }) => (
  <>
    <ArchillectImageGrid data={sync} />
  </>
);

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const resEmoji = await fetch(emojiEndpoint);

  const data = await res.json();
  const emojiData = await resEmoji.json();

  return {
    props: {
      data,
      emojiData,
    },
  };
}

export default function Home({ data, emojiData }) {
  const [isShowingFullLetter, showFullLetter] = useState(false);

  const [isShowingArchillectImageGrid, showArchillectImageGrid] = useState(
    false
  );
  const [isShowingHashflagsGrid, showHashflagsGrid] = useState(false);
  const [isShowingEmojiGrid, showEmojiGrid] = useState(false);

  const archillectarray = [data];
  const emojiarray = [emojiData];

  const notifyArchillectOn = () => toast.success("😆 Xin chào !!!");
  const notifyArchillectOff = () => toast("🥲 Goodbye !!!");

  const notifyHashflagOn = () => toast.success("🐧 Đã hiển thị !!!");
  const notifyHashflagOff = () => toast("🥲 Goodbye !!!");

  const notifyEmojiOn = () => toast.success("Emoji đây !!!");
  const notifyEmojiOff = () => toast("🥲 Goodbye !!!");

  const emojiaccess = emojiarray[0].filter((e) =>
    e.category.includes("Smileys & Emotion")
  );
  const randomemojidata = _.sampleSize(emojiaccess, [emojiaccess.length]);
  const randomemojidataspliced = randomemojidata.splice(0, 22);

  return (
    <Container>
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl w-full">
        <div className="flex space-x-2">
          <span className="text-3xl font-domainet md:text-5xl text-black dark:text-white">
            /
          </span>
          <h2 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Front-Page
          </h2>
        </div>
        {isShowingFullLetter ? (
          <div>
            <FullLetterFetching />
            <button
              type="button"
              className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onClick={() => showFullLetter(false)}
            >
              <MailOpen classNameSync="text-red-500 w-7 h-7 mr-1" />
              <p>Cảm ơn bạn đã đọc nó</p>
              <ChevronUp classNameSync="text-black dark:text-white w-4 h-4 ml-1" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            onClick={() => showFullLetter(true)}
          >
            <Mail classNameSync="text-red-500 w-7 h-7 mr-1" />
            <p>Một lá thư từ Phong</p>
            <ChevronDown classNameSync="text-black dark:text-white w-4 h-4 ml-1" />
          </button>
        )}
      </div>
      <div className=" mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:mb-10 md:-mt-2 p-5 md:p-10 rounded-xl w-full">
        <div className="flex space-x-2">
          <span className="text-3xl font-domainet md:text-5xl text-black dark:text-white">
            /
          </span>
          <h2 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Inspiration
          </h2>
        </div>
        <div className="space-y-4">
          <div className="border-4 p-2">
            <div className="py-2">
              <div className="block md:flex md:justify-between">
                <div className="flex items-center space-x-2 text-black dark:text-white pb-4 ml-4">
                  <div>
                    <Archillect classNameSync="w-5 h-5 dark:bg-white" />
                  </div>
                  <p className="text-sm font-bold">
                    Lấy cảm hứng từ Archillect
                  </p>
                </div>
                <div className="text-black mb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200 dark:bg-gray-700 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
                      onClick={() => {
                        showArchillectImageGrid(true);
                        showHashflagsGrid(false);
                        showEmojiGrid(false);
                        notifyArchillectOn();
                      }}
                    >
                      <div className="flex justify-center">
                        <Cube classNameSync="text-black dark:text-white w-7 h-7 mr-1 mb-2 md:mb-0" />
                      </div>
                      Gọi Archillect
                    </button>
                    <Toaster position="bottom-center" reverseOrder={false} />
                    <button
                      type="button"
                      className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200 dark:bg-gray-700 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
                      onClick={() => {
                        showArchillectImageGrid(false);

                        notifyArchillectOff();
                      }}
                    >
                      <div className="flex justify-center">
                        <CubeTransparent classNameSync="text-black dark:text-white w-7 h-7 mr-1 mb-2 md:mb-0" />
                      </div>
                      Tắt Archillect
                    </button>
                  </div>
                </div>
              </div>
              {isShowingArchillectImageGrid ? (
                <ArchillectImageGridShow sync={archillectarray[0]} />
              ) : (
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  Archillect [archive + intellect] là một AI tự động khám phá -
                  tìm kiếm - lựa chọn hình ảnh trên Internet. Tìm hiểu thêm về
                  Archillect tại{" "}
                  <ExternalLink
                    href="https://archillect.com/"
                    colortext="text-gray-500"
                    colortexthover="text-black dark:text-white"
                  >
                    đây
                  </ExternalLink>
                </p>
              )}
            </div>
          </div>
          <div className="border-4 p-2">
            <div className="block md:flex md:justify-between py-2">
              <div className="flex items-center space-x-2 text-black dark:text-white pb-4 ml-4">
                <div>
                  <Twitter classNameSync="w-5 h-5 fill-current text-black dark:text-white" />
                </div>
                <p className="text-sm font-bold">
                  Lấy cảm hứng từ Twitter Hashflags
                </p>
              </div>
              <div className="text-black mb-4">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200  dark:bg-gray-700 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
                    onClick={() => {
                      showHashflagsGrid(true);
                      showArchillectImageGrid(false);
                      showEmojiGrid(false);
                      notifyHashflagOn();
                    }}
                  >
                    <div className="flex justify-center">
                      <DocumentText classNameSync="text-black dark:text-white w-7 h-7 mr-1 mb-2 md:mb-0" />
                    </div>
                    Hiển thị
                  </button>

                  <button
                    type="button"
                    className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200 dark:bg-gray-700 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
                    onClick={() => {
                      showHashflagsGrid(false);
                      notifyHashflagOff();
                    }}
                  >
                    <div className="flex justify-center">
                      <Document classNameSync="text-black dark:text-white w-7 h-7 mr-1 mb-2 md:mb-0" />
                    </div>
                    Tắt đi
                  </button>
                </div>
              </div>
            </div>
            {isShowingHashflagsGrid ? (
              <HashflagsGrid />
            ) : (
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Hashflags là một khái niệm được Twitter sử dụng để chỉ những
                icon bên cạnh các Hashtags. <br />
                Chỉ những Hashtags thật sự quan trọng và đang hot mới có
                Hashflags.
                <br /> Các Hashflags chỉ tồn tại trong một khoảng thời gian nhất
                định trước khi biến mất.{" "}
              </p>
            )}
          </div>

          <div className="border-4 p-2">
            <div className="block md:flex md:justify-between py-2">
              <div className="flex items-center space-x-2 text-black dark:text-white pb-4 ml-4">
                <div className="bg-gray-200 py-1 px-2 rounded-lg">
                  <TextLoop
                    interval={1300}
                    springConfig={{ stiffness: 180, damping: 12 }}
                    fade={true}
                  >
                    {randomemojidataspliced.map((emoji, index) => (
                      <p className="text-3xl text-black" key={index}>
                        {emoji.emoji}
                      </p>
                    ))}
                  </TextLoop>
                </div>
                <p className="text-sm font-bold">EMOJI LAUCH SPACE</p>
              </div>
              <div className="text-black mb-4">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200  dark:bg-gray-700 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
                    onClick={() => {
                      showEmojiGrid(true);
                      showArchillectImageGrid(false);
                      showHashflagsGrid(false);
                      notifyEmojiOn();
                    }}
                  >
                    <div className="flex justify-center">
                      <TrendingUp classNameSync="text-black dark:text-white w-7 h-7 mr-1 mb-2 md:mb-0" />
                    </div>
                    Open up
                  </button>

                  <button
                    type="button"
                    className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200 dark:bg-gray-700 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
                    onClick={() => {
                      showEmojiGrid(false);
                      notifyEmojiOff();
                    }}
                  >
                    <div className="flex justify-center">
                      <TrendingDown classNameSync="text-black dark:text-white w-7 h-7 mr-1 mb-2 md:mb-0" />
                    </div>
                    Close down
                  </button>
                </div>
              </div>
            </div>
            {isShowingEmojiGrid ? (
              <EmojiGrid emojis={emojiarray[0]} />
            ) : (
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                220 emoji bất kỳ từ khoảng ~1804 emoji của Apple.
              </p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
