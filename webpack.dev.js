const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '#auth': path.join(__dirname, 'src/components/Auth/'),
      '#parts': path.join(__dirname, 'src/components/parts/'),
      '#components': path.join(__dirname, 'src/components'),
      '#scss': path.join(__dirname, 'scss/'),
      '#assets': path.join(__dirname, 'assets/'),
    },
  },
  // entry: {
  //   app: ['core-js/stable', path.join(__dirname, 'src/index.jsx')],
  // },
  devServer: {
    contentBase: 'dist',
    port: 8082,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        // Feel free to change next line for when you need to support other file extensions
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      // svg loader
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
      },
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack'],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './assets/images/pngs/RR-cobalt-square.png',
    }),
    new Dotenv({
      path: './.dev.env',
    }),
  ],
};