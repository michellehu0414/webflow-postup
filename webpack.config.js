'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    context: path.resolve('src'),
    entry: {
        'main-postup': ['./src/js/main-postup.js', './src/scss/main-postup.scss'],
        'main-tastebuds': ['./src/js/main-tastebuds.js', './src/scss/main-tastebuds.scss']
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    mode: 'development' // or 'production'
};
