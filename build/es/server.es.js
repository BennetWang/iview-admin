import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import { default as cfg, config } from '../conf/webpack.dev.conf'
import { cyan } from 'chalk'
var compiler = webpack(cfg)
var server = new WebpackDevServer(compiler, {
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})
server.listen(config.port, err => {
  if (err) {
    console.log(err)
  }
  server.middleware.waitUntilValid(function () {
    console.log(cyan(`> Listening at http://localhost:${config.port}\n`))
  })
})
