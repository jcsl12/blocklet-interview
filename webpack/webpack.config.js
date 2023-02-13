const path = require("path");

console.log(__dirname)

console.log(path.resolve(__dirname, "src"));

console.log(path.resolve(__dirname, "../src"))

console.log(path.resolve("./"))


module.exports = {

    devtool: "source-map",

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src")
        },
        extensions: [".js", ".vue", ".jsx"]
    },

    externals: {
        // jquery: "jQuery"
    },

}
