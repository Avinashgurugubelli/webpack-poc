const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',

    // if we set context we no need to add ./src as prefix for file entires/imports.
    context: path.resolve(__dirname, 'src'),
    entry: {
        // util: ['./src/util/file_loader.js', './src/util/logger.js'],
        'index': {
            import: './index.js',
            dependOn: 'logger'
        },
        'file_loader': {
            import: './util/file_loader.js',
            filename: 'util/[name].js'
        },
        'logger': {
            import: './util/logger.js',
            filename: 'util/[name].js'
        },
        'scope_declaration': './scope_declaration.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './index.html',
            // inject false will not add the script tags with defer in index.html
            inject: false,
            minify: {
                html5: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),

        // Copy all 3rd party min files as it is
        new CopyPlugin({
            patterns: [
                { from: './third-party', to: 'third-party' },
                { from: './scripts', to: 'scripts' }
            ]
        }),
    ]
};