import Container from "../components/Container";
import NextLink from "next/link";
import ProjectsElements from "../components/elements/ProjectsElement";

export default function Projects() {
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-xl uppercase font-carbon-bold">
          <NextLink href="/">
            <a>
              <p className="text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white">
                FRONT-PAGE
              </p>
            </a>
          </NextLink>
          <p>/</p>
          <h1>Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectsElements
            imagesbanner={axlistimg}
            nameproject="AX Embroidery Workshop"
            est="2017"
            startupday="20171009"
            projecturl="/projects/axembroidery"
            qrimageurl="/static/projects-axembroidery-qr-code.png"
          />
          <ProjectsElements
            imagesbanner={embvnlisting}
            nameproject="EMB.VN - EMB Vietnam"
            est="2021"
            startupday="20210301"
            projecturl="/projects/embvn"
            qrimageurl="/static/projects-embvn-qr-code.png"
          />
          <ProjectsElements
            imagesbanner={blvcksaigonlisting}
            nameproject="BLVCK Saigon"
            est="2019"
            startupday="20191224"
            projecturl="/projects/blvcksaigon"
            qrimageurl="/static/projects-blvcksaigon-qr-code.png"
          />
        </div>
      </div>
    </Container>
  );
}

export const axlistimg = [
  "https://theuvitinhanhxuyen.files.wordpress.com/2020/08/theu-vi-tinh-tphcm-anh-xuyen-anh-khach-hang-img8-1.png?w=300",
  "https://theuvitinhanhxuyen.files.wordpress.com/2020/08/theu-vi-tinh-tphcm-anh-xuyen-anh-khach-hang-img5.png?w=300",
  "https://theuvitinhanhxuyen.files.wordpress.com/2020/08/theu-vi-tinh-tphcm-anh-xuyen-anh-khach-hang-img1.png?w=300",
  "https://theuvitinhanhxuyen.files.wordpress.com/2020/08/theu-vi-tinh-tphcm-anh-xuyen-anh-khach-hang-img9-1.png?w=300",
  "https://theuvitinhanhxuyen.files.wordpress.com/2020/08/theu-vi-tinh-tphcm-anh-xuyen-anh-khach-hang-img2.png?w=300",
  "https://theuvitinhanhxuyen.files.wordpress.com/2021/04/0a721ce2-1456-4b2d-8da2-62706337cf91_1_105_c.jpeg",
  "https://theuvitinhanhxuyen.files.wordpress.com/2020/08/theu-vi-tinh-tphcm-anh-xuyen-anh-khach-hang-img3.png?w=300",
  "https://theuvitinhanhxuyen.files.wordpress.com/2020/08/theu-vi-tinh-tphcm-anh-xuyen-anh-khach-hang-img4.png?w=300",
  "https://theuvitinhanhxuyen.files.wordpress.com/2020/08/theu-vi-tinh-tphcm-anh-xuyen-anh-khach-hang-img12-1.jpeg?w=300",
  "https://theuvitinhanhxuyen.files.wordpress.com/2020/08/theu-vi-tinh-tphcm-anh-xuyen-anh-khach-hang-img12.png?w=300",
];

export const blvcksaigonlisting = [
  "https://dl.dropbox.com/s/1nt2nged54p3105/phong-vn-project-blvcksaigon-img1.png?dl=0",
  "https://dl.dropbox.com/s/lz2jjjdyu8y7tln/phong-vn-project-blvcksaigon-img2.png?dl=0",
  "https://dl.dropbox.com/s/j3nyeora0t0ul3f/phong-vn-project-blvcksaigon-img3.png?dl=0",
  "https://dl.dropbox.com/s/0ehsesfdikhi6qe/phong-vn-project-blvcksaigon-img4.png?dl=0",
  "https://dl.dropbox.com/s/zojf6uj8kusrrvi/phong-vn-project-blvcksaigon-img5.png?dl=0",
  "https://dl.dropbox.com/s/eya4tyyg6ympbg9/phong-vn-project-blvcksaigon-img6.png?dl=0",
  "https://dl.dropbox.com/s/47x4ujvie6cr4dk/phong-vn-project-blvcksaigon-img7.png?dl=0",
  "https://dl.dropbox.com/s/51jdq25khqq835k/phong-vn-project-blvcksaigon-img8.png?dl=0",
  "https://dl.dropbox.com/s/26uhjnfvunchurh/phong-vn-project-blvcksaigon-img9.png?dl=0",
  "https://dl.dropbox.com/s/csclwmxzzx3ft2g/phong-vn-project-blvcksaigon-img10.png?dl=0",
];

export const embvnlisting = [
  "https://dl.dropbox.com/s/2842xhc0o9caype/phong-vn-project-embvn-img1.png?dl=0",
  "https://dl.dropbox.com/s/nd66et46paxibre/phong-vn-project-embvn-img2.png?dl=0",
  "https://dl.dropbox.com/s/hpb2bd2vqcoj1aa/phong-vn-project-embvn-img3.png?dl=0",
  "https://dl.dropbox.com/s/mdbwvcz80oyxtem/phong-vn-project-embvn-img4.png?dl=0",
  "https://dl.dropbox.com/s/f7mttvrrx0zm00h/phong-vn-project-embvn-img5.png?dl=0",
  "https://dl.dropbox.com/s/ylt8041ufw6j7hs/phong-vn-project-embvn-img6.png?dl=0",
  "https://dl.dropbox.com/s/j72nk9gnpmqu1ge/phong-vn-project-embvn-img7.png?dl=0",
  "https://dl.dropbox.com/s/2rp6izixhiz34a9/phong-vn-project-embvn-img8.png?dl=0",
  "https://dl.dropbox.com/s/d3dnuvitd0adw2f/phong-vn-project-embvn-img9.png?dl=0",
  "https://dl.dropbox.com/s/3godo1teagrivtm/phong-vn-project-embvn-img10.png?dl=0",
];
