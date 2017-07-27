import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { default as cfg, config } from '../conf/webpack.dev.conf'
import { cyan } from 'chalk'
var compiler = webpack(cfg)

var server = new WebpackDevServer(compiler, {
  disableHostCheck: true,
  compress: true,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    server.middleware.publish({ action: 'reload' })
    cb()
  })
})
server.app.use(webpackHotMiddleware(compiler))
server.listen(config.port, err => {
  if (err) {
    console.log(err)
  }
  server.middleware.waitUntilValid(function () {
    console.log(cyan(`> Listening at http://localhost:${config.port}\n`))
  })
})
