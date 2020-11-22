// 获取路径  需要 path 包 ， `npm init ,npm install`
const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/", // 给所有的url路径加上前缀
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 多个loader ，从左到右加载
        use: ["style-loader", "css-loader"], //   npm install --save-dev css-loader@2.0.2 style-loader@0.23.1
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // 文件大小 文件大于这个大小 那么 npm install file-loader@3.0.1 --save-dev 小于则图片直接转base64
              name: "img/[name].[hash:8].[ext]", // 图片打包
            },
          },
        ],
      },
    ],
  },
};
