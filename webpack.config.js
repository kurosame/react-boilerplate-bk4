const path = require('path')
const apiMocker = require('webpack-api-mocker')
const Copy = require('copy-webpack-plugin')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const HardSource = require('hard-source-webpack-plugin')
const Html = require('html-webpack-plugin')

module.exports = (_, argv) => ({
  entry: {
    bundle: path.join(__dirname, 'src', 'index.tsx')
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    open: true,
    port: 8000,
    before(app) {
      apiMocker(app, path.join(__dirname, 'mock.js'), {
        proxy: {
          '/api/*': 'http://localhost:3000'
        },
        changeHost: true
      })
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              transpileOnly: true
            }
          },
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true
            }
          },
          'stylelint-custom-processor-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Copy([
      {
        from: path.join(__dirname, 'assets'),
        to: path.join(__dirname, 'dist', 'assets'),
        ignore: '.gitkeep'
      }
    ]),
    new ForkTsChecker(),
    new HardSource(),
    new Html({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: { '@': path.join(__dirname, 'src') }
  },
  devtool: argv.mode === 'development' ? '#inline-source-map' : false
})
