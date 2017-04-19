const path = require('path');

module.exports = {
  entry: './src/docs/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'docs.min.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};