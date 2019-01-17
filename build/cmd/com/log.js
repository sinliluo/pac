const styles = require('./color');
const setColor = function (cnt, colorName='default', flag) {
    // console.log('\033[42;30m' + cnt + '\033[0m');
    let content = styles[colorName] + cnt + styles['default'];
    return flag ? "\n" + content + "\n" : content;
}
exports.start = function(cnt) {
    let startTmp = `------------------ ${cnt} start ------------------`;
    let content = setColor(startTmp, "purple", 1);
    console.log(content);
    return this;
}
exports.end = function(cnt) {
    let endTmp = `------------------ ${cnt} end ------------------`;
    let content = setColor(endTmp, "purple", 1);
    console.log(content);
    return this;
}

exports.oneline = function(cnt) {
    process.stdout.write(setColor(cnt, "yellow", 1));// 表现是： 默认删除最后一行
    return this;
}
exports.error = function(cnt) {
    let content = setColor(cnt, "red", 1);
    console.log(content);
    return this;
}
exports.success = function(cnt) {
    let content = setColor(cnt, "red", 1);
    console.log(content);
    return this;
}