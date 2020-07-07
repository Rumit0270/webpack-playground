const path = require('path');

const config = {
  // Define the entrypoint for app
  entry: './src/index.js',
  // Define the output for the bundle
  output: {
    // define the output dir path
    path: path.resolve(__dirname, 'dist'),
    // define the output filename
    filename: 'bundle.js',
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
  mode: 'none',
};

module.exports = config;
