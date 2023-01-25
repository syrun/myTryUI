<template>
  <button :class="classes" type="button">
    <!-- icon 图标 -->
    <i v-if="loading" class="try-icon-loading"></i>
    <i v-if=" !loading && icon " :class="icon"></i>
    <span v-if=" $slots.default "><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
// 在vue3中我们可以使用PropType来限制props中属性的值
type ButtonType = 'primary' | 'danger' | 'info' | 'text' | 'success'
export default defineComponent({
  name: 'try-button',
  props: {
    type: {
      default: 'primary',
      // 校验
      // vaildator: (val:string) => {
      //   return ['primary', 'danger', 'info', 'text'].includes(val)
      // },
      type: String as PropType<ButtonType>,
    },
    icon: {
      default: '',
      type: String
    },
    disabled:Boolean,
    round: Boolean,
    loading: Boolean
  },
  setup (props) {
    const classes = computed(() => [
      'try-button',
      `try-button--${props.type}`,
      {
        'is-disabled': props.disabled,
        'is-round': props.round,
        'is-loading': props.loading 
      }
    ])

    return {
      classes
    }
  }
})
</script>

<style lang="less" scoped>

</style>
