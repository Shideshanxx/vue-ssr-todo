import Vue from 'vue'

/**
 * Vue.extend()，$parent
 */

const compoent = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// --------------------------------用法111111---------------------------------

// // 扩展Vue，使用基础 Vue 构造器，创建一个“子类”
// const CompVue = Vue.extend(compoent)

// // 创建CompVue实例
// new CompVue({
//   el: '#root',
//   // propsData只用于 new 创建的实例中,作为传给子组件的props
//   propsData: {
//     propOne: 'xxx'
//   },
//   // 和compoent里面的data合并或覆盖
//   data: {
//     text: '123'
//   },
//   // 也会与compoent里面的mounted合并，但compoent里面的mounted会先执行
//   mounted () {
//     console.log('instance mounted')
//   }
// })

// ------------------------------用法22222------------------------------
const componet2 = {
  extends: compoent,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log('1', this.$parent.$options.name)
  }
}

new Vue({
  name: 'Root',
  el: '#root',
  components: {
    Comp: componet2
  },
  template: '<comp></comp>'
})

//  $parent用法,最好不要在子组件里改变父组件里的值

// const parent = new Vue({
//   name: 'parent'
// })

// // 在new Vue时可以指定parent属性
// new Vue({
//   parent: parent,
//   name: 'Root',
//   el: '#root',
//   mounted () {
//     console.log('2', this.$parent.$options.name)
//   },
//   components: {
//     Comp: componet2
//   },
//   data: {
//     text: 23333
//   },
//   template: `
//     <div>
//       <span>{{text}}</span>
//       <comp></comp>
//     </div>
//   `
// })
