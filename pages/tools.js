import { NextSeo } from "next-seo";
import Container from "../components/Container";

export default function Tools() {
  const seotitle = `Tools - Phong.vn`;
  const seodescrip = `Tools là trang tổng hợp những ứng dụng / thư viện / website / công cụ mà Phong cảm thấy nó khá là hữu ích cho công việc và cuộc sống hàng ngày. Được tổng hợp từ nhiều nguồn trên Internet`;
  const seourl = `https://phong.vn/tools`;
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
      <div className="items-start mx-auto w-full max-w-3xl space-y-4"></div>
    </Container>
  );
}
