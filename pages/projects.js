import Container from "../components/Container";
import { NextSeo } from "next-seo";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/project/projectData.json";

const url = "https://phong.vn/projects";
const title = "Projects – PHONG FOUNDATION";
const description =
  "Những dự án mà Phong nói riêng và PHONG FOUNDATION nói chung đã - đang - và có thể sẽ thực hiện. Những thất bại - những kỷ niệm - những điều nhỏ được trải qua đều được tổng hợp tại đây";

export default function Projects() {
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
            Projects
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm">
          Những project đã / đang được thực hiện bởi Phong trước đó, hiện tại
          mọi thứ đều được thực hiện dưới PHONG FOUNDATION
        </p>
        <div className="text-black dark:text-white my-10 space-y-3 text-sm">
          <div>
            <div>
              <div className="mb-4 flex-col space-y-2">
                <div className="flex space-x-1 items-center">
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
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-black dark:text-white text-xl font-bold uppercase">
                    Đang hoạt động
                  </h2>
                </div>
                <p className="text-black dark:text-white">
                  Thật khó để chia tay hay dừng lại những điều mà nó đã từng là
                  thói quen. Nhưng thất bại luôn sẽ xảy ra trên con đường mà
                  chúng ta đi, đó vẫn là những kỷ niệm đẹp và chúng ta học rất
                  nhiều từ nó.
                </p>
              </div>
            </div>
            <div className="md:flex md:space-x-2">
              <div className="bg-gray-100 rounded-md mb-6 w-full md:w-1/2">
                <ProjectCard
                  statusproject="Active - AX Team"
                  colorstatusproject="rgba(52, 211, 153, 1)"
                  myworkingstatusforthisproject="Part-time to maintain"
                  colorstatusmyworkatproject="rgba(245, 171, 53, 1)"
                  titleproject="Anh Xuyen Embroidery Services"
                  description="A brand / workshop / studio is working in Machine Embroidery Industry. This is where we can turn your ideas into the best embroidery product."
                  workingtimeline="November 2017 - October 2020"
                  role="Branding Founder - Business strategist"
                  dataimg={projectData.aximg}
                  emailname="theuvitinhanhxuyen@gmail.com"
                  websitename="TheuViTinhAnhXuyen.com"
                  websiteurl="https://theuvitinhanhxuyen.com"
                  messageurl="https://zalo.mee/theuvitinh"
                  callurl="tel:0907194274"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 flex-col space-y-2">
              <div className="flex space-x-1 items-center">
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
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-black dark:text-white text-xl font-bold uppercase">
                  Dừng lại / Đóng
                </h2>
              </div>
              <p className="text-black dark:text-white">
                Thật khó để chia tay hay dừng lại những điều mà nó đã từng là
                thói quen. Nhưng thất bại luôn sẽ xảy ra trên con đường mà chúng
                ta đi, đó vẫn là những kỷ niệm đẹp và chúng ta học rất nhiều từ
                nó.
              </p>
            </div>
            <div className="md:flex md:space-x-2">
              <div className="bg-gray-100 rounded-md mb-6 w-full md:w-1/2">
                <ProjectCard
                  statusproject="Deactived - Stop"
                  colorstatusproject="rgba(242, 38, 19, 1)"
                  myworkingstatusforthisproject="Still love it."
                  colorstatusmyworkatproject="rgba(246, 36, 89, 1)"
                  titleproject="BLVCK Saigon"
                  description="Local Brand - Diary - Magazine - Concept. Where I make some great products for myself, my friends, and others."
                  workingtimeline="November 2019 - October 2020"
                  role="Founder - Designer"
                  dataimg={projectData.blvckimg}
                  emailname="we@blvck.vn"
                  websitename="blvck.vn"
                  websiteurl="https://blvck.vn"
                  messageurl="mailto:we@blvck.vn"
                  callurl="tel:0707150797"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
