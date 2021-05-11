const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//test
module.exports = {
   //для того чтобы не было ошибки при использовании Router при перезагрузки страницы
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/',
   },
   //для того чтобы не было ошибки при использовании Router при перезагрузки страницы
   mode: 'development',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.(png|jpe?g|gif|ico|ttf|svg|woff2|eot|woff)$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     outputPath: 'images',
                     name: '[name]-[sha1:hash:7].[ext]',
                  },
               },
            ],
         },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.(css)$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
         },
         {
            test: /\.(s[ca]ss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: 'public/index.html',
      }),
      new MiniCssExtractPlugin({
         filename: 'main-[hash:8].css',
      }),
   ],
   devServer: {
      open: true,
      host: '192.168.1.236',
      port: 3000,
      //для того чтобы не было ошибки при использовании Router при перезагрузки страницы
      historyApiFallback: true,
   },
};
