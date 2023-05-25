const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/',
   },
   module: {
      rules: [
         { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
         { test: /\.css$/, use: ['style-loader', 'css-loader'] },
         { test: /\.(png|jpe?g|gif)$/i, use: [{ loader: 'file-loader' }] },
      ],
   },
   resolve: {
      extensions: ['.jsx', '...'],
   },
   mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
      }),
   ],
   devServer: {
      historyApiFallback: true,
   },
};
