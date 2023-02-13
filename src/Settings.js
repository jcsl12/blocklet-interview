/**
 process.env;
 BASE_API
 BASE_URL
 ENV_NAME
 NOD_ENV
 */
/**
 * 全局配置
 *
 * 1. <不允许直接使用process.env变量，需现在此文件注入!>
 */
module.exports = {
    debug: false,
    BASE_API: process.env.BASE_API,
    BASE_URL: process.env.BASE_URL,
    ENV_NAME: process.env.ENV_NAME,
    NOD_ENV: process.env.NOD_ENV,
}
