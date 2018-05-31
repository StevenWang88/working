var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var devEntry = [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  'react-hot-loader/patch',
  path.resolve(__dirname, 'source/index.js'),
]
var prodEntry = [
  'babel-polyfill',
  path.resolve(__dirname, 'source/index.js')
]
var pointEntry = process.env.NODE_ENV==='production'? prodEntry : devEntry

module.exports = {
  context: __dirname,
  devtool: process.env.NODE_ENV === 'production'? 'source-map' : 'module-source-map',
  entry: pointEntry,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[hash]-bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'source'),
        use: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: [
              'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)/,
        use: [
          'url-loader?limit=10000&name=assets/[name]-[hash:6].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    })
  ]
}