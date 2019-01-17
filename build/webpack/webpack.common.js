var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');
const rootPath = path.resolve(__dirname, '../../');
console.log(path.resolve('./src/app.js'));
console.log(path.resolve());
module.exports = {
    mode: 'development',
    entry: path.resolve(rootPath, './src/app.js'),
    output: {
        path: rootPath,
        filename: 'bin/bundle/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015", "stage-0"],
                        plugins: ["transform-runtime", "transform-es2015-arrow-functions"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        port: 1111,
        open: true,
        openPage: 'bin/'
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
        alias: {
            
        }
    },
    plugins: [
        new LodashModuleReplacementPlugin,
    ]
};