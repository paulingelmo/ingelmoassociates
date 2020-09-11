const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9001,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true
  },
  entry: [path.resolve(__dirname, './src/client/index.tsx')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/client/index.html')
    }),
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    new CopyPlugin({ patterns: [{ from: 'src/client/images', to: 'images' }] })
  ],
  module: {
    rules: [
      // TypeScript
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              plugins: ['react-hot-loader/babel']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      // Styles
      {
        test: /(\.m)?\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[local]',
                auto: /\.m\.\w+$/i
              },
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: { sassOptions: { outputStyle: 'compact' } }
          }
        ]
      },
      // Images
      {
        test: /\.(gif|jpe?g|png|svg)$/i,
        use: [{ loader: 'url-loader', options: { limit: 8000 } }]
      },
      // Favicon
      {
        test: /favicon\.ico/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'favicon.ico' }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src/client')],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  watchOptions: {
    aggregateTimeout: 1000
  }
}
