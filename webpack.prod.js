const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new MiniCSSExtractPlugin({
            fileName: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: { sourcemap: true }
        })
    ],
    module: {
        rules: [{
            use: [
                MiniCSSExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/
        }]
    },
    devtool: 'source-map'
});