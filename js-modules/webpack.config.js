const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      // loader for css
      {
        test: /\.css$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  // Plugin to extract css files to a separate file
  plugins: [new MiniCssExtractPlugin()],
  mode: 'none',
};

module.exports = config;
