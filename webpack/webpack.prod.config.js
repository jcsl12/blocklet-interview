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

    devtool: false,

})
