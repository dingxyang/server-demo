const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.base.js");

const clientConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
       {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              context: path.resolve(__dirname, 'src'),
              // hashPrefix: 'my-custom-hash',
            },
          }
        }]
      }
    ]
  }
};

module.exports = merge(config, clientConfig);
