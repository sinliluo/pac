const log = require('./cmd/com/log');
let argv = process.argv;
let args = argv.slice(2);
log.start("abc");