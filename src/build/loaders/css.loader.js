const isDev = process.env.NODE_ENV;

const CSSLoader = {
    test: /\.css$/,
    use: [
        isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
        "css-loader"
    ]
    };

module.exports = CSSLoader;
