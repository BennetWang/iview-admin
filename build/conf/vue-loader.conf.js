import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
const generateLoaders = loader => {
  var loaders = [{
    loader: 'css-loader'
  }]
  if (loader) {
    loaders.push({
      loader: loader + '-loader'
    })
  }
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  })
  // return ['vue-style-loader'].concat(loaders)
}

const cssLoaders = {
  loaders: {
    css: generateLoaders(),
    postcss: generateLoaders(),
    scss: generateLoaders('sass')
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  transformToRequire: {
    audio: 'src',
    video: 'src'
  }
}

export const styleLoaders = () => {
  var output = []
  var loaders = cssLoaders.loaders
  Object.keys(loaders).forEach(extension => {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  })
  return output
}

export default cssLoaders
