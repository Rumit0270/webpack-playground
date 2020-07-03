const path = require('path');

const config = {
  // Define the entrypoint for app
  entry: './src/index.js',
  // Define the output for the bundle
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // loader for babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'none',
};

module.exports = config;
