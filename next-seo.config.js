const title = "EMB Vietnam - Nghề thêu thật đẹp";
const description =
  "EMB Vietnam là một studio sáng tạo trong lĩnh vực thêu với mục tiêu mang đến những điều tuyệt vời nhất trong nghề Thêu, Thêu vi tính. Thêu là một câu chuyện đẹp, hãy để chúng tôi kể nó.";

const SEO = {
  title,
  description,
  canonical: "https://emb.vn",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://emb.vn",
    title,
    description,
    images: [
      {
        url: "/static/emb-vn-feature-img.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
