// Webpack 4 default configuration

var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //fazer o mesmo para CSS e HTML
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
