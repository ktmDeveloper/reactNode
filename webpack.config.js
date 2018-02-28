const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    app:['./lib/renderers/dom.js'],
    vendor:['babel-polyfill',
            'react',
            'react-dom',
            'prop-types',
            'axios',
            'lodash.pickby'
          ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude:/node_modules/, 
        use: {
          loader: 'babel-loader',
          options:{
            presets: ['react', 'env', 'stage-2']
          }
        } }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    })
  ]
};

module.exports = config;
