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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, 'postcss.config.js')
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(path.join(__dirname, '..', 'src')), 'node_modules']
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
