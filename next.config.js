module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "64.media.tumblr.com",
      "66.media.tumblr.com",
      "theuvitinhanhxuyen.files.wordpress.com",
      "pbs.twimg.com", // Twitter Profile Picture
      "notion-api-database01.phong.vn",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
