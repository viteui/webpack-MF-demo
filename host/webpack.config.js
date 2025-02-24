const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "/src/index.js",
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        // 添加到 plugins 数组
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                remote: "remote@http://localhost:3001/remoteEntry.js",
            },
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    requiredVersion: dependencies.react,
                    eager: true // 添加 eager 加载
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                    eager: true // 添加 eager 加载
                },
            },
        }),
    ],
};