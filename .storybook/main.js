const path = require("path");

module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  staticDir: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // {
    //   name: "@storybook/addon-postcss",
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require("postcss"),
    //     },
    //   },
    // },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
    // builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
