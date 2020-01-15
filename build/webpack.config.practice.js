const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// 使用webpack-merge这个插件来复用、扩展config
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  // 在生成html文件的时候，会根据指定的模板生成
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

const devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  hot: true
}

const config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  devServer,
  // 指定 import Vue from 'vue'引用的文件(如果不指定，默认使用runtime-only版本)
  resolve: {
    alias: {
      vue: path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader', // 用vue-style-loader 替换 style-loader，使得样式更改有热重载功能
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
