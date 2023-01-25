// 处理组件内部的逻辑
// 1. label的样式

// 2. 处理父组件传递的值

// 3. 处理父组件传递的函数
import { checkBoxTypes } from '../checkbox.type'
import { computed, getCurrentInstance } from 'vue'

function useModelValue( props: checkBoxTypes ) {
  let { emit } = getCurrentInstance()

  const model = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emit('update:modelValue', val)
    }
  })
}

export const useCheckBoxProps = (props: checkBoxTypes) => {
  let model = useModelValue(props)

  return {
    model
  }
}
