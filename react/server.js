const path = require('path');
const express = require('express');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('./webpack.dev');

  const webpackCompiler = webpack(webpackConfig);

  app.use(webpackMiddleware(webpackCompiler));
} else {
  // Make the dist folder public
  app.use(express.static('dist'));

  // Send html file all the incoming routes
  app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
