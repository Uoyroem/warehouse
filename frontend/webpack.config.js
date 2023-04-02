
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        filename: 'script.js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 3001
    }
};