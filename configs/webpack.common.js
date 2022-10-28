const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, '../', 'src', '_index.js'),
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../', 'src'),
            assets: path.resolve(__dirname, '../', 'public', 'assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: "img/[hash][ext]",
                },
            },
            // Fonts and SVGs: Inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),
    ],
};