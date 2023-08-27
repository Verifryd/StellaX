const path = require('path');

module.exports = {
  mode: 'production', // Set the mode to 'production' or 'development'
  entry: './main.js', // Make sure this path is correct
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

