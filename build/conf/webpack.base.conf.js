import { posix } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { default as cssLoaders, styleLoaders } from './vue-loader.conf'
export const assetsPath = (...relativePath) => posix.join(__dirname, '../../', ...relativePath)

export default {
  entry: {
    app: [assetsPath('src', 'index.js')],
    vendor: ['vue', 'vue-router', 'vuex', 'axios', 'iview', 'iview/dist/styles/iview.css']
  },
  profile: false,
  output: {
    path: assetsPath('dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'connect': assetsPath('src', 'utils', 'connect')
    }
  },
  module: {
    rules: [
      ...styleLoaders(),
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [assetsPath('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: cssLoaders
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [assetsPath('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app', 'vendor'],
      filename: `index.html`,
      template: assetsPath('src/tpl.html')
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:7].css'
    })
  ]
}
