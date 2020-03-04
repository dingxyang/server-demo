const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                targets: {
                  browers: ["last 2 versions"]
                }
              }
            ]
          ]
        }
      }, {
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
