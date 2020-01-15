import Vue from 'vue'

/**
 * 在组件内部实现双向绑定功能
 */

// --------------------------11111---------------------
// const component = {
//   props: ['value'],
//   template: `
//     <div>
//       <input type="text" @input="handleInput" :value="value">
//     </div>
//   `,
//   methods: {
//     handleInput (e) {
//       this.$emit('input', e.target.value)
//     }
//   }
// }

// new Vue({
//   components: {
//     CompOne: component
//   },
//   el: '#root',
//   data () {
//     return {
//       value: '123'
//     }
//   },
//   // arguments是一个数组，arguments[0] 就是emit传出来的第一个参数
//   template: `
//     <div>
//       <comp-one :value="value" @input="value = arguments[0]"></comp-one>
//     </div>
//   `
// })

// -------------------------------------22222--------------------------------------
const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
    </div>
  `
})

// -----------------官方实例---------------------------
// 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。
// model 选项可以用来避免这样的冲突：

// Vue.component('base-checkbox', {
//   model: {
//     prop: 'checked',
//     event: 'change'
//   },
//   props: {
//     checked: Boolean
//   },
//   template: `
//     <input
//       type="checkbox"
//       v-bind:checked="checked"
//       v-on:change="$emit('change', $event.target.checked)"
//     >
//   `
// })
// 现在在这个组件上使用 v-model 的时候：

// <base-checkbox v-model="lovingVue"></base-checkbox>
// 这里的 lovingVue 的值将会传入这个名为 checked 的 prop。同时当 <base-checkbox> 触发一个 change 事件并附带一个新的值的时候，这个 lovingVue 的属性将会被更新。

// 注意你仍然需要在组件的 props 选项里声明 checked 这个 prop。
