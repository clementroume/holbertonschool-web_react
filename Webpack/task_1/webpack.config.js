const path = require('path');

module.exports = {
  // Set the mode to production for optimizations
  mode: 'production',

  // Define the entry point for the application
  entry: './js/dashboard_main.js',

  // Configure the output of the bundling process
  output: {
    // The name of the bundled file
    filename: 'bundle.js',
    // The absolute path to the output directory
    path: path.resolve(__dirname, 'public'),
  },
};
