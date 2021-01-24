import Container from "../components/Container";
import { NextSeo } from "next-seo";
import DomainCard from "../components/DomainCard";
import OwnerBadge from "../components/elements/OwnerBadge";

const url = "https://phong.vn/domains";
const title = "Domains – PHONG FOUNDATION";
const description =
  "Một vài domain mà Phong hiện tại đang có và công khai. Phần lớn những domain này Phong đang để placeholder và có ý tưởng nhưng chưa có thời gian làm.";

const mailtolink =
  "mailto:touch@phong.vn?subject=H%E1%BB%8Fi%20v%E1%BB%81%20t%C3%AAn%20mi%E1%BB%81n%20.....&body=Ch%C3%A0o%20Phong%2C%20m%C3%ACnh%20t%E1%BB%AB%20website%20PHONG.VN%20th%C3%B4ng%20qua%20m%E1%BB%A5c%20%2FDOMAINS%20t%C3%ACm%20th%E1%BA%A5y%20t%C3%AAn%20mi%E1%BB%81n%20l%C3%A0%3A%20.....%0D%0AM%C3%ACnh%20mu%E1%BB%91n%20h%E1%BB%8Fi%20v%E1%BB%81%20vi%E1%BB%87c%20chuy%E1%BB%83n%20giao%20%2F%20s%E1%BB%AD%20d%E1%BB%A5ng%20t%C3%AAn%20mi%E1%BB%81n%20n%C3%A0y.%0D%0AC%E1%BA%A3m%20%C6%A1n%20r%E1%BA%A5t%20nhi%E1%BB%81u.%0D%0A%0D%0AT%C3%8AN%20C%E1%BB%A6A%20M%C3%8CNH%20L%C3%80%3A%0D%0AS%E1%BB%90%20%C4%90I%E1%BB%86N%20THO%E1%BA%A0I%20L%C3%80%3A%0D%0A%0D%0A*Th%C3%B4ng%20tin%20c%E1%BB%A7a%20ng%C6%B0%E1%BB%9Di%20g%E1%BB%ADi%20s%E1%BA%BD%20lu%C3%B4n%20lu%C3%B4n%20%C4%91%C6%B0%E1%BB%A3c%20b%E1%BA%A3o%20m%E1%BA%ADt%20v%C3%A0%20ch%E1%BB%89%20s%E1%BB%AD%20d%E1%BB%A5ng%20%C4%91%E1%BB%83%20giao%20ti%E1%BA%BFp%20gi%E1%BB%AFa%20ng%C6%B0%E1%BB%9Di%20g%E1%BB%ADi%20v%C3%A0%20PHONG%20FOUNDATION.%0D%0A";

export default function Tools() {
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
            Domains
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm">
          Một vài domain mà Phong hiện tại đang có và công khai. Phần lớn những
          domain này Phong đang để placeholder và có ý tưởng nhưng chưa có thời
          gian thực hiện nó. Thỉnh thoảng mình có thói quen suy nghĩ và nảy sinh
          một ý tưởng gì đó, tìm mua một vài domain Phong thích và quên mất
          luôn. *cười.
        </p>
        <div className="md:flex items-center">
          <OwnerBadge
            className="my-4"
            ownerName="Phong"
            ownerLink="/phong"
            ownerImage="/avatar.jpg"
          />
          <div>
            <a href={mailtolink}>
              <div>
                <div className="inline-flex items-center space-x-1 text-sm p-2 bg-gray-200 md:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mb-0.5 text-black dark:text-white cursor-pointer">
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
        <div>
          <DomainCard
            domainurl="/domains/riot.vn"
            domainname="riot.vn"
            domaindescription="Mình từng có ý tưởng xây dựng một local brand cho các bạn yêu thích thể thao điện tử và có phần năng động, dựa trên tên của 1 trong những nhà làm game đỉnh nhất hiện nay là RIOT Games. Cuối cùng vì bận và một vài lý do cá nhân mình đã chưa kịp làm. Giờ thì cũng hết cảm hứng luôn rồi. *cười lớn"
            domainregister="Mắt Bão Corperation"
            domainstartdate="27-02-2020"
          />
          <DomainCard
            domainurl="/domains/twitter.vn"
            domainname="twitter.vn"
            domaindescription="Mình cũng không nhớ tại sao mình có thể mua domain này luôn. *mặt ngơ"
            domainregister="Mắt Bão Corperation"
            domainstartdate="09-08-2019"
          />
          <DomainCard
            domainurl="/domains/anonymous.vn"
            domainname="anonymous.vn"
            domaindescription="Nghe như Hacker đúng không? *cười. Mình có một ý tưởng trên tên miền này, tất nhiên là không làm gì phạm pháp rồi. Một ý tưởng khá hay đã xuất hiện nhưng không phải là lúc này."
            domainregister="Mắt Bão Corperation"
            domainstartdate="04-04-2020"
          />
          <DomainCard
            domainurl="/domains/change.vn"
            domainname="change.vn"
            domaindescription="Thay đổi là cách duy nhất để tồn tại. Mình đã từng sống vì câu nói ấy, và muốn thực hiện 1 điều đặc biệt trên tên miền này."
            domainregister="Mắt Bão Corperation"
            domainstartdate="09-11-2020"
          />
          <DomainCard
            domainurl="/domains/blvck.vn"
            domainname="blvck.vn"
            domaindescription="Một dự án nhỏ, không hẳn là một local brand, một cuốn nhật ký giúp mình học hỏi rất nhiều. Hiện tại thì dự án này đã ngừng vì một vài lý do. Tuy nhiên, mình thật sự trân trọng và yêu quý khoảng thời gian thực hiện nó. Một kỷ niệm đẹp."
            domainregister="Mắt Bão Corperation"
            domainstartdate="16-05-2019"
          />
          <DomainCard
            domainurl="/domains/emb.vn"
            domainname="emb.vn"
            domaindescription="Mình làm thêu là chính nên đây là một tên miền mình rất thích. EMB là viết tắt của Embroidery và cũng là ký tự đại diện cho file .EMB - một loại sfile thiết kế quan trọng bậc nhất trong lĩnh vực thêu"
            domainregister="Mắt Bão Corperation"
            domainstartdate="23-08-2019"
          />
        </div>
      </div>
    </Container>
  );
}
