const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  // Define the entrypoint for app
  entry: './src/index.js',
  // Define the output for the bundle
  output: {
    // define the output dir path
    path: path.resolve(__dirname, 'build'),
    // define the output filename
    filename: 'bundle.js',
    // define the public path for assets
    publicPath: 'build/',
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
      // loader for handling images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            // images greater than 32kb are places as separate images
            // images less than 32kb are places in bundle itself as base64
            options: { limit: 32768 },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  // Plugin to extract css files to a separate file
  plugins: [new MiniCssExtractPlugin()],
  mode: 'none',
};

module.exports = config;
