import Container from "../../components/Container";
import { NextSeo } from "next-seo";
import DomainVerifiedBadge from "../../components/elements/DomainVerifiedBadge";

import { useRouter } from "next/router";

const url = "https://phong.vn//domains/riot.vn";
const title = "Domains - riot.vn – PHONG FOUNDATION";
const description =
  "Tên miền blvck.vn hiện tại thuộc quyền sở hữu của PHONG FOUNDATION. Mình từng có ý tưởng xây dựng một local brand cho các bạn yêu thích thể thao điện tử và có phần năng động, dựa trên tên của 1 trong những nhà làm game đỉnh nhất hiện nay là RIOT Games. Cuối cùng vì bận và một vài lý do cá nhân mình đã chưa kịp làm. Giờ thì cũng hết cảm hứng luôn rồi.";
const domainname = "riot.vn";
const domaindes =
  "Mình từng có ý tưởng xây dựng một local brand cho các bạn yêu thích thể thao điện tử và có phần năng động, dựa trên tên của 1 trong những nhà làm game đỉnh nhất hiện nay là RIOT Games. Cuối cùng vì bận và một vài lý do cá nhân mình đã chưa kịp làm. Giờ thì cũng hết cảm hứng luôn rồi.";
const domainregister = "Mắt Bão Corperation";
const domainstartdate = "09-08-2019";

const domainplaceholderurl = "https://riotvn.phong.vn";

const mailtolink =
  "mailto:touch@phong.vn?subject=H%E1%BB%8Fi%20v%E1%BB%81%20t%C3%AAn%20mi%E1%BB%81n%20BLVCK.VN&body=Ch%C3%A0o%20Phong%2C%20m%C3%ACnh%20t%E1%BB%AB%20website%20PHONG.VN%20th%C3%B4ng%20qua%20m%E1%BB%A5c%20%2FDOMAINS%20t%C3%ACm%20th%E1%BA%A5y%20t%C3%AAn%20mi%E1%BB%81n%20BLVCK.VN%0D%0AM%C3%ACnh%20mu%E1%BB%91n%20h%E1%BB%8Fi%20v%E1%BB%81%20vi%E1%BB%87c%20chuy%E1%BB%83n%20giao%20%2F%20s%E1%BB%AD%20d%E1%BB%A5ng%20t%C3%AAn%20mi%E1%BB%81n%20n%C3%A0y.%0D%0AC%E1%BA%A3m%20%C6%A1n%20r%E1%BA%A5t%20nhi%E1%BB%81u.%0D%0A%0D%0AT%C3%8AN%20C%E1%BB%A6A%20M%C3%8CNH%20L%C3%80%3A%0D%0AS%E1%BB%90%20%C4%90I%E1%BB%86N%20THO%E1%BA%A0I%20L%C3%80%3A%0D%0A%0D%0A*Th%C3%B4ng%20tin%20c%E1%BB%A7a%20ng%C6%B0%E1%BB%9Di%20g%E1%BB%ADi%20s%E1%BA%BD%20lu%C3%B4n%20lu%C3%B4n%20%C4%91%C6%B0%E1%BB%A3c%20b%E1%BA%A3o%20m%E1%BA%ADt%20v%C3%A0%20ch%E1%BB%89%20s%E1%BB%AD%20d%E1%BB%A5ng%20%C4%91%E1%BB%83%20giao%20ti%E1%BA%BFp%20gi%E1%BB%AFa%20ng%C6%B0%E1%BB%9Di%20g%E1%BB%ADi%20v%C3%A0%20PHONG%20FOUNDATION.%0D%0A";

export default function Tools() {
  const router = useRouter();

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
          <span className="text-3xl font-domainet md:text-5xl text-gray-500 dark:text-gray-700">
            /{" "}
            <span
              className="cursor-pointer hover:text-black dark:hover:text-white"
              onClick={() => router.back()}
            >
              Domains
            </span>{" "}
            /
          </span>
          <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            {domainname}
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm mb-4">
          Một vài domain mà Phong hiện tại đang có và công khai. Phần lớn những
          domain này Phong đang để placeholder và có ý tưởng nhưng chưa có thời
          gian thực hiện nó. Thỉnh thoảng mình có thói quen suy nghĩ và nảy sinh
          một ý tưởng gì đó, tìm mua một vài domain Phong thích và quên mất
          luôn. *cười.
        </p>
        <div>
          <div
            className="flex space-x-2 items-center p-0 md:p-2 cursor-pointer mb-2 rounded-md text-black dark:text-white hover:bg-gray-200 dark:hover:text-black"
            onClick={() => router.back()}
          >
            <div>
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
            </div>
            <p className="text-sm font-bold">Quay trở lại</p>
          </div>
        </div>
        <div>
          <div className="flex space-x-3 text-black">
            <div className="inline-flex text-sm font-normal px-2 bg-notion-red rounded-full">
              {domainregister}
            </div>
            <div className="inline-flex text-sm font-normal px-2 bg-notion-blue rounded-full">
              {domainstartdate}
            </div>
          </div>
          <div>
            <DomainVerifiedBadge domainowner="Nguyễn Hữu Phong" />
          </div>
          <a href={domainplaceholderurl} target="_blank">
            <div className="inline-flex items-center space-x-1 text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md my-4 text-black dark:text-white cursor-pointer">
              <div className="text-blue-500">
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
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  ></path>
                </svg>
              </div>
              <p className="font-bold">Trang placeholder</p>
            </div>
          </a>
          <div className="p-3 rounded-md text-sm text-black dark:text-gray-300 bg-gray-200 dark:bg-gray-700">
            {domaindes}
          </div>
          <a href={mailtolink}>
            <div>
              <div className="inline-flex items-center space-x-1 text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md my-4 text-black dark:text-white cursor-pointer">
                <div>
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
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    ></path>
                  </svg>
                </div>
                <p className="font-bold">Liên hệ sử dụng tên miền</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
}
