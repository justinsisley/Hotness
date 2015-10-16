import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../config/webpack.config';

const apiBase = 'http://jsonplaceholder.typicode.com';
let proxies = {};
['users', 'posts'].forEach(path => {
  proxies[`/api/${path}`] = {
    target: `${apiBase}/${path}`,
    ignorePath: true,
    changeOrigin: true,
  };
});

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: proxies
});

server.listen(config.port, 'localhost', err => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at http://localhost:${config.port}`);
});
