const path = require("path");
const webpack = require("webpack");
const ENV_NAME = process.env.ENV_NAME;

const config = require("./webpack.prod.config")

const compiler = webpack({
    // [配置对象](/configuration/)
    ...config
});

const watching = compiler.watch({
    // [watchOptions](/configuration/watch/#watchoptions) 示例
    aggregateTimeout: 300,
    poll: undefined
}, (err, stats) => { // [Stats Object](#stats-object)
    // 这里打印 watch/build 结果...
    // console.log(stats);
    console.log("watching")
});

// const compiler = webpack({
//     // [配置对象](/configuration/)
//     ...config
// });
//
// compiler.run((err, stats) => { // [Stats Object](#stats-object)
//     console.log("errrrrr", err)
//     console.log("hasError", stats.hasErrors())
//     console.log("stats", typeof stats)
//     console.log(compiler.close)
//     return
//     compiler.close((closeErr) => {
//         // ...
//         console.log("关闭")
//     });
// });

// webpack(config, function (err, stats){
//     console.log("errrrrr", err)
//     console.log("hasError", stats.hasErrors())
//     console.log("stats", typeof stats)
// })