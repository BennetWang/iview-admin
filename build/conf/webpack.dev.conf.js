import webpack from 'webpack'
import WebpackConfig from 'webpack-config'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import { assetsPath } from './webpack.base.conf'

export default new WebpackConfig().extend({'build/conf/webpack.base.conf': config => {
  config.entry.vendor = [assetsPath('build/es/dev-client.js')].concat(config.entry.vendor)
  return config
}}).merge({
  devtool: 'cheap-source-map',
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
    new FriendlyErrorsWebpackPlugin()
  ]
})

export const config = {
  port: 8080
}
