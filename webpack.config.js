const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new copyWebpackPlugin({
      patterns: [
        { from: "src/assets/img", to: path.resolve(__dirname, "public/assets/img") },
        { from: "src/assets/fonts", to: path.resolve(__dirname, "public/assets/fonts") },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          }
        ]
      },
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      // }
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      //   options: {
      //     sources: {
      //       list: [
      //         {
      //           tag: "use",
      //           attribute: "xlink:href",
      //           type: "src",
      //           filter: (tag, attribute, attributes, resourcePath) => {
      //             return false;
      //           },
      //         },
      //       ],
      //     },
      //   },
      // },
      // {
      //   test: /\.(svg)/,
      //   use: "asset/resource",
      // },
    ],
  },
  devServer: {
    hot: true,
  },
};