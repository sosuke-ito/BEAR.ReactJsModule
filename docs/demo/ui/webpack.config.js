var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    react: './ui/react-bundle',
    ssr_app: './ui/app/server',
    app: './ui/app/client',
  },
  output: {
    path: path.join(__dirname, '/../www/build'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}
