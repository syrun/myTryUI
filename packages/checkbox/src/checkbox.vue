<template>
  <label :class="classes">
    <span class="try-checkbox__input">
      <input
        ref="input"
        type="checkbox"
        :checked="modelValue ? modelValue : checked"
        :name="name"
        :disabled="disabled"
        :indterminate="indterminate"
        @click="handleClickmodelValue"
        @change="handleChange"
        :value="label"
      />
    </span>
    <span class="try-checkbox__label">
      <slot v-if="label ? false : true"></slot>
      <span v-else>{{ label }}</span>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject, nextTick, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'try-checkbox',
  emits: ['update:modelValue', 'change'],
  props: {
    indterminate: Boolean,
    checked: Boolean,
    name: String,
    disabled: Boolean,
    label: [String, Number, Boolean, Object],
    modelValue: [String, Number, Boolean],
  },

  setup(props, ctx) {
    const classes = computed(() => [
      'try-checkbox',
      props.modelValue ? 'is-checked' : '',
      props.disabled ? 'is-disabled' : '',
    ])

    // 获取dom元素
    const input = ref<any>(null)

    // 处理checkbox点击事件
    function handleClickmodelValue() {
      ctx.emit('update:modelValue', !props.modelValue)
    }

    // 处理用户自定义的change事件
    function handleChange(e) {
      const value = e.target.checked
      ctx.emit('change', value)
    }

    // 在monted阶段才能获取dom元素
    onMounted(() => {
      // 初始化 checkbox 状态的处理函数
      function initialization() {
        // 这里先暂时不做 '存在数据一样' 这种特殊情况的处理
        const values = Object.values(inject('checkList', {})) // 转为数组
        if(input.value.parentNode.parentNode.parentNode.role === 'group') {
          // 排除单独使用的 try-checkbox
          input.value.checked = values.some((item) => item === props.label) // some 或者  every 返回的是一个boolean
        }
      }

      initialization()
    })

    return {
      classes,
      handleClickmodelValue,
      handleChange,
      input,
    }
  },
})
</script>


<style>
</style>