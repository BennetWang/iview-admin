import { posix } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const assetsPath = (...relativePath) => posix.join(__dirname, '../../', ...relativePath)

export default {
  entry: {
    app: [assetsPath('src', 'index.js')],
    vendor: ['vue']
  },
  profile: false,
  output: {
    path: assetsPath('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
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
      }),
      include: [assetsPath('src')]
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader'
        }],
        fallback: 'vue-style-loader'
      }),
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
      filename: `index.html`
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:7].css'
    })
  ]
}
