const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackEnv = process.env.NODE_ENV || 'development';

const config = {
  mode: webpackEnv,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: webpackEnv === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts',
      '.web.ts',
      '.web.tsx',
      '.web.jsx',
      '.web.js'
    ],
    alias: {
      'react-native': 'react-native-web',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LiveBattle App',
      appMountId: 'react-app',
      filename: 'index.html',
      template: path.join(__dirname, './web/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = config;