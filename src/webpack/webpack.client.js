const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const webpackShared = require("./webpack.shared");
const { merge } = require("webpack-merge");
const path = require("path");
require("babel-polyfill");

const config = merge(webpackShared, {
    mode: process.env.NODE_ENV,
    entry: [
        "babel-polyfill",
        path.resolve(__dirname, "/src", "app.js")
    ],
    devtool: "source-map",
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[name].[contenthash:8].css",
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "/src/public", "index.html"),
            favicon: "./src/public/favicon.ico",
            title: "Isixeko sam"
        }),
        new StyleLintPlugin({
            files: ["**/*.{css,sss,scss,sass}"],
        })
    ]
});

module.exports = config;