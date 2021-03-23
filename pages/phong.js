import { NextSeo, SocialProfileJsonLd } from "next-seo";
import Container from "../components/Container";

export default function Phong() {
  const seotitle = `Nguyễn Hữu Phong - Phong.vn`;
  const seodescrip = `Trang cá nhân của Phong trên website của Phong (cười lớn). Trang này chủ yếu được tạo để tổng hợp thông tin của mình mà thôi, ngoài ra nó còn dùng để kiểm tra SEO`;
  const seourl = `https://phong.vn/phong`;
  const seopreviewimg = "/static/phong-vn-feature-img.png";

  return (
    <Container>
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
      <div className="items-start mx-auto w-full max-w-3xl space-y-4"></div>
    </Container>
  );
}
