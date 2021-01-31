const { spacing } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      filter: {
        // defaults to {}
        none: "none",
        grayscale: "grayscale(1)",
        invert: "invert(1)",
        sepia: "sepia(1)",
      },
      backdropFilter: {
        // defaults to {}
        none: "none",
        blur: "blur(20px)",
      },
      colors: {
        "notion-default": "#E6E6E5",
        "notion-gray": "#D7D7D6",
        "notion-brown": "#E9D6CF",
        "notion-orange": "#FEE0D2",
        "notion-yellow": "#FBEED5",
        "notion-green": "#D4E8E2",
        "notion-blue": "#D3E4F9",
        "notion-purple": "#E1D5FA",
        "notion-pink": "#E4BFD0",
        "notion-red": "#FFD4D4",
      },
      spacing: {
        0.5: "0.6px",
        "50px": "50px",
        "100px": "100px",
        "200px": "200px",
        "250px": "250px",
        "270px": "270px",
        "300px": "300px",
        "350px": "350px",
        "400px": "400px",
        "450px": "450px",
        "500px": "500px",
        "600px": "600px",
        "full-110": "110%",
        "full-120": "120%",
        "full-150": "150%",
      },
      zIndex: {
        "-10": -10,
        60: 60,
        100: 100,
      },
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              code: { color: theme("colors.blue.400") },
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.gray.100"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.300") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-filters"),
  ],
};
