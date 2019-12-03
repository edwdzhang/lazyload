const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(p) {
  return path.resolve(__dirname, '..', p)
}

module.exports = {
  entry: './examples/main.ts',
  output: {
    path: resolve('examples/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
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
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'examples/index.html'
    })
  ],
  devServer: {
    port: 8085,
    contentBase: resolve('examples'),
    open: true,
    hot: true,
    stats: 'errors-only'
  }
}
