const path = require('path');
const webpack = require('webpack');
const webpackDevServerPort = 8744;

module.exports = {
  // Non-standard property to control the port the webpack dev server runs on
  webpackDevServerPort: webpackDevServerPort,

  // The entry point for the bundle
  entry: [
    `webpack-dev-server/client?http://localhost:${webpackDevServerPort}`,
    'webpack/hot/only-dev-server',
    './client/main',
  ],

  // Options affecting the output
  output: {
    // The output directory
    path: path.join(__dirname, 'dist'),
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: 'main.js',
    // The output.path from the view of the Javascript / HTML page
    publicPath: `http://localhost:${webpackDevServerPort}/static/`,
  },

  // Generate a source map
  devtool: 'cheap-module-eval-source-map',

  // Options affecting the normal modules
  module: {
    // A array of automatically applied loaders
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
    // Allow @imports
    require('postcss-partial-import'),
    // Allow Sass-like variables
    require('postcss-simple-vars'),
    // Automatic @font-face injection
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

  // Additional plugins for the compiler
  plugins: [
    // Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids. This make ids predictable, reduces to total file size and is recommended.
    new webpack.optimize.OccurenceOrderPlugin(),
    // Enables Hot Module Replacement
    new webpack.HotModuleReplacementPlugin(),
  ],

  // Options affecting the resolving of modules
  resolve: {
    // An array of extensions that should be used to resolve modules
    extensions: ['', '.js', '.jsx'],
  },
};
