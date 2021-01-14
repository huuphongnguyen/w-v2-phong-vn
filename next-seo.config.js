const title = "PHONG FOUNDATION";
const description =
  "PHONG FOUNDATION là một trang được xây dựng bởi Nguyễn Hữu Phong. Được xây dựng nhằm mục đích phản chiếu con người của cậu ấy. Nó là một hệ tư tưởng.";

const SEO = {
  title,
  description,
  canonical: "https://phong.vn",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://phong.vn",
    title,
    description,
    images: [
      {
        url: "/images/phong-vn-feature-img.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
