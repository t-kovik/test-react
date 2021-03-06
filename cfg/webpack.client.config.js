const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevTool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

function getEntry() {
    if(IS_PROD) {
        return [path.resolve(__dirname, '../src/client/index.jsx')]
    }
    return [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
    ]
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader'
                ]
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
    devtool: setupDevTool(),
    plugins: IS_DEV ? [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
    ] : []
};