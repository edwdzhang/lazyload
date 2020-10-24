const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(p) {
  return path.resolve(__dirname, './', p)
}

module.exports = {
  entry: './demo/main.ts',
  output: {
    path: resolve('demo/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: resolve('tsconfig.json')
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'demo/index.html'
    })
  ],
  devServer: {
    port: 8085,
    contentBase: resolve('demo'),
    open: true,
    hot: true,
    stats: 'errors-only'
  }
}
