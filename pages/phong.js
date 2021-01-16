import Container from "../components/Container";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import NextLink from "next/link";
import ExternalLink from "../components/elements/ExternalLink";
import InternalLink from "../components/elements/InternalLink";

const url = "https://phong.vn/phong";
const title = "Phong – PHONG FOUNDATION";
const description =
  "Trang cá nhân của Phong trên PHONG FOUNDATION. Mình là Phong, Founder và là Creator của PHONG FOUNDATION. Đây là những thông tin liên quan đến mình.";

export default function Phong() {
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
            Phong
          </h1>
        </div>
        <div className="text-black dark:text-gray-400 mt-2 mb-3 space-y-2 text-sm">
          <div className="flex-cols md:flex">
            <div className="w-full md:w-1/2 transform scale-50 md:scale-100 origin-top -mb-40">
              <NextImage
                className="rounded-full"
                src="/avatar.jpg"
                width={350}
                height={350}
                quality="50"
                priority="true"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-2">
              <p>
                Mình là Nguyễn Hữu Phong, 22+1, là một người cực kỳ thích biển,
                một fan của{" "}
                <ExternalLink href="https://www.instagram.com/dlwlrma/?hl=vi">
                  IU
                </ExternalLink>{" "}
                (thật sự yêu và ngưỡng một cô gái nhỏ nhắn ấy)
              </p>
              <p>
                Bản thân mình là một người sống hướng nội nhiều hơn, thích những
                điều gì đó nhẹ nhàng và bình yên, và tất nhiên đi cùng là cực kỳ
                thích những món đồ nhỏ bé. Sở thích chủ yếu là thử một cái gì đó
                mình chưa bao giờ thử và có hứng thú, thường là trải nghiệm sản
                phẩm của một ai đó hoặc nghe người khác nói về những gì họ đã
                trải qua. Hiện tại thì mình đang sinh sống và làm việc tại Sài
                Gòn nên có lẽ mình bị ảnh hưởng bởi thành phố này rất nhiều mặt
                từ đó sinh ra những sở thích như trên.
              </p>
              <p>
                Mình nghiện cà phê và cảm thấy mình sẽ chết nếu như không uống
                cà phê trong khoảng 1 tuần. Chính vì thích cà phê nên việc ngồi
                ở một quá cà phê nào đó, nghe một bài nhạc nhẹ nhàng thật sự là
                một điều tuyệt vời với mình. À bạn có thể nghe chung nhạc với
                mình thông qua{" "}
                <ExternalLink href="https://soundcloud.com/donuf">
                  Soundcloud
                </ExternalLink>
                , nếu bạn thích kiểu nhẹ nhàng Indie thì chắc là mình chung sở
                thích.
              </p>
            </div>
          </div>
        </div>
        <div className="text-black dark:text-gray-400 text-sm space-y-2 z-20">
          <p>
            Mình là một Embroidery Designer - Một người thiết kế mẫu thêu, rõ
            hơn thì mình sẽ đứng ở công đoạn giữa tức là chuyển một thiết kế ở
            dạng ảnh sang dạng file thêu để dùng máy thêu có thể chạy theo những
            gì mình muốn (kiểu như vẽ Vector ấy nhưng cái này trên phần mềm
            Thêu). Nếu bạn còn hơi thắc mắc thì khoảng 80% những sản phẩm thêu
            mà bạn thấy hiện tại đều đi từ lĩnh vực mà mình đang làm ra, ví dụ:
            MLB - một thương hiệu với các sản phẩm thêu là chủ đạo. Bạn có thể
            xem qua các project liên quan đến thêu mà mình đang làm cho PHONG
            FOUNDATION tại mục{" "}
            <InternalLink href="/projects">/projects</InternalLink>.
          </p>
          <p>
            Hiện tại, mình đang làm việc cho PHONG FOUNDATION với những projects
            bên trong và viết linh tinh về những gì mình trải qua và thấy nó có
            thể viết được, bạn có thể tìm đọc tại{" "}
            <InternalLink href="/blog">/blog</InternalLink>, và nếu muốn hiểu
            cấu trúc mà mình đang xây dựng để giúp mọi thứ mình làm trở nên tốt
            hơn thì bạn có thể tìm đọc{" "}
            <InternalLink href="/white-paper">/white-paper</InternalLink> (hiện
            tại nó đang được mình xây dựng nên sẽ có một vài lỗ hổng và có thể
            hơi khó đọc vì nó được viết hơi trừu tượng hóa.
          </p>
          <p>
            Rất vui vì thấy bạn đã ở đây để đọc những thông tin về mình, nếu bạn
            cần mình giúp hay muốn hỏi bất kỳ vấn đề gì, bạn có thể liên hệ mình
            thông qua những kênh trong mục{" "}
            <InternalLink href="/contact">/contact</InternalLink>.
          </p>
        </div>
      </div>
    </Container>
  );
}
