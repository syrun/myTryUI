import { createVNode, render, VNode } from 'vue'
import { TMessageOptions } from './message.type'
import MessageComponent from './message.vue'
import { messageBox } from './messageBox'

let timer = null // 设置定时器
let instance: VNode[] = [] // 存放节点，计算 offset
let count = 0;

// 设置节流函数
function throttle(fn: (options: TMessageOptions) => void) {
  return function (...args) {
    if (timer === null) {
      fn.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, 200)
    }
  }
}

// 处理组件摧毁的函数
function handleVNDestroy(box: HTMLElement, locationInfo: number): void {
  let location: { id: number, offsetTop: number }
  let temp: number
  // 删除 container 容器
  location = removeInstanceEl(locationInfo)
  // 使用 null 作为参数会销毁容器里的实例
  render(null, box)
  document.querySelector('.try-messages-box').removeChild(box)
  messageBox.moveChildrenNodes(location.id, location.offsetTop)
  for(let i = location.id; i < instance.length; i++) {
    temp = instance[i].props.offset
    instance[i].props.offset = location.offsetTop
    location.offsetTop = temp
  }
  // messageBox.moveChildrenNodes(location.id, location.offsetTop)
}

// 删除 instance 中的元素
function removeInstanceEl(id: number): { id: number, offsetTop: number } {
  let idx: number
  instance.some( (item, index) => {
    if(item.props.id === id) {
      idx = index
      return true
    }
  })
  let offset: number = instance[idx].props.offset as number
  instance.splice(idx, 1)
  return {
    id: idx,
    offsetTop: offset
  }
}

// 计算 offset 的函数
function getComputedOffset(ops: any): number {
  let offset = ops?.offset || 20
  instance.forEach(() => offset += 60)
  return offset
}

// 将组件变为 虚拟节点 的函数
function renderNewMessage(ops: any) {
  const box = document.createElement('div')
  const vn = createVNode(MessageComponent, ops)
  render(vn, box)
  instance.push(vn)
  messageBox.pushMessage(box)
  vn.props.onDestory = (val: number) => {
    handleVNDestroy(box, val)
  }
}

// 用户调用该函数生成一个message
function message(options: TMessageOptions): void {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let ops = {
    ...options,
    offset: options?.offset || 20,
    id: count++
  }

  ops.offset = getComputedOffset(ops)
  renderNewMessage(ops)
}

export const Message = throttle(message)

