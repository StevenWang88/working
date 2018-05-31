var webpack = require('webpack')
var config = require('./webpack.config')
var WebpackDevServer = require('webpack-dev-server')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: false,
  quiet: false,
  stats: {
    assets: false,
    colors: true,
    timings: false,
    version: false,
    hash: false,
    chunks: false,
    chunkModules: false
  }
}).listen(8080, 'localhost', (err) => {
  if (err) {
    console.error(err)
  }
  console.log('Listening at http://localhost:8080')
})