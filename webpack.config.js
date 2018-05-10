const path = require('path')
const webpack = require('webpack')
const Html = require('html-webpack-plugin')

module.exports = (env, argv) => ({
  entry: {
    bundle: './src/index.jsx'
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    open: true,
    port: 8000,
    proxy: {
      '/api/*': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Html({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  devtool: argv.mode === 'development' ? '#inline-source-map' : false
})
