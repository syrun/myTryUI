import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入全局组件
import TUI from 'try-ui'
// 引入全局样式
import 'theme-chalk/index.css'
import 'normalize.css'
import '@/assets/style/common.css'

createApp(App).use(TUI).use(router).mount('#app')
