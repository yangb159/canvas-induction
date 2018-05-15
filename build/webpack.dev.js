const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        }),
        new VueLoaderPlugin()
    ]

}