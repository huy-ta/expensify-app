const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.join(__dirname, 'dist');

module.exports = {
    entry: './src/index.js', 
    output: {
        path: distPath,
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Expensify App Hehe2',
            favicon: './src/assets/favicon.png',
            filename: 'index.html',
            template: './src/assets/index.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
            }
        })
    ],
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, // regular expressions
            exclude: /node_modules/
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader?outputPath=./images/',
            include: path.resolve(__dirname, 'src/assets/images')
        }]
    },
};