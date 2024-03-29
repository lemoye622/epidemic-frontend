// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入富文本编辑器
import quillEditor from 'vue-quill-editor'
// 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(quillEditor)

//全局引入css文件
import '../style/reset.css'

// 全局对象提示框
import Titles from './api/title.js'
Vue.prototype.mytitle = Titles

// 全局对象formdata
import referto from './api/formdata.js'
Vue.prototype.myreferto = referto

//引入vuex文件
// import store from './store/store.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
