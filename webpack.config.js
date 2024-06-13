'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, 'src'), // Corrected context path
    entry: {
        'main-postup': ['./js/main-postup.js', './scss/main-postup.scss'], // Relative to context
        'main-tastebuds': ['./js/main-tastebuds.js', './scss/main-tastebuds.scss'] // Relative to context
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
