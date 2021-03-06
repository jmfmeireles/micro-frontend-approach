const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const { ModuleFederationPlugin } = require('webpack').container;

const sharedDependencies = require('./sharedDependencies');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3002,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
    alias: {
      path: 'path-browserify',

      fs: false,
      os: 'os-browserify',
    },
  },
  output: {
    publicPath: 'http://localhost:3002/',
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png|svg|jpg|jpeg|gif|ico/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv({
      path: './.env.local',
      safe: true,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      emitWarning: true,
    }),
    new ModuleFederationPlugin({
      name: 'StoreApp',
      library: { type: 'var', name: 'StoreApp' },
      filename: 'remoteEntry.js',
      remotes: {
        ContainerApp: 'ContainerApp',
      },
      exposes: {
        './App': './src/app/index.tsx',
      },
      shared: sharedDependencies(),
    }),
  ],
};
