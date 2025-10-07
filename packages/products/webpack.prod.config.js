const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        publicPath: "http://localhost:8191/products/",
    },
    plugins: [
        new baseConfig.plugins[0].constructor({
            ...baseConfig.plugins[0].options,
            remotes: {
                cart: "cart@http://localhost:8191/cart/remoteEntry.js",
            },
        })
    ]
})