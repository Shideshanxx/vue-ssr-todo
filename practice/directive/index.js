import Vue from 'vue'

/**
 * v-text 、 v-html 、v-show 、 v-if、v-else-if、v-else、
 * v-for(遍历数组或对象)，v-for需要指定key
 * （因为每次数据变化，重新渲染列表，性能开销较大；当指定key值，如果下次循环的时候，从缓存中拿到了同样的key，这一行dom节点就直接复用了，不用重新生成dom，减小性能开销）
 * 最好不要用index作为key值，用该行数据唯一的标识符当作key
 * v-on:  可简化成 @ 、     v-bind: 可简化成 ：
 * v-model 它有一些修饰符 .lazy: <!-- 在“change”时而非“input”时更新 --><input v-model.lazy="msg" >
 *                       .number 自动将用户的输入值转为数值类型,如果这个值无法被 parseFloat() 解析，则会返回原始的值。
 *                       .trim 自动过滤用户输入的首尾空白字符
 * v-pre: 跳过这个元素和它的子元素的编译过程
 * v-once: 只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。
*/

new Vue({
  el: '#root',
  template: `
    <div>
      <div>Text: {{text}}</div>
      <div v-if="text === 0">Else Text: {{text}}</div>
      <div v-else>else content</div>
      <div v-html="html"></div>
      <input text="text" v-model="text">
      <input type="checkbox" v-model="active">
      <div>
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
      </div>
      <div>
        <input type="radio" value="one" v-model="picked">
        <input type="radio" value="two" v-model="picked">
      </div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{val}}:{{key}}:{{index}}</li>
      </ul>
    </div>
  `,
  data: {
    arr: [2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: '',
    text: 0,
    active: false,
    html: '<span>this is html</span>'
  }
})
