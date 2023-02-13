// ## 正式线上环境 - 生产环境 ##
module.exports = {
    // 静态文件加载路径
    // 如果使用 hash 模式，一般设置为 "./" (相对目录)
    // 若使用 history模式，则需要使用绝对路径 "/xxxxx", 例：入口访问地址为 http://xxx.com/xxx/project_name.index.html  若加载 /app.js 文件
    BASE_URL: "./",
    // 接口地址
    BASE_API: "http://xxx",
    // 此变量用于设置打包输出目录 默认为dist 可以在此处改为项目部署目录名，简化开发
    DEPLOY_FOLDER: "xxx_admin",
}
