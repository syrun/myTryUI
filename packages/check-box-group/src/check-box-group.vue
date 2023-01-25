<template>
  <div class="try-checkboxGroup" @click="handelClick" role="group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

export default defineComponent({
  name: 'try-checkbox-group',
  props: {
    modelValue: {
      type: Array,
      default: [],
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const modelValue_side = props.modelValue

    // 将 modelValue 传给子组件， 由子组件通过 value 匹配来决定该 checkbox 是否选中
    provide('checkList', props.modelValue)
    // 提交给父组件处理事件
    function submitData(val) {
      emit('change', val)
      emit('update:modelValue', val)
    }

    // 返回最新的数组值。
    function handelClick(e: { [obj: string]: any }) {
      if (e.target.tagName === 'INPUT') {
        let clickValue = e.target.value
        if (e.target.checked) {
          // 如果当前点击的 input 状态为 选中，则添加
          modelValue_side.push(clickValue)
        } else {
          // 如果当前点击的 input 状态为 未选中，则删除
          const index = modelValue_side.indexOf(clickValue)
          modelValue_side.splice(index, 1)
        }
        submitData(modelValue_side)
      }
    }

    return {
      handelClick,
    }
  },
})
</script>


<style>
</style>