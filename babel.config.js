module.exports = {
    presets: [
       "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import",
        "transform-vue-jsx"
    ]
}

// cnpm install babel-plugin-syntax-jsx  babel-plugin-transform-vue-jsx  babel-helper-vue-jsx-merge-props  babel-preset-env  --save-dev
