import TMessage from '../message/src/message'
import { App } from 'vue'
// 引入接口类型
(TMessage as any).install = (app: App) => {
  // vue3 全局使用
  app.config.globalProperties.$TMessage = TMessage
}

export default TMessage