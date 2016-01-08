var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: true,
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/client.js'
    ],
    output: {
        path: path.join(__dirname, '/build'),
        filename: "bundle.js",
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "react", "react-hmre"]
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
