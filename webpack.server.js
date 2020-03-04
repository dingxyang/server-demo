const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const config = require("./webpack.base.js");

const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()],
  module: {
    rules: [
       {
        test: /\.css$/,
        use: ['isomorphic-style-loader', {
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

module.exports = merge(config, serverConfig);
