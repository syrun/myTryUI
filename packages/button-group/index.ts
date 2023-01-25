import ButtonGroup from '../button/src/button-group.vue'
import { App } from 'vue'

ButtonGroup.install = (app: App) => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup