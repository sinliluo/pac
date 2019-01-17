const webpack = require('webpack');

module.exports = function (webpackConfig) {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            // 致命的 wepback 错误（配置出错等）
            if (err) {
                console.error(err.stack || err);
                if (err.details) {
                    console.error(err.details);
                }
                return;
            }

            const info = stats.toJson();
            // 编译错误（缺失的 module，语法错误等）
            if (stats.hasErrors()) {
                console.error(info.errors);
            }
            // 编译警告
            if (stats.hasWarnings()) {
                console.warn(info.warnings);
            }
            resolve();
        });
    });
}