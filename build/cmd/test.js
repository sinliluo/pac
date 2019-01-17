const log = require('./com/log');
const executeWebpack = require('./basic/executeWebpack');
const testConfig = require('../webpack/webpack.test');
log.tip('加载了test.js');

module.exports = function() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("定时完成了");
    //     }, 10000);
    // });

    return Promise.resolve()
        .then(() => log.start('test'))
        .then(() => executeWebpack(testConfig))
        .then(() => log.end('test'))
}