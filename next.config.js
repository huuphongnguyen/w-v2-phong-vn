module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "66.media.tumblr.com",
      "64.media.tumblr.com",
      "theuvitinhanhxuyen.files.wordpress.com",
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