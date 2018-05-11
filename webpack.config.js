const path = require('path')
const Html = require('html-webpack-plugin')

module.exports = (env, argv) => ({
  entry: {
    bundle: path.resolve(__dirname, 'src/index.tsx')
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
        test: /\.tsx$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Html({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  devtool: argv.mode === 'development' ? '#inline-source-map' : false
})
