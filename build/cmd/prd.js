const log = require('./com/log');
const executeWebpack = require('./basic/executeWebpack');
const prdConfig = require('../webpack/webpack.prd');

module.exports = function () {
    return Promise.resolve()
        .then(() => log.start('prd'))
        .then(() => executeWebpack(prdConfig))
        .then(() => log.end('prd'))
}

