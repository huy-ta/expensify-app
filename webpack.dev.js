const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const distPath = path.join(__dirname, 'dist');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [{
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/
        }]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort: 3000
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: distPath,
        historyApiFallback: true
    }
});