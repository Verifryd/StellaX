const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point
  output: {
    filename: 'main.js',  // Output bundle
    path: path.resolve(__dirname, 'dist'),
  },
};
