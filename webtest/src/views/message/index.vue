<template>
  <div class="message">
    <try-button @click="handleDefault">点击出现提示框</try-button>
    <try-button @click="handleClose">可以自行关闭的提示框</try-button>
    <try-button-group>
      <try-button @click="handleSuccess" type="success">success</try-button>
      <try-button @click="handleDanger" type="danger">danger</try-button>
      <try-button @click="handleInfo" type="info">info</try-button>
    </try-button-group>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { TMessgae } from 'try-ui'
export default defineComponent({
  name: 'Message',
  setup() {
    function handleDefault() {
      TMessgae({
        message: '恭喜你，这是一条成功消息',
        showClose: true,
      })
    }

    function handleClose() {
      TMessgae({
        message: '这是一条可以关闭的消息',
        type: 'success',
        onClose: () => {
          console.log(123)
        },
        showClose: true,
      })
    }

    function handleSuccess() {
      TMessgae({
        message: '成功消息',
        type: 'success',
      })
    }

    function handleDanger() {
      TMessgae({
        message: '错误消息',
        type: 'danger',
        showClose: true,
      })
    }

    function handleInfo() {
      TMessgae({
        message: '通知消息',
        type: 'info',
        showClose: true,
      })
    }

    return {
      handleDefault,
      handleClose,
      handleSuccess,
      handleDanger,
      handleInfo,
    }
  },
})
</script>

<style lang="less" scoped>
</style>