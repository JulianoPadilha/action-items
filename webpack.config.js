const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/application/entrypoints/app/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: { 
              esModule: true,
              importLoaders: 1,
              sourceMap: true
             }
          },
          'postcss-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    compress: true,
    port: 8081,
    stats: 'errors-only',
    open: false,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'build'),
    watchContentBase: true,
    hot: true,
  },
  devtool: false
};

