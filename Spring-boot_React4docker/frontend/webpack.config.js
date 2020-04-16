const path = require("path");

module.exports = {
    entry: { app: './src/index.js' },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/js/",
        filename: '[name].js',
        library: ["com", "example"],
        libraryTarget: 'umd'
    },
    mode: "development",
    devServer: {
        open: true,
        openPage: "index.html",
        contentBase: path.join(__dirname, "public"),
        watchContentBase: true,
        port: 3000,
        host: "0.0.0.0"
    }
}