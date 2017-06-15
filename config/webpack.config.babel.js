const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')
const path = require('path')

const port = 3000

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  output: {
    path: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [path.resolve('src')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      appMountId: 'app',
      title: 'Container Ship',
      devServer: `http://localhost:${port}`
    })
  ],
  devServer: {
    port,
    stats: 'minimal'
  }
}
