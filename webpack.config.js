const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/res/js/index.js',
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/[name].bundle.css' }),
  ]
};