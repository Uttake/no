const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProd = !isDev

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist') 
    },
    optimization: {
        splitChunks : {
            chunks: 'all'
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
        open: true,
        hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],

    module: {
        rules: [
        {
            test:/\.(s*)css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader', 'sass-loader',]
        },
        
         {
            test:/\.(png|jpg|svg|gif)$/,
            type: 'asset/resource',
            generator: {
                filename: 'img/[hash][ext][query]'
            }
         },
        
        ]
    }

}