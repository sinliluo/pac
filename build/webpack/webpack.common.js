// var LodashModuleReplacementPlugin = require('loadsh-webpack-plugin');
const path = require('path');
const rootPath = path.resolve(__dirname, '../../');
console.log(path.resolve(rootPath, './src/app.js'));
module.exports = {
    mode: 'development',
    entry: path.resolve(rootPath, './src/app.js'),
    output: {
        path: rootPath,
        filename: 'bin/bundle/bundle.js'
    }
};