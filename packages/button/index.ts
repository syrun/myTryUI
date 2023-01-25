// 这个是每个组件的入口文件
import Button from './src/button.vue'
import { App } from 'vue'

// 这里 Button 是被 defineComponent 封装的一个组件实例 我们通过 App.use 来实现全局注册
// app.use 其实是执行了内部封装的 install 方法
Button.install = (app: App) => {
  app.component(Button.name, Button)
}


export default Button
