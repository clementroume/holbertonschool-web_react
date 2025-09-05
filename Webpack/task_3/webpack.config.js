const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, './public'),
    },
    port: 8564,
    open: true,
  },

  entry: {
    all: [
      './modules/header/header.js',
      './modules/body/body.js',
      './modules/footer/footer.js',
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
};
