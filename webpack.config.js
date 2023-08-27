const path = require('path');

module.exports = {
  entry: 'main.js',  // Change this to the actual path where main.js resides
  output: {
    filename: 'bundle.js',  // You can name this whatever you like
    path: path.resolve(__dirname, 'dist'),
  },
};

