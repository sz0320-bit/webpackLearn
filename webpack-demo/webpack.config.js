const path = require('path');


module.exports = {
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: "",
    },
    target: ["web", "es5"],
    stats: { children: true },
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 8080,
        open: true,
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
            },
            // CSS rules
            {
                test: /\\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
};

