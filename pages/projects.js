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
        <div className="text-black dark:text-white my-10 space-y-3 text-sm">
          <div className="bg-gray-100 rounded-md mb-6">
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
          <div className="bg-gray-100 rounded-md mb-6">
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
    </Container>
  );
}
