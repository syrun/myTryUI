<template>
  <div id="checkBox">
    <h2>测试checkbox组件----{{ checked  }}</h2>
    <try-checkbox v-model="checked" @change="handle1Change" label="checkbox测试组件"></try-checkbox>
    <div> 选择框选中的选项为 {{checkList}}</div>
    <try-checkbox-group v-model="checkList" @change="handle2Change">
      <try-checkbox v-for="(item, index) in showList" :label="item" :key="index"></try-checkbox>
    </try-checkbox-group>
  </div>
</template>

<script lang="ts">  
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CheckBox',
  setup() {
    const checked = ref(true)

    function handle1Change(val) {
      console.log(val) // 当前 checkbox 的状态
    }

    const checkList = ref(['上海', '深圳','杭州'])
    const showList = ref(['上海', '深圳', '杭州', '北京'])
    // 处理 checkboxGroup 的点击事件
    function handle2Change(val) {
      console.log(val) // checkList中剩余的元素
    }

    return {
      checked,
      handle1Change,
      checkList,
      showList,
      handle2Change
    }
  },
})
</script>

<style lang="less" scoped>
#checkBox {
  width: 100%;
}
</style>
