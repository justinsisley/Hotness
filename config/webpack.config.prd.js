const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // The entry point for the bundle
  entry: path.join(__dirname, '../client/main'),

  // Options affecting the output
  output: {
    // The output directory
    path: path.join(__dirname, '../static'),
    // The filename of the entry chunk as relative path inside the
    // output.path directory
    filename: 'main.[hash].js',
  },

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
        loader:
        ExtractTextPlugin.extract('style', 'css?modules!postcss'),
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
  ],

  // Additional plugins for the compiler
  plugins: [
    // Assign the module and chunk ids by occurrence count. Ids that are used
    // often get lower (shorter) ids. This make ids predictable, reduces to
    // total file size and is recommended.
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
      },
    }),
    // Extract text from bundle into a file
    new ExtractTextPlugin('main.[hash].css'),
    // Get the hash generated by webpack so we can version the JS and CSS files
    // and write the versioned filename into a copy of the `index.html` file.
    function copyHTML() {
      this.plugin('done', stats => {
        // Get the contents of `index.html`
        var html = fs.readFileSync(
          path.join(__dirname, '../index.html'), 'utf8'
        );

        // Replace CSS and JS filenames with their hashed versions
        html = html.replace('main.css', `main.${stats.hash}.css`);
        html = html.replace('main.js', `main.${stats.hash}.js`);

        // Write a new `index.html` to the `static` directory
        fs.writeFileSync(
          path.join(__dirname, '../static/index.html'), html
        );
      });
    },
  ],

  // Options affecting the resolving of modules
  resolve: {
    // An array of extensions that should be used to resolve modules
    extensions: ['', '.js', '.jsx'],
  },
};
