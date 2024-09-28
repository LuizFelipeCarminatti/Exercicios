const path = require('path') //CommonJS
const modoDev = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './public/assets/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
    },
    devServer: {
        static:{
            directory: path.join(__dirname, './public')
        },
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use:  ["style-loader", "css-loader"]
        }]
    },
    devtool: 'source-map'
}