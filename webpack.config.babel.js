import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: './examples/main.js',
    output: {
        filename: './dist/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.css', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'gen')
                ]
            }
        ],
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // include: [
                //     path.resolve(__dirname, 'src'),
                //     path.resolve(__dirname, 'node_modules/stream-dsl')
                // ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'examples/index.html')
        })
    ],
    node: {
        fs: 'empty'
    }
};
