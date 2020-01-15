import Vue from 'vue'

/**
 * 为什么改变number的值会触发getName()？？？？Vue的渲染原理??
 * 当vue实例中一个数据发生变化整个实例都要重新计算（并不是整个重新渲染）,再经过虚拟Dom的diff根据需求进行渲染；
 * computed有缓存不用重新计算，而依赖于methods的数据都需要重新计算；
*/
new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>FullName: {{fullName}}</p>
      <div>
        <p>Number: {{number}}</p>
        <p><input type="text" v-model="number"></p>
      </div>
      <p>FirstName: <input type="text" v-model="firstName"></p>
      <p>LastName: <input type="text" v-model="lastName"></p>
      <p>Name: <input type="text" v-model="name"></p>
      <p>Obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'Shi',
    lastName: 'Deshan',
    number: 0,
    fullName: '',
    obj: {
      a: 0
    }
  },
  // computed会做缓存，当数据没发生变化的时候，使用缓存数据，而不会重新计算
  computed: {
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    obj: {
      handler () {
        console.log('obj.a changed')
        // // watch 会无限循环，最好不要在watch、computed里面改变当前监测的属性
        // this.obj.a += 1
      },
      // 立即执行
      immediate: true,
      // deep 深度监测obj内部属性的变化
      deep: true
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
