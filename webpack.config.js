const path = require('path');

const publicPath = path.join(__dirname, 'public');

module.exports = {
    entry: './src/app.js', 
    output: {
        path: publicPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, // regular expressions
            exclude: /node_modules/
        }, {
            use: [ // if there are more than one loader, use 'use' instead of 'loader' for an array of loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/ // both css and scss
        }]
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: publicPath,
        historyApiFallback: true
    }
};