import path from 'path';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import proxy from 'proxy-middleware';
import url from 'url';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import serverConfig from '../config/server.config';
import webpackConfig from '../config/webpack.config.dev';

const env = process.env.NODE_ENV || 'development';
const cacheDuration = 5184000000; // 60 days

const app = express();

// Helmet middleware gives us some basic best-practice security
app.use(helmet());

// Gzip responses
app.use(compression());

if (env === 'development') {
  // Send an empty `main.css` in dev mode, since webpack dynamically injects
  // stylesheets. In production, this will be the generated CSS file.
  app.get('/static/main.css', (req, res) => {res.type('css').send('');});
  // Proxy static assets to the webpack-dev-server
  app.use('/static', proxy(url.parse(webpackConfig.output.publicPath)));
} else {
  // Send requests for static assets to the `static` directory in
  // non-development modes
  app.use('/static', express.static('./static', {
    // Tell user agents to cache resources for 60 days
    maxAge: cacheDuration,
  }));
}

// Proxy API calls to some other server
app.use('/api', proxy(url.parse(serverConfig.api)));

// All other routes will be handed over to the client-side router
app.get('/*', function(req, res) {
  // Non-development builds get a generated copy of the `index.html` file with
  // hashed, versioned assets filenames for cache busting.
  let index = '../static/index.html';
  if (env === 'development') {
    index = '../index.html';
  }

  res.sendFile(path.join(__dirname, index));
});

// Create and start the webpack-dev-server in development mode only
if (env === 'development') {
  const webpackDevServer = new WebpackDevServer(webpack(webpackConfig), {
    stats: 'minimal',
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
  });

  // Start the webpack-dev-server
  webpackDevServer.listen(webpackConfig.webpackDevServerPort, () => {
    console.log(`webpack-dev-server started...`);
  });
}

// Start the standard Express server
app.listen(serverConfig.port, () => {
  console.log(`Proxying API calls to ${serverConfig.api}`);
  console.log(`Application running at http://localhost:${serverConfig.port}\n`);
});
