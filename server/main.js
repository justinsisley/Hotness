import path from 'path';
import express from 'express';
import helmet from 'helmet';
import proxy from 'proxy-middleware';
import url from 'url';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import serverConfig from '../config/server.config';
import webpackConfig from '../config/webpack.config';

const app = express();

// Helmet middleware gives us some basic best-practice security
app.use(helmet());

// Proxy static assets to the WebpackDevServer
app.use('/static', proxy(url.parse(webpackConfig.output.publicPath)));

// Proxy API calls to some other server
app.use('/api', proxy(url.parse(serverConfig.api)));

// All other routes will be handed over to the client-side router
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// WebpackDevServer
const webpackDevServer = new WebpackDevServer(webpack(webpackConfig), {
  stats: 'minimal',
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
});

// Start the WebpackDevServer
webpackDevServer.listen(webpackConfig.webpackDevServerPort, err => {
  console.log(`webpack-dev-server started...`);
});

// Start the Express server
app.listen(serverConfig.port, () => {
  console.log(`Proxying API calls to ${serverConfig.api}`);
  console.log(`Application running at http://localhost:${serverConfig.port}\n`);
});
