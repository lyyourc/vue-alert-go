const path = require('path')
const config = require('./webpack.config')

config.entry = './example/app.js'
config.output = {
  path: path.resolve(__dirname, './example/dist'),
  filename: 'build.js',
  publicPath: '/example/dist',
}

delete config.externals

module.exports = config
