const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  images: {
    domains: [
      "images.unsplash.com",
      "64.media.tumblr.com",
      "66.media.tumblr.com",
      "theuvitinhanhxuyen.files.wordpress.com",
      "pbs.twimg.com",
      "abs.twimg.com",
      "notion-api.phong.vn",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
});
