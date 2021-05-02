import { Envelope, Send } from "akar-icons";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import NextImage from "next/image";

export default function Phong() {
  const seotitle = `Nguyễn Hữu Phong - Phong.vn`;
  const seodescrip = `Trang cá nhân của Phong trên website của Phong (cười lớn). Trang này chủ yếu được tạo để tổng hợp thông tin của mình mà thôi, ngoài ra nó còn dùng để kiểm tra SEO`;
  const seourl = `https://phong.vn/phong`;
  const seopreviewimg = "/static/phong-vn-feature-img.png";

  return (
    <div className="dark:bg-white bg-white">
      <main className="flex flex-col justify-center space-y-4 py-7 px-4 dark:bg-white bg-white">
        <NextSeo
          title={seotitle}
          description={seodescrip}
          canonical={seourl}
          openGraph={{
            seotitle,
            seodescrip,
            seourl,
            images: [
              {
                url: seopreviewimg,
                alt: seotitle,
                width: 1200,
                height: 628,
              },
            ],
          }}
        />
        <SocialProfileJsonLd
          type="Person"
          name="Nguyễn Hữu Phong"
          url="https://phong.vn"
          sameAs={[
            "https://facebook.com/thereisadonutonthetable/",
            "https://instagram.com/isnhp/",
            "https://linkedin.com/in/isnhp",
            "https://twitter.com/isnhp",
          ]}
        />
        <div className="items-start mx-auto w-full max-w-xl space-y-4">
          <div className="relative w-24 h-24 mx-auto">
            <NextImage
              className="object-cover absolute rounded-full"
              src="/avatar.jpg"
              layout="fill"
            />
          </div>
          <div className="space-y-1">
            <div className="flex justify-center items-center">
              <h1 className="text-black dark:text-white font-bold text-xl inline-flex">
                Nguyễn Hữu Phong
              </h1>
            </div>
            <p className="text-black text-center text-xl uppercase font-carbon-bold">
              @phong
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <a href="" target="_blank">
              <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2">
                <Envelope className="text-[#7C56FB]" />
                <h3 className="font-carbon-bold uppercase">
                  Email: hello@phong.vn
                </h3>
              </div>
            </a>
            <a href="" target="_blank">
              <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2">
                <Send className="text-[#7C56FB]" />
                <h3 className="font-carbon-bold uppercase">Telegram: @isnhp</h3>
              </div>
            </a>
          </div>
          <h2 className="text-black font-carbon-bold uppercase text-lg">
            👀 My networks
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <a href="https://www.twitter.com/isnhp/" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3">
                <h3 className="font-carbon-bold uppercase">Twitter</h3>
              </div>
            </a>
            <a
              href="https://www.facebook.com/thereisadonutonthetable/"
              target="_blank"
            >
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3">
                <h3 className="font-carbon-bold uppercase">Facebook</h3>
              </div>
            </a>
            <a href="https://www.instagram.com/isnhp" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3">
                <h3 className="font-carbon-bold uppercase">Instagram</h3>
              </div>
            </a>
            <a href="https://www.github.com/huuphongnguyen" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3">
                <h3 className="font-carbon-bold uppercase">Github</h3>
              </div>
            </a>
            <a href="https://zalo.me/dropship" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3">
                <h3 className="font-carbon-bold uppercase">Zalo</h3>
              </div>
            </a>
            <a href="https://www.pinterest.com/isnhp" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3">
                <h3 className="font-carbon-bold uppercase">Pinterest</h3>
              </div>
            </a>
          </div>
          <h2 className="text-black font-carbon-bold uppercase text-lg">
            🖖 My personal website
          </h2>
          <div>
            <a href="https://phong.vn" target="_blank">
              <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2">
                <h3 className="font-carbon-bold uppercase">PHONG.VN</h3>
              </div>
            </a>
          </div>
          <p className="text-black font-carbon-bold uppercase text-lg text-center">
            1997-2021
          </p>
        </div>
      </main>
    </div>
  );
}
