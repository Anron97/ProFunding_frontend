const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'SERVER_HOST': JSON.stringify(process.env.MDCPS_ABUSE_BACKEND_HOST)
            }
        }),
        new CompressionPlugin({
            asset: "[path].gz",
            algorithm: "gzip",
            test: /\.js$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});
