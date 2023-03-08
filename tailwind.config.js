// tailwind.config.js
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "#F1F1F1",
          100: "#FFFFFF",
          200: "#F2F2F2",
          300: "#E6E6E6",
          400: "#D9D9D9",
          500: "#CCCCCC",
          600: "#BFBFBF",
        },
        dark: {
          DEFAULT: "#262626",
          100: "#8C8C8C",
          200: "#737373",
          300: "#4D4D4D",
          400: "#404040",
          500: "#262626",
          600: "#1A1A1A",
        },
        primary: {
          DEFAULT: "#E95249",
          100: " #FCE9E8",
          200: "#F9D4D2",
          300: "#F7BEBB",
          400: "#EE7D77",
          500: "#E95249",
          600: "#D94840",
        },
        // "text-light": {
        //   default: "#262626",
        //   100: "#808080",
        //   200: "#666666",
        //   300: "#4D4D4D",
        //   400: "#404040",
        //   500: "#333333",
        //   600: "#262626",
        // },
        // "text-dark": {
        //   default: "#F1F1F1",
        //   100: "#FFFFFF",
        //   200: "#E6E6E6",
        //   300: "#CCCCCC",
        //   400: "#B3B3B3",
        //   500: "#999999",
        //   600: "#808080",
        // },
      },
    },
  },
};
