const title = "PHONG.VN - Phong's personal website";
const description =
  "Trang cá nhân của Nguyễn Hữu Phong. Được xây dựng bằng Next.js / TailwindCSS và lưu trữ tại Vercel. Nơi chia sẻ những dự án, blog, mấy thứ hay ho của Phong ";

const SEO = {
  title,
  description,
  canonical: "https://phong.vn",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://phong.vn",
    title,
    description,
    images: [
      {
        url: "/static/phong-vn-feature-img.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
