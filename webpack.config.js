const path = require('path');

module.exports = {
  entry: {
    admin: './src/admin.js',
    checkin: './src/checkin.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
};