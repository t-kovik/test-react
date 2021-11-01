const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

module.exports = {
    target: 'node',
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                            onlyLocals: true,
                        }
                    },
                    'sass-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            },
            {
                test   : /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            }
        ]
    },
    optimization: {
        minimize: false
    }

}