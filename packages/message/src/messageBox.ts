// 封装一个容器用来存放 message

// const theContainer = document.createElement('div')
class messagesContainer {
  messagesBox: HTMLElement
  constructor(el: HTMLElement) {
    this.messagesBox = el
    this.messagesBox.className = 'try-messages-box'
    document.body.appendChild(this.messagesBox)
  }

  // 存放 message 对外暴露的接口
  pushMessage(el: HTMLElement) {
    this.messagesBox.appendChild(el)
  }

  // 查看剩余节点
  showChildrenNodes() {
    return Array.from(document.querySelectorAll('.try-message'))
  }

  // 移动节点 (没有函数重载版本)
  moveChildrenNodes(index: number, offsetTop: number) {
    const childrenList: Array<any> = this.showChildrenNodes()
    let temp: number
    for(let i = index || 0; i < childrenList.length; i++) {
      temp = childrenList[i].offsetTop
      childrenList[i].style.marginTop = offsetTop + 'px'
      offsetTop = temp
    }
  }
}

export const messageBox = new messagesContainer(document.createElement('div'))



