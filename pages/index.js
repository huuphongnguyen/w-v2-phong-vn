import { useState } from "react";
import ArchillectImageGrid from "../components/ArchillectImageGrid";
import Container from "../components/Container";
import InternalLink from "../components/elements/InternalLink";
import PhongSignature from "../components/elements/PhongSignature";
import ExternalLink from "../components/elements/ExternalLink";

const defaultEndpoint = process.env.ARCHILLECT_AI_UNOFFICIAL_API;

const FullLetter = () => (
  <>
    <div className="text-black dark:text-white my-10 space-y-3 text-sm">
      <p>
        Xin chào, mình là <InternalLink href="/phong">Phong</InternalLink>,, là
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

  const archillectarray = [data];

  return (
    <Container>
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-md w-full">
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
              <div className="mr-1">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  ></path>
                </svg>
              </div>
              <p>Cảm ơn bạn đã đọc nó</p>
              <div className="transform rotate-180 ml-1">
                <svg
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => showFullLetter(true)}
          >
            <div className="mr-1 stroke-current text-red-400">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <p>Một lá thư từ Phong</p>
            <svg
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>
      <div className=" mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:mb-10 md:-mt-2 p-5 md:p-10 rounded-md w-full">
        <div className="flex space-x-2">
          <span className="text-3xl font-domainet md:text-5xl text-black dark:text-white">
            /
          </span>
          <h2 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Inspiration
          </h2>
        </div>
        <div className="block md:flex md:justify-between">
          <div className="flex items-center space-x-3 text-black dark:text-white pb-4">
            <div>
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                ></path>
              </svg>
            </div>
            <p className=" text-sm">Lấy cảm hứng từ Archillect</p>
          </div>
          <div className="text-black mb-4">
            <div className="flex items-center spacex-2">
              <button
                type="button"
                className="flex items-center text-sm mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => showArchillectImageGrid(true)}
              >
                <div className="mr-1">
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                </div>
                Gọi Archillect
              </button>
              <button
                type="button"
                className="flex items-center text-sm mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => showArchillectImageGrid(false)}
              >
                <div className="mr-1">
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
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    ></path>
                  </svg>
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
            Archillect [archive + intellect] là một AI tự động khám phá - tìm
            kiếm - lựa chọn hình ảnh trên Internet. Tìm hiểu thêm về Archillect
            tại{" "}
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
    </Container>
  );
}
