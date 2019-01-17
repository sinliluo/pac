const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'bin/bundle/bundle_test.js'
    }
});