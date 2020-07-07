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
  mode: 'none',
};

module.exports = config;
