import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  // 所有生命周期，只有beforeCreate、created会在服务器端渲染(SSR)过程中被调用，原因是在服务端是无法操纵dom的
  // beforeCreate、created时this.$el都是undefined，所以在这两个生命周期里做$el的dom操作是不行的
  beforeCreate () {
    console.log(this.$options.data().text, this.text, 'beforeCreate')
  },
  // 在beforeCreate前，所有的options都会先存到vm.$options中，在beforeCreate之后，将$options里的data啦，props啦，methods啦等等一个个附到vm上，
  // 然后再触发created钩子。所以在beforeCreate的时候，通过this.text是拿不到值的，在created的时候就能通过this.text拿到值了;
  // 但是options是在new Vue的时候创建的,在所有的生命周期里都能取到，但options里的值是初始值，不是响应式的
  created () {
    this.text += 2
    console.log(this.text, this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  // beforeUpdate、updated在wacher数据发生变化时触发
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  // activated、deactivated与keep-alive相关
  activated () { // 在组件章节讲解
    console.log(this, 'activated')
  },
  deactivated () { // 在组件章节讲解
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  // render 在beforeMount和mounted之间执行
  render (h) {
    throw new TypeError('render error')
    // console.log('render function invoked')
    // return h('div', {}, this.text)
  },
  // 当本组件render()报错时执行，子组件render()报错不会执行
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  // 捕获本组件和所有子组件的报错信息
  errorCaptured () {
    // 会向上冒泡，并且正式环境可以使用
  }
})

app.$mount('#root')
// setInterval(() => {
//   app.text = app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy()
}, 1000)
