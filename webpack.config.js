const path = require('path')

module.exports = {
    entry: {
        home: './src/home.js',
        menu: './src/menu.js',
        contact: './src/contact.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devtool: 'eval'
}