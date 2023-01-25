import { App } from "vue"

import Button from '@try-ui/button'
import Icon from '@try-ui/icon'
import ButtonGroup  from "@try-ui/button-group"
import Row from '@try-ui/row'
import Col from '@try-ui/col'
import checkBox from '@try-ui/checkbox'
import checkBoxGroup from '@try-ui/check-box-group'
import { Message } from '@try-ui/message/src/message'
import Upload from '@try-ui/upload'

// 注册全局组件
const components = [
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  checkBox,
  checkBoxGroup,
  Upload
]

const install = (app: App) => {
  components.forEach(item => {
    app.component(item.name, item)
  })
}

export const TMessgae = Message

export default {
  install
}