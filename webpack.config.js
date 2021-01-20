const htmlplugin = require('html-webpack-plugin');
const minicss = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
    rules: [
        { test: /\.jsx?$/, loader: 'babel-loader' }, //transpile js/jsx
        {
            test: /\.s?[ac]ss$/,
            use: [
                { loader: minicss.loader },
                {
                    loader: 'css-loader',
                    options: { url: false, sourceMap: true },
                }, // Interprets `@import` and `url()` like `import/require()` and will resolve them
                { loader: 'sass-loader', options: { sourceMap: true } }, // Loads a SASS/SCSS file and compiles it to CSS
            ],
        },
        { test: /\.(png|jpg|jpeg|svg)$/, loader: 'file-loader' }, // Loads images
    ],
    },
    output: { filename: 'bundle.[contenthash].js' },
    devtool: 'source-map',
    plugins: [
        new htmlplugin({
            title: "VanillaJS & Sass",
            filename: './index.html',
            template: './src/index.html',
        }),
        new minicss({ filename: '[name].[contenthash].css' }),
    ],
};
