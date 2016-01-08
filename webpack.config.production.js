var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/client.js'
    ],
    output: {
        path: path.join(__dirname, '/build'),
        filename: "bundle.min.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },

    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
