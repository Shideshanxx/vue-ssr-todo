import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

let i = 0
setInterval(() => {
  i++
  app.text += 1
  app.text += 1
  app.text += 1
  setTimeout(() => {
    app.text += 1
  }, 2000)
  app.text += 1
  app.text += 1

  // app.obj.a = i
  app.$set(app.obj, 'a', i)
  // app.$forceUpdate()

  // 修改app.$options.data，数据不会双向绑定
  // app.$options.data.text += 1

  // 数据双向绑定
  // app.$data.text += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)

// 挂载的html节点
// console.log(app.$el)

// new Vue时传入的和默认的一整个对象
// console.log(app.$options)

// 视图更新时触发下面的函数
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// app.$root就是new Vue()创建的根实例
// console.log(app.$root === app)

// 子节点
// console.log(app.$children)

// 插槽
// console.log(app.$slots)
// console.log(app.$scopedSlots)

// console.log(app.$refs)

// 当前 Vue 实例是否运行于服务器，在服务端渲染时用到。
// console.log(app.$isServer)

// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)

// app.$on()
// app.$off()
// app.$once('test', (a, b) => {
//   console.log(`test emited ${1} ${b}`)
// })
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// 重新渲染
// app.$forceUpdate()

// 销毁实例
// app.$destroy()
