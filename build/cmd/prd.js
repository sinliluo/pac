console.log(0)
const log = require('./com/log');
console.log(01);

const executeWebpack = require('./basic/executeWebpack');
console.log(02);

const prdConfig = require('../webpack/webpack.prd');
console.log(1);

module.exports = function () {
    console.log(2);
    
    return Promise.resolve()
        .then(() => log.start('prd'))
        .then(() => executeWebpack(prdConfig))
        .then(() => log.end('prd'))
}

