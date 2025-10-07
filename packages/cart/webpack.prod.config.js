const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        publicPath: "http://localhost:8191/cart/",
    },
    plugins: [
        new baseConfig.plugins[0].constructor({
            ...baseConfig.plugins[0].options,
            remotes: {
                products: "cart@http://localhost:8191/cart/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ]
})