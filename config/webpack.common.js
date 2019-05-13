/* eslint-disable */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const helpers = require('./helpers')
const path = require('path')

/*
 * Webpack Constants
 */
const METADATA = {
    title: 'React-TypeScript-MobX-Webpack',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
}

module.exports = function (options) {
    isProd = options.env === 'production'
    return {
        entry: {
            main: ['./src/app.js'],
            vendor: [
                'react',
                'mobx',
                'react-dom'
            ]
        },

        output: {
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                { test: /.html$/, use: 'raw-loader' },
                { test: /\.json$/, exclude: /(node_modules)/, use: 'json-loader' },
                {
                    test: /\.(s*)css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../',
                                hmr: process.env.NODE_ENV === 'development'
                            },
                        },
                        'css-loader', 'sass-loader'
                    ],
                },
                { test: /\.woff(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
                { test: /\.woff2(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
                { test: /\.ttf(\?.+)?$/, use: 'file-loader' },
                { test: /\.eot(\?.+)?$/, use: 'file-loader' },
                { test: /\.svg(\?.+)?$/, use: 'file-loader' },
                { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
                { test: /\.gif$/, use: 'url-loader?mimetype=image/gif' }
            ]
        },
        resolve: {
            extensions: ['.js', '.json']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                title: METADATA.title,
                chunksSortMode: 'dependency',
                metadata: METADATA
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.ProvidePlugin({
                'React': 'react',
                'react-dom': 'ReactDOM'
            })
        ]
    }
}
/* eslint-disable */