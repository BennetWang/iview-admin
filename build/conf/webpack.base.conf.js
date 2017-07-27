import { posix } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export const assetsPath = (...relativePath) => posix.join(__dirname, '../../', ...relativePath)

export default {
  entry: {
    app: [assetsPath('src', 'index.js')],
    vendor: ['vue', 'vue-router', 'vuex', 'axios', 'iview']
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
    rules: [{
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
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [assetsPath('src')]
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader!sass-loader'
        }],
        fallback: 'vue-style-loader'
      })
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader'
        }],
        fallback: 'vue-style-loader'
      })
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
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
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
