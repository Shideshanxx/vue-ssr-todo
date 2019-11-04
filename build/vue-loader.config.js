const docsLoader = require.resolve('./doc-loader.js')

module.exports = (isDev) => {
  return {
    preserveWhitepace: true,   // 忽略tempplate标签里的空格
    extractCSS: !isDev,       // 所有的css单独打包；vue默认不会单独打包，而是把css加载到js里，按需加载，提高首屏加载速度;
                              // 开发环境不需要，正式环境需要
    cssModules: {},
    // hotReload: false,   会根据环境变量开启/关闭       // 热重载(局部更新而不刷新整个页面，如果整个页面刷新说明热重载关闭)
    loaders: {
      'docs': docsLoader    // 使用自定义模块使用自定义loader
    },
    // preLoader: {

    // },
    // postLoader: {

    // }
  }
}