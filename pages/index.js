import { useState } from "react";
import ArchillectImageGrid from "../components/ArchillectImageGrid";
import Container from "../components/Container";
import ExternalLink from "../components/elements/ExternalLink";
import {
  Chip,
  CubeTransparent,
  QRCode,
  Mail,
  MailOpen,
  ChevronUp,
  Cube,
  DocumentText,
  Document,
  PhoneOutCome,
  ThumbUp,
  TrendingDown,
  TrendingUp,
} from "../components/icons/HeroIcons";
import { ChevronDown, MemeDealer } from "../components/icons/CustomIcons";
import toast, { Toaster } from "react-hot-toast";
import HashflagsGrid from "../components/HashflagsGrid";
import { Archillect, Twitter } from "../components/icons/LogoIcons";
import MemeDealerGrid from "../components/MemeDealerGrid";
import FullLetter from "../components/FullLetter";
import EmojiGrid from "../components/EmojiGrid";

const defaultEndpoint = process.env.ARCHILLECT_AI_UNOFFICIAL_API;
const memeDealerEndpoint = process.env.MEME_DEALER_REDDIT_API;
const emojiEndpoint = process.env.EMOJI_APPLE_API;

const FullLetterFetching = () => <FullLetter />;

const ArchillectImageGridShow = ({ sync }) => (
  <>
    <ArchillectImageGrid data={sync} />
  </>
);

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const resMemeDealer = await fetch(memeDealerEndpoint);
  const resEmoji = await fetch(emojiEndpoint);

  const data = await res.json();
  const memeDealerData = await resMemeDealer.json();
  const emojiData = await resEmoji.json();

  return {
    props: {
      data,
      memeDealerData,
      emojiData,
    },
  };
}

export default function Home({ data, memeDealerData, emojiData }) {
  const [isShowingFullLetter, showFullLetter] = useState(false);

  const [isShowingArchillectImageGrid, showArchillectImageGrid] = useState(
    false
  );
  const [isShowingHashflagsGrid, showHashflagsGrid] = useState(false);
  const [isShowingMemeDealerGrid, showMemeDealerGrid] = useState(false);
  const [isShowingEmojiGrid, showEmojiGrid] = useState(false);

  const archillectarray = [data];
  const memedealerarray = [memeDealerData];
  const emojiarray = [emojiData];

  const notifyArchillectOn = () => toast.success("😆 Xin chào !!!");
  const notifyArchillectOff = () => toast("🥲 Goodbye !!!");

  const notifyHashflagOn = () => toast.success("🐧 Đã hiển thị !!!");
  const notifyHashflagOff = () => toast("🥲 Goodbye !!!");

  const notifyMemeOn = () => toast.success("MEME cho hôm nay!!!");
  const notifyMemeOff = () => toast("🥲 Goodbye !!!");

  const notifyEmojiOn = () => toast.success("Emoji đây !!!");
  const notifyEmojiOff = () => toast("🥲 Goodbye !!!");

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
                        notifyArchillectOn();
                      }}
                    >
                      <div className="flex justify-center">
                        <Cube classNameSync="text-black dark:text-white w-7 h-7 mr-1 mb-2 md:mb-0" />
                      </div>
                      Gọi Archillect
                    </button>
                    <Toaster />
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
                <div>
                  <MemeDealer classNameSync="w-6 h-6 bg-transparent dark:bg-white rounded" />
                </div>
                <p className="text-sm font-bold">Meme Dealer?? huh!!!</p>
              </div>
              <div className="text-black mb-4">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200  dark:bg-gray-700 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
                    onClick={() => {
                      showMemeDealerGrid(true);
                      notifyMemeOn();
                    }}
                  >
                    <div className="flex justify-center">
                      <PhoneOutCome classNameSync="text-black dark:text-white w-7 h-7 mr-1 mb-2 md:mb-0" />
                    </div>
                    Give me some MEMEs!!
                  </button>

                  <button
                    type="button"
                    className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200 dark:bg-gray-700 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
                    onClick={() => {
                      showMemeDealerGrid(false);
                      notifyMemeOff();
                    }}
                  >
                    <div className="flex justify-center">
                      <ThumbUp classNameSync="text-black dark:text-white w-7 h-7 mr-1 mb-2 md:mb-0" />
                    </div>
                    OK!! That's enough....
                  </button>
                </div>
              </div>
            </div>
            {isShowingMemeDealerGrid ? (
              <MemeDealerGrid sync={memedealerarray[0]} />
            ) : (
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                20 MEMEs được lấy ngẫu nhiên từ Reddit trong những subreddit nổi
                tiếng nhất về MEME. <br />
                Toàn bộ dữ liệu hiển thị được fetching trực tiếp từ Reddit thông
                qua Token. Viết bằng ngôn ngữ Python.
              </p>
            )}
          </div>

          <div className="border-4 p-2">
            <div className="block md:flex md:justify-between py-2">
              <div className="flex items-center space-x-2 text-black dark:text-white pb-4 ml-4">
                <div>
                  <img src="/icons/rocket-ios.svg" className="w-7 h-7" />
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
              <p className="text-gray-700 dark:text-gray-200 text-sm"></p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
