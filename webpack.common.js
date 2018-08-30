const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.join(__dirname, 'dist');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

module.exports = {
    entry: './src/index.js', 
    output: {
        path: distPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Expensify App',
            favicon: './src/assets/favicon.png',
            filename: 'index.html',
            template: './src/assets/index.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
            }
        }),
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
        })
    ],
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, 
            exclude: /node_modules/
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader?outputPath=./images/',
            include: path.resolve(__dirname, 'src/assets/images')
        }]
    },
};