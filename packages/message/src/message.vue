<template>
  <Transition name="try-message" @after-leave=" $emit('destory', id) ">
    <div
      :class="classes"
      v-if="showMessage"
      ref="span"
      :index="`index-${id}`"
    >
      <span>{{ message }}</span>
      <span class="cancel" @click="closeMessage">
        <i v-if="showClose" class="try-icon-cancel"></i>
      </span>
    </div>
  </Transition>
</template>

<script>
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue'
export default defineComponent({
  props: {
    id: {
      type: Number,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'sucess',
    },
    duration: {
      type: Number,
      default: 3000,
    },
    ceter: {
      type: Boolean,
      default: true,
    },
    offset: {
      type: Number,
      default: 20,
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      default: () => {},
    },
  },

  setup(props, ctx) {
    let showMessage = ref(false)
    let timer = null
    // 根据 offset 为message提供上边距
    const span = ref(null)
    let marginTop = computed(() => props.offset)

    // 计算 样式 
    const classes = computed(() => [
      'try-message',
      props.type ? `try-message-${ props.type }` : ''
    ])
    // message 关闭的处理函数
    function close() {
      timer = setTimeout(() => {
        showMessage.value = false
        props.onClose?.(span.value)
        // 关闭定时器
        timer = null
      }, props.duration)
    }

    // 定义点击关闭按钮隐藏 message 的处理函数
    function closeMessage() {
      timer = null
      showMessage.value = false
      props.onClose?.(span.value)
    }

    // 设置定时器，延迟 duration 后关闭
    onMounted(() => {
      showMessage.value = true
      nextTick(() => {
        span.value.style.marginTop = marginTop.value + 'px'
      })
      // 实现定时关闭的功能
      close()
    })

    return {
      showMessage,
      span,
      timer,
      closeMessage,
      close,
      marginTop,
      classes
    }
  },
})
</script>
