const path = require('path');

const SCSSLoader = {
    test: /\.scss$/,
    use: [
        "vue-style-loader",
        "css-loader",
        {
            loader: "sass-loader",
            options: {
                //prependData
                additionalData: `
                    @import "src/app/assets/styles/util/_variables.scss";
                `
            }
        }
    ]
};

module.exports = SCSSLoader;