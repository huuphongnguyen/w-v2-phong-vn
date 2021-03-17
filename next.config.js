const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  images: {
    domains: [
      "images.unsplash.com",
      "64.media.tumblr.com",
      "66.media.tumblr.com",
      "theuvitinhanhxuyen.files.wordpress.com",
      "pbs.twimg.com",
      "notion-api.phong.vn",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
});
