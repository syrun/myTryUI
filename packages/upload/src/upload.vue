<template>
  <div class="try-upload">
    <div class="try-uploader-imglist">
      <div v-for="(item, index) in base64ImgList" :key="index" class="imgItem">
        <img :src="item" alt="" />
        <span class="preview">
          <i class="try-icon-cancel"></i>
          <i class="try-icon-cancel"></i>
          <i class="try-icon-cancel"></i>
        </span>
      </div>
      <div
        class="try-uploader-container"
        @click="handleClick"
        @dragenter=" prevent "
        @dragover=" prevent "
        @dragleave=" prevent "
        @drop="handleDrag"
      >
        <slot name="text"></slot>
        <input
          type="file"
          :multiple="multiple"
          name="img"
          class="upload-area"
          ref="file"
          @change="handleChange"
        />
        <slot name="tip"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { TMessgae } from 'try-ui'
export default defineComponent({
  name: 'try-upload',
  props: {
    accept: {
      type: String,
    },
    size: {
      type: Number,
      default: 500 * 1024,
    },
    onSuccess: {
      type: Function,
      default: () => {},
    },
    onError: {
      type: Function,
      default: () => {},
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  
  setup(props) {
    const file = ref(null)
    let files = []
    let base64ImgList = reactive([])
    // 当点击文件上传框时触发input的点击事件， 但是dom实例只有在mounted阶段才能拿到
    function handleClick() {
      file.value.click()
    }

    // 触发拖拽行为
    function handleDrag(event) {
      event.preventDefault()
      const fileList = Array.from(event.dataTransfer.files)
      handlerFilesValue(fileList)
      getBase64Img()
    }

    // 处理input内容发生改变时的函数
    function handleChange() {
      // file.value.value 拿到的是文件的名称
      // file.value.files 拿到的是文件的相关信息,是一个fileList的伪数组
      console.log(Array.from(file.value.files))
      handlerFilesValue(Array.from(file.value.files))
      getBase64Img()
    }

    // 解决拖拽的默认事件
    function prevent(event) {
      event.preventDefault()
    }
    
    // 计算最终文件值的处理函数
    function handlerFilesValue(fileList) {
      fileList.forEach((item) => {
        ;(item.size <= props.size ||
          giveUserTips(`文件大小不得超过${props.size}kb`, 'danger')) &&
          (props.accept.includes(item.type) ||
            giveUserTips(`文件类型为 ${props.accept}`, 'danger')) &&
          files.push(item)
      })
    }

    // 将得到的图片转为base64编码
    function getBase64Img() {
      files.forEach((item) => {
        const reader = new FileReader()
        reader.readAsDataURL(item)
        reader.onload = function () {
          base64ImgList.push(reader.result)
        }
      })
      files = []
    }

    // 提示用户上传文件时出现错误
    function giveUserTips(message, type) {
      props.onError(
        TMessgae({
          message: message,
          showClose: true,
          type: type,
        })
      )
    }

    return {
      file,
      handleClick,
      files,
      handlerFilesValue,
      handleChange,
      base64ImgList,
      handleDrag,
      prevent
    }
  },
})
</script>

<style lang="less" scoped>
</style>
