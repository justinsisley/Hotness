import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../config/webpack.config';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', (err, result) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
