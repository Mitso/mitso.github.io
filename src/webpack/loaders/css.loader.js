const CSSLoader = {
    test: /\.css$/,
    use: [
        process.env.NODE_ENV ? "vue-style-loader" : MiniCssExtractPlugin.loader,
        "css-loader"
    ]
};

module.exports = CSSLoader;