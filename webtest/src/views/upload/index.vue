<template>
  <div class="upload-container">
    <try-upload
      accept="image/png, image/jpg, image/jpeg, image/webp"
      :size="100 * 1024"
      :onSuccess="uploadSuccess"
      :onError="uploadError"
      :multiple="true"
    >
      <template #text>
        <div class="try-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </template>
      <template #tip>
        <span class="try-upload__tips">只能上传jpg/png文件，且不超过500kb</span>
      </template>
    </try-upload>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Upload',
  setup() {
    function uploadSuccess() {
      console.log('文件上传成功')
    }

    function uploadError() {
      console.log(`文件上传失败`)
    }

    return { uploadSuccess, uploadError }
  },
})
</script>

<style lang="less" scoped>
</style>
