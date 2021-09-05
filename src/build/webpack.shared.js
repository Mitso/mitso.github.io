const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const isDev = process.env.NODE_ENV;
const isPort = process.env.PORT = 9100;

const config = {
    name: "config",
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
        filename: "[name].[chunkhash:8].bundle.js",
        sourceMapFilename: "[name].[chunkhash:8].js.map",
    },
    resolve: {
        extensions: [ ".js", ".vue", ".json"],
        alias: {
            //To test on vue file
            "vue$": isDev ? "vue/dist/vue.runtime.js" : "vue/dist/vue.runtime.min.js", 
            "@":  path.resolve(__dirname, "/app")
        }
    },
    module: {
        rules: [
            require("./loaders/vue.loader"),
            require("./loaders/loader.js"),
            require("./loaders/css.loader"),
            require("./loaders/scss.loader"),
            require("./loaders/asset.loader"),
            require("./loaders/file.loader"),
            {
                enforce: "pre",
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                exclude: "/node_modules/"
            },
        ]
    },
    performance: {
        hints: "warning",
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
    }
    ,
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: isPort,
    }
};

module.exports = config;