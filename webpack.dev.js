const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        postup: './src/js/postup.js',
        tastebuds: './src/js/tastebuds.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
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
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192,
                    },
                },
                generator: {
                    filename: 'assets/images/[name].[hash:6][ext]',
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/svg/[name][ext]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tastebuds.html',
            chunks: ['tastebuds'],
            filename: 'tastebuds.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: './src/tastebuds-sandbox.html',
            chunks: ['tastebuds'],
            filename: 'tastebuds-sandbox.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: './src/postup.html',
            chunks: ['postup'],
            filename: 'postup.html',
            minify: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets/svg'), to: 'assets/svg' },
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        hot: true,
        watchFiles: ['src/**/*', 'src/assets/svg/**/*'],
    },
    mode: 'development',
    devtool: 'source-map',
};
