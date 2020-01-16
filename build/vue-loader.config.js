const docsLoader = require.resolve('./doc-loader.js')

module.exports = (isDev) => {
  return {
    // // 忽略tempplate标签里的空格
    preserveWhitepace: true,
    // 所有的css单独打包,提取到css文件里；vue默认不会单独打包，而是把css加载到js里，按需加载，提高首屏加载速度;
    // 开发环境不需要，正式环境需要
    extractCSS: !isDev,
    // 使用方法见header.vue,将类名.main-header 编译成了下面独一无二的格式，实现了scoped同样的效果
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 将class类名编译成这种格式
      camelCase: true // 支持class类名写成驼峰型式
    },
    // hotReload: false,   会自动根据环境变量开启/关闭，不必设置       // 热重载(局部更新而不刷新整个页面，如果整个页面刷新说明热重载关闭)
    loaders: {
      docs: docsLoader // 对模块（<docs></docs>）使用自定义loader(docsLoader)
    }
    // preLoader: {

    // },
    // postLoader: {

    // }
  }
}
