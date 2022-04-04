const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.base");

const clientConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  module: {
    rules: [
      {
        test: /\.css?$/,
        include: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(config, clientConfig);
