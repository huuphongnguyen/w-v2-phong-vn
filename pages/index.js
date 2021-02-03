import { useState } from "react";
import NextLink from "next/link";
import ArchillectImageGrid from "../components/ArchillectImageGrid";
import Container from "../components/Container";
import InternalLink from "../components/elements/InternalLink";
import PhongSignature from "../components/elements/PhongSignature";
import ExternalLink from "../components/elements/ExternalLink";
import {
  Chip,
  CubeTransparent,
  QRCode,
  Mail,
  MailOpen,
  ChevronUp,
  UserCircle,
  Cube,
  DocumentText,
  Document,
} from "../components/icons/HeroIcons";
import { ChevronDown } from "../components/icons/CustomIcons";
import toast, { Toaster } from "react-hot-toast";
import HashflagsGrid from "../components/HashflagsGrid";
import { Archillect, Twitter } from "../components/icons/LogoIcons";

const defaultEndpoint = process.env.ARCHILLECT_AI_UNOFFICIAL_API;

const FullLetter = () => (
  <>
    <div className="text-black dark:text-white my-10 space-y-3 text-sm">
      <p>
        Xin chào, mình là <InternalLink href="/phong">Phong</InternalLink>, là
        người xây dựng, phát triển, và thiết kế cho{" "}
        <strong>PHONG FOUNDATION</strong>. Đây là được mình xem như là một trung
        tâm phát triển và xây dựng những gì mình làm trong xuyên suốt quá trình
        mở rộng khả năng của mình.
      </p>
      <p>
        Mình là một người sống hướng nội và không thật sự quá tốt trong việc thể
        hiện và bộc lộ bản thân để giao tiếp với những người xung quanh. Chính
        vì lý do đó, mình muốn xây dựng một điều gì đó xung quanh cuộc sống của
        mình, từ đó như một sợi dây kết nối với mọi người.
      </p>
      <p>
        Bản thân mỗi người chúng ta sinh ra đã là một điều rất rất may mắn mà
        thượng đế đã ban tặng. Mình nghĩ bất kỳ ai, bất kỳ cá nhân nào cũng có
        quyền xây dựng cho bản thân một khái niệm, một lý tưởng, một điều gì đó
        mà nó thể hiện chính xác con người họ. Năm nay mình 22+1, bản thân mình
        đang trải qua một giai đoạn có thể coi là một vòng lẩn quẩn của cuộc
        đời. Tức là chúng ta (ít nhất những người trong cùng độ tuổi này mà mình
        biết) cố gắng thoát khỏi vùng an toàn, cố gắng loại bỏ đi sự trì hoãn,
        hay ít nhất là cố gắng vượt ra khỏi ranh giới mà bản thân đã ở quá lâu.
        Đó thật sự là một giai đoạn khó khăn và nhiều thử thách, nhưng ai rồi
        cũng sẽ vượt qua bằng cách này hay cách khác, và đây sẽ là điều đầu tiên
        mà mình cần làm để biết mình đang ở đâu, có những gì và đã thất bại như
        thế nào. Nó có thể coi như là một cuốn nhất ký vậy, và mình muốn viết nó
        ra.
      </p>
      <p>Và đây là front-page cho nó.</p>
    </div>
    <div className="transform scale-75 md:scale-100 origin-top-left">
      <PhongSignature classsvg="stroke-current text-black dark:text-white" />
    </div>
    <NextLink href="/phong">
      <a>
        <div className="mt-4">
          <p className="text-black dark:text-white text-sm">
            Nguyễn Hữu Phong.
          </p>
          <div className="text-sm text-black dark:text-white inline-flex items-center p-2 space-x-1 -ml-2 mt-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            <UserCircle classNameSync="text-black dark:text-white w-7 h-7 mr-1" />
            <p>Đọc thêm xíu nữa về mình.</p>
          </div>
        </div>
      </a>
    </NextLink>
  </>
);

const ArchillectImageGridShow = ({ sync }) => (
  <>
    <ArchillectImageGrid data={sync} />
  </>
);

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const [isShowingFullLetter, showFullLetter] = useState(false);
  const [isShowingArchillectImageGrid, showArchillectImageGrid] = useState(
    false
  );

  const [isShowingHashflagsGrid, showHashflagsGrid] = useState(false);

  const archillectarray = [data];

  const notifyArchillectOn = () => toast.success("😆 Xin chào !!!");
  const notifyArchillectOff = () => toast("🥲 Goodbye !!!");

  const notifyHashflagOn = () => toast.success("🐧 Đã hiển thị !!!");
  const notifyHashflagOff = () => toast("🥲 Goodbye !!!");

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
            <FullLetter />
            <button
              type="button"
              className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
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
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
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
                    <Archillect classNameSync="w-5 h-5" />
                  </div>
                  <p className=" text-sm">Lấy cảm hứng từ Archillect</p>
                </div>
                <div className="text-black mb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
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
                      className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
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
                    colortexthover="hover:text-gray-700"
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
                  <Twitter classNameSync="w-6 h-6" />
                </div>
                <p className=" text-sm">Lấy cảm hứng từ Twitter Hashflags</p>
              </div>
              <div className="text-black mb-4">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
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
                    className="md:flex items-center text-sm mx-auto px-2 py-2 rounded-md font-medium bg-gray-200 md:bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-full"
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
        </div>
      </div>
    </Container>
  );
}
