const path = require("path");

const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin"); // webpback5不适用

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const ENV_NAME = process.env.ENV_NAME;

const CUSTOM_ENVS = require(`./config/env.${ENV_NAME.toLowerCase()}.js`);

// const chalk = require('chalk');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const WebpackBar = require("webpackbar")


// require("./begin");

module.exports = {

    mode: process.env.NODE_ENV,

    target: "web",

    entry: {
        app: path.resolve("src/main.js"),
    },

    output: {
        // filename: "tlh-[name].js",
        filename: '[name].js',
        path: path.resolve("dist"),
        // filename: "[name].js",
        // pathinfo: true,
        // chunkFilename: "[chunkhash].js"
        // publicPath: "./dist"
    },

    // devtool: "source-map",
    devtool: false,

    stats: "minimal",

    resolve: {
        alias: {
            "@": path.resolve("src")
        },
        extensions: [".js", ".vue", ".jsx"]
    },

    externals: {
        // jquery: "jQuery"
    },

    module: {
        rules: [
            // {
            //     test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            //     type: 'asset/resource',
            // },
            // {
            //     test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            //     type: 'asset/inline', // 字体图片转成 base64格式的
            // },
            {
                test: /\.(jpg|jpeg|png|gif|webp|svg)$/i,
                // type: "asset",
                loader: 'file-loader',
                options: {
                    esModule: false, // Holy fuck  default=true
                    name: "static/img/[name].[hash:7].[ext]"
                }
            },
            {
                test: /\.(ttf|eot|wof|woff2)/,
                // type: "asset",
                loader: 'file-loader',
                options: {
                    name: "static/fonts/[name].[hash:7].[ext]"
                }
            },

            {
                test: /\.css$/i,
                use: [
                    // ExtractTextWebpackPlugin.loader,
                    // new ExtractTextWebpackPlugin({
                    //     fallback:"style-loader",
                    // }),
                    MiniCssExtractPlugin.loader,
                    // 'file-loader',
                    // "vue-style-loader",
                    // "style-loader",
                    "css-loader",
                    "sass-loader",
                    // {
                    //     loader: "sass-resources-loader",
                    //     options: {
                    //         resources: [path.resolve("src", "system/styles/variables.scss")],
                    //         // limit: 1000
                    //     }
                    // }
                ]
            },
            {
                test: /\.s[a|c]ss$/i,
                use: [
                    // ExtractTextWebpackPlugin.loader,
                    MiniCssExtractPlugin.loader,
                    // 'file-loader',
                    // "vue-style-loader",
                    // "style-loader",
                    "css-loader",
                    /**
                     * Fucking version
                     * Fucking css-loader when using sass variables
                     * css-loader3完美支持 之后需要做额外配置
                     * v4/v5 添加option modules: { compileType: "scss" }
                     * v6 TODO问题未解决，变量是引入了，但是css丢了 TMD
                     *
                     **/
                    // {
                    //     loader: "css-loader",
                    //     options: {
                    //         importLoaders: 1,
                    //         modules: true,
                    //         // modules: {
                    //         //     compileType: "icss"
                    //         // }
                    //     },
                    // },
                    "sass-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: [path.resolve("src", "system/styles/variables.scss")],
                            // limit: 1000
                        }
                    }
                ],

            },
            {
                test: /\.vue$/i,
                use: [
                    "vue-loader",
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        // options: {
                        //     presets: ['@babel/preset-env'],
                        //     plugins: ["@babel/plugin-syntax-jsx"]
                        // }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve("public/index.html"),
            templateParameters: {
                BASE_URL: CUSTOM_ENVS.BASE_URL,
            },
            collapseWhitespace: false,
            inject: true,
            versionPath: "@" + new Date().getTime() + "@",
            minify: {
                // minimize:true,                 //打包为最小值
                // removeAttributeQuotes:true,    //去除引号
                // removeComments:true,           //去除注释
                // collapseWhitespace:true,       //去除空格
                // minifyCSS:true,                //压缩html内css
                // minifyJS:true,                 //压缩html内js
                // removeEmptyElements:true,      //清除内存为空的元素
            }
        }),

        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
            cleanOnBeforeBuildPatterns: [
                path.resolve("dist")
            ]
        }),

        // keep module.id stable when vendor modules does not change
        // new webpack.HashedModuleIdsPlugin(),
        // enable scope hoisting


        new CopyWebpackPlugin({
            patterns: [
                // {
                //     from: path.resolve(rootPath, "public/lib"),
                //     to: "./lib",
                // },
                {
                    from: "public",
                    // from: "public/**/*",
                    // from: path.resolve(__dirname, 'public/**/*'),
                    to: path.resolve('dist/'),
                    // toType: "dir",
                    globOptions: {
                        // ignore: "index.html"
                        // ignore: [path.resolve(__dirname, 'index.html')]
                        // ignore: "public/index.html",
                        // ignore: path.resolve(__dirname, 'public/index.html'),
                        ignore: "**/*.html",
                        gitignore: true,
                    },
                    // filter: async (resourcePath) => {
                    //     console.log(resourcePath)
                    //
                    //     return false;
                    // }
                },
            ]
        }),

        new webpack.DefinePlugin({
            "process.env": JSON.stringify({
                "NODE_ENV": process.env.NODE_ENV,
                "ENV_NAME": process.env.ENV_NAME,
                ...CUSTOM_ENVS
            })
        }),

        new VueLoaderPlugin(),

        // new webpack.ProvidePlugin({
        //     $:"jquery",
        //     jquery:"jquery",
        //     jQuery:"jquery",
        //     "windows.jQuery":"jquery"
        // }),
        // new ProgressBarPlugin({
        //     complete: "█",
        //     format: `${chalk.green('Building')} [ ${chalk.green(':bar')} ] ':msg:' ${chalk.bold('(:percent)')}`,
        //     clear: true
        //     // format: ` :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`
        // })
        // new WebpackBar(),

        // new webpack.HotModuleReplacementPlugin(),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                // styles: {
                //     name: 'style',
                //     test: /\.css$/,
                //     chunks: 'all',
                //     enforce: true
                // },
                // lib: {
                //     name: 'lib',
                //     chunks: 'initial',
                //     test: /[\\/]node_modules[\\/]/,
                //     // test: /node_modules/,
                // },
                demoview: {
                    name: 'demoview',
                    chunks: 'all',
                    test: /demo/,
                    enforce: true,
                },
                sysview: {
                    name: 'sysview',
                    chunks: 'all',
                    test: /sys/,
                    enforce: true,
                },
                flowableview: {
                    name: 'flowableview',
                    chunks: 'all',
                    test: /flowable/,
                    enforce: true,
                },

                settings: {
                    name: 'settings',
                    chunks: 'all',
                    test: /settings/,
                    enforce: true,
                },

                vue: {
                    name: 'vue',
                    chunks: 'all',
                    // test: /vue\.js/,
                    // test: /node_modules\/vue(.*)/,
                    test: /node_modules(.*?)vue[\\/](.*)/,
                    // test: /node_modules[\\/]vue[\\/]/,
                    enforce: true,
                },
                router: {
                    name: 'router',
                    chunks: 'all',
                    test: /router/,
                    enforce: true,
                },
                axios: {
                    name: "axios",
                    chunks: "all",
                    // test: /axios(.*)\.js/,
                    test: /axios/,
                    enforce: true,
                },
                vuex: {
                    name: "vuex",
                    chunks: "all",
                    test: /vuex/,
                    enforce: true,
                },
                // commoncss: {
                //     name:"common.css",
                //     chunks: "all",
                //     test: /common.css/,
                //     enforce: true
                // }

                // lib: {
                //     name: 'router',
                //     chunks: 'all',
                // test: /[\\/]node_modules[\\/]/,
                // test: /[\\/]node_modules[\\/]vue-router[\\/]/,
                // test: /node_modules[\\/]vue-router[\\/](.*)[\\/].js/
                // test: /node_modules\/(.*)\.js/
                // test: /settings\.js/,
                // enforce: true,
                // },

                // commons: {
                //     test: /settings/,
                //     name: 'commons',
                //     chunks: 'initial',
                //     minChunks: 1
                // },
                // //第三方库抽离
                // vendor: {
                //     priority: 1, //权重
                //     test: /src/,
                //     chunks: 'initial',
                //     minSize: 0, //大于0个字节
                //     minChunks: 2, //在分割之前，这个代码块最小应该被引用的次数
                // }
            }
        }

    }

}
