const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
<<<<<<< HEAD
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
};

module.exports = {
    entry: {
        main: path.join(paths.src, 'pages', 'index.js'),
        postup: path.join(paths.src, 'pages', 'postup', 'postup.js'),
        tastebuds: path.join(paths.src, 'pages', 'tastebuds', 'tastebuds.js'),
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: paths.dist,
        publicPath: '/',
=======
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        postup: './src/js/postup.js',
        tastebuds: './src/js/tastebuds.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
>>>>>>> 843e4fb3604a3b24014f7808edcf8c8cacb435bf
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
<<<<<<< HEAD
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isProduction,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
=======
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
>>>>>>> 843e4fb3604a3b24014f7808edcf8c8cacb435bf
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192,
                    },
                },
                generator: {
                    filename: 'assets/images/[name].[hash:6][ext]',
                },
<<<<<<< HEAD
            },
            {
                test: /\.(mp4)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/videos/[name].[hash:6][ext]',
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[hash:6][ext]',
                },
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/svg/[name].[hash:6][ext]',
                },
            },
        ],
=======
            }
        ]
>>>>>>> 843e4fb3604a3b24014f7808edcf8c8cacb435bf
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
        }),
        new HtmlWebpackPlugin({
            template: path.join(paths.src, 'pages', 'index.html'),
            chunks: ['main'],
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.join(paths.src, 'pages', 'postup', 'postup.html'),
            chunks: ['postup'],
            filename: 'postup.html',
        }),
        new HtmlWebpackPlugin({
            template: path.join(paths.src, 'pages', 'tastebuds', 'tastebuds.html'),
            chunks: ['tastebuds'],
            filename: 'tastebuds.html',
        }),
        new MiniCssExtractPlugin({
<<<<<<< HEAD
            filename: 'css/[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(paths.src, 'assets', 'images', '**', '*'),
                    to: path.resolve(paths.dist, 'assets', 'images', '[path][name][ext]'),
                    context: path.resolve(paths.src, 'assets', 'images'),
                    globOptions: {
                        ignore: ['*.DS_Store', 'Thumbs.db'],
                    },
                },
                {
                    from: path.resolve(paths.src, 'assets', 'videos'),
                    to: path.resolve(paths.dist, 'assets', 'videos'),
                    globOptions: {
                        ignore: ['*.DS_Store', 'Thumbs.db'],
                    },
                },
                {
                    from: path.resolve(paths.src, 'assets', 'svg'),
                    to: path.resolve(paths.dist, 'assets', 'svg'),
                    globOptions: {
                        ignore: ['*.DS_Store', 'Thumbs.db'],
                    },
                },
            ],
        }),
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                    plugins: [
                        ['gifsicle', { interlaced: true }],
                        ['jpegtran', { progressive: true }],
                        ['optipng', { optimizationLevel: 5 }],
                        [
                            'svgo',
                            {
                                plugins: [
                                    {
                                        name: 'removeViewBox',
                                        active: false,
                                    },
                                ],
                            },
                        ],
                    ],
                },
            },
            loader: false,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],
    resolve: {
        extensions: ['.js', '.scss'],
    },
    devtool: isProduction ? false : 'inline-source-map',
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            [
                                'svgo',
                                {
                                    plugins: [
                                        {
                                            name: 'removeViewBox',
                                            active: false,
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
                loader: false,
            }),
        ],
    },
    devServer: {
        static: {
            directory: paths.dist,
        },
        open: true,
        hot: true,
    },
=======
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/tastebuds.html',
            chunks: ['tastebuds'],
            filename: 'tastebuds.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/tastebuds-sandbox.html',
            chunks: ['tastebuds'],
            filename: 'tastebuds-sandbox.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/postup.html',
            chunks: ['postup'],
            filename: 'postup.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets/images'), to: 'assets/images' },
                { from: path.resolve(__dirname, 'src/assets/svg'), to: 'assets/svg' }
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        hot: true,
        watchFiles: ['src/**/*', 'src/assets/svg/**/*'], // Ensure these directories are being watched
    },
    mode: 'development',
    devtool: 'source-map'
>>>>>>> 843e4fb3604a3b24014f7808edcf8c8cacb435bf
};
