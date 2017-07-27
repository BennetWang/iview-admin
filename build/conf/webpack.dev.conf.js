import webpack from 'webpack'
import WebpackConfig from 'webpack-config'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

export default new WebpackConfig().extend('build/conf/webpack.base.conf').merge({
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('development'),
      DEBUG: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js']
    })
  ]
})

export const config = {
  port: 8080
}
