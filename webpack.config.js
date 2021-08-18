const path = require('path');
const MiniCssExtarctPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";

if(process.env.NODE_ENV === "production"){
    mode = "production"
}

module.exports={
    mode: mode,
    entry: './src/index.js',
    output:{
        path: path.resolve('dist'),
        filename: 'main.js', 
    },
    module: {
        rules: [
          {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.s?css$/i,
            use: [MiniCssExtarctPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource", 
          },
        ],
      },
    plugins: [new MiniCssExtarctPlugin(), new HtmlWebpackPlugin({
        template: "./index.html"
    }) ],
}