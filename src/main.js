import Vue from 'vue'
import App from './App.vue'
import './cube-ui'                //组件库
import './register'               //自定义组件通过API形式调用
import 'common/stylus/index.styl' //样式

//阻止启动生产消息
Vue.config.productionTip = false

/* 
* $mount和el没有本质上的不同，手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等）
*/
new Vue({
  /*
  * ES6写法
  * render: function (createElement) {
  *     return createElement(App)
  * }
  */
  render: h => h(App)
}).$mount('#app')
