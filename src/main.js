/** 可以考虑使用cdn方式引入 */
import Vue from 'vue'

/** 全局App */
import App from '@/App'

/** 全局Store */
import store from '@/store'

/** 全局路由 */
import router from '@/router'

import "@/router/guard";

/** 全局样式 */
import '@/styles/index.scss'

/** 全局混入 */
Vue.mixin({
  created() {
    // TODO
  }
})

/** 关闭提示 */
Vue.config.productionTip = true

/** 使用devtool */
Vue.config.devtools = true;

/** 捕获全局错误 */
// Vue.config.errorHandler = function (err, vm, info) {// 只在 2.2.0+ 可用
//     console.log("全局错误监听", err, vm, info);
//     console.log(err.message)
// }

Vue.prototype.todo = function (){
  alert("Not Implemented!")
}
function init(){
  window.__app__ = new Vue({
    render: h => h(App),
    router,
    store,
    mounted() {
    }
  }).$mount('#app')
}

setTimeout(_=> {
  init();
},0)


