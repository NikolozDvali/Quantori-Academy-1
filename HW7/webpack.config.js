const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.ts'),
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          { 
            test: /\.(?:ico|gif|png|jpg|jpeg|svg|db)$/i,
            type: 'asset/resource',
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: "Webpack Output",
          template: 'src/index.html'
        }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      compress: true,
      port: 9000,
    },
};