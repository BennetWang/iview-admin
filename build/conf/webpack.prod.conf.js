import webpack from 'webpack'
import WebpackConfig from 'webpack-config'

export default new WebpackConfig().extend('build/conf/webpack.base.conf').merge({
  output: {
    publicPath: './',
    filename: 'js/[name].[chunkhash:7].js'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('production'),
      DEBUG: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
})
