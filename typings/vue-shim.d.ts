// 处理解析 ts 中声明文件 （vue）
// 所有vue文件的引入都会走下面的一个处理过程，该处理过程返回一个被 defineComponent 包装的一个vue组件实例
declare module '*.vue' {
  import  { defineComponent, App } from 'vue'
  const component: ReturnType < typeof defineComponent > & {
    install( app: App ): void
  }
  export default component
}