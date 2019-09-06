const os = require('os')
const path = require('path')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const HardSource = require('hard-source-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              // workers: require('os').cpus().length - 1
              workers: 1
            }
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true
            }
          },
          'eslint-loader',
          'stylelint-custom-processor-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ForkTsChecker({ checkSyntacticErrors: true }),
    new HardSource()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: { '@': path.join(__dirname, '../src') }
  }
}
