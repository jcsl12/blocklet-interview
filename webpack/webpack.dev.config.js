const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const WebpackMerge = require("webpack-merge");
const BaseWebpackConfig = require("./webpack.base.config.js");
const ENV_NAME = process.env.ENV_NAME;
const CUSTOM_ENVS = require(`./config/env.${ENV_NAME.toLowerCase()}.js`);

module.exports = WebpackMerge.merge(BaseWebpackConfig, {

    devtool: "source-map",
    // devtool: false,

    devServer: {
        contentBase: "./",
        // contentBase: path.resolve("dist"),
        port: 10086,
        open: true,
        clientLogLevel: 'silent',
        useLocalIp: true, // 这个在控制台打印本地IP
        host: "0.0.0.0", // 这个可以外网访问
        // noInfo: true,
        // inline: true,
        // quiet: true,
        overlay: {
            // 当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
            errors: true
        },
        hot: true, // 热更新，修改代码后，不刷新整个页面
        progress: true, // 编译的进度条
        // stat s: 'errors-only', // 终端仅打印 error
        // compress: true, // 是否启用 gzip 压缩
        // historyApiFallback: true,
        // after(app) {
        // },
        // hotOnly: true,// 即使HMRE不生效也不刷新浏览器
        proxy: {
            "/dev": {
                // target: "http://boot2.tlhkj.net/boot-admin",
                target: CUSTOM_ENVS.BASE_API,
                changeOrigin: true,
                pathRewrite: {"^/dev": "/"}
            }
        }

    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
    ]
})
