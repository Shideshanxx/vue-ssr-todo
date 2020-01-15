import Vue from 'vue'

/**
 * 定义组件及父子组件通信
 *
 * props:{}传值有哪些属性可以设置： type、required、
 *                                default （如果默认是一个对象，必须写成default()=>{return {}}, 在函数里return一个对象,不然如果接收多个组件的传值会相互影响）、
 *                                validator： 自定义接受的参数
 */

const compoent = {
  props: {
    active: {
      // type: Boolean,
      // required: true,
      validator (value) {
        return typeof value === 'boolean'
      }
    },
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
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', compoent)

new Vue({
  components: {
    CompOne: compoent
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  el: '#root',
  template: `
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="true" propOne="text2"></comp-one>
    </div>
  `
})
