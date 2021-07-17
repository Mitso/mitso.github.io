const assetLoader = {
    test: /\.(gif|png|jpe?g|svg|woff|woff2|eot|ttf)$/i,
    use: [
        {
            loader: "image-webpack-loader",
            options: {
                bypassOnDebug: true
            }
        },
        {
            loader: "file-loader",
            options: {
                name: "[name].[ext]?[hash]"
            }
        }
    ]
};

module.exports = assetLoader;
