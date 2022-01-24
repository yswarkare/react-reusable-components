const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    alias: {
        "@data": path.resolve(__dirname, './src/data/')
      },
    module: {
        rules: [{
            test: /\.svg$/,
            use: "svg-inline-loader"
        },{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },{
            test: /\.(js)$/,
            use: "babel-loader"
        }]
    }
}