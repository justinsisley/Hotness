const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/main',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, '../client'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader?sourceMap!css-loader?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap',
      },
    ],
  },
  // PostCSS plugins
  postcss: [
    // @imports
    require('postcss-partial-import'),
    // Sass-like variables
    require('postcss-simple-vars'),
    // @font-face injection
    require('postcss-font-magician'),
    // Process URLs found in stylesheets
    require('postcss-url')({
      // During development, replace relative protocols with
      // HTTP to avoid issues with generated CSS blobs
      url: function url(URL) {
        return URL.replace(/^\/\//, 'http://');
      },
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
