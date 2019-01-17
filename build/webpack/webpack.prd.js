const merge = require('webpack-merge');
const common = require('./webpack.common');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'bin/bundle/bundle_prd.js'
    },
    plugins: [
        new uglifyJsPlugin({
            sourceMap: false
        })
    ]
});