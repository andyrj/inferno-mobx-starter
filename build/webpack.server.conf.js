const webpack = require('webpack');
const base = require('./webpack.base.conf');

// add proper rule for url-loader on pre-render
base.module.rules.push({
  test: /\.(png|jpg|gif|svg)$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: '[name].[hash].[ext]'
  }
});

base.module.rules.push({
  test: /\.css$/,
  loader: 'null-loader'
});

base.module.rules.push({
  test: /\.scss$/,
  loader: 'null-loader'
});

module.exports = Object.assign({}, base, {
  target: 'node',
  devtool: false,
  entry: './src/server.jsx',
  output: Object.assign({}, base.output, {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  }),
  externals: Object.keys(require('../package.json').dependencies)
    /* only needed because of material-components-web strange transpile requirement
    .filter((p) => {
      if (p.indexOf('material-components-web') > -1 ||
          p.indexOf('@material/') > -1 ) {
        return false;
      } else {
        return true;
      }
    }
  )*/
});
