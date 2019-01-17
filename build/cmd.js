const checkAvailable = require('./cmd/basic/checkAvailable');
const log = require('./cmd/com/log');
const path = require('path');
let argv = process.argv;
let args = argv.slice(2);

if(args.length < 1) {
    log.tip("cmd 需要参数！");
    return;
}

let arr = args.map(cmd => {
    // let cmdPath = path.join(__dirname, './cmd/') + cmd + '.js';
    let cmdPath = path.join(__dirname, './cmd/', cmd + '.js');
    log.tip(cmdPath);
    // todo 判断有否js
    
    return Promise.resolve()
            .then(() => require(cmdPath)())
});

Promise.all(arr)
    .then((data) => {
        log.tip(data);
    })