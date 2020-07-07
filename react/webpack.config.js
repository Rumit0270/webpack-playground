const path = require('path');

// automatically place generated bundles in html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Can be used to place all vendor libraries into a
// separate bundle. But webpack 4 supports this feature
// out of the box.
const VENDOR_LIBS = [
  'faker',
  'lodash',
  'react',
  'react-dom',
  'react-input-range',
  'react-redux',
  'react-router',
  'redux',
  'redux-form',
  'redux-thunk',
];

const config = {
  // Define the entrypoint for app
  entry: {
    bundle: './src/index.js',
    // vendor: VENDOR_LIBS,
  },
  // Define the output for the bundle
  output: {
    // define the output dir path
    path: path.resolve(__dirname, 'dist'),
    // define the output filename
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    // configure webpack to identify the generated bundles by hash
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      name: true,
      automaticNameDelimiter: '~',
      cacheGroups: {
        // place all node_modules code into a separete chunk
        commons: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // specify webpack to use our html document as
      // a reference when generating the final html document
      template: 'src/index.html',
    }),
  ],
  mode: 'none',
};

module.exports = config;
