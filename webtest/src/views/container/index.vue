<template>
  <div id="layout_">
    <h2 class="title">layout布局测试</h2>
    <try-row>
      <try-col :span="10">测试1</try-col>
      <try-col :span="10" :offset="4">测试1</try-col>
    </try-row>
    <try-row :gutter="20">
      <try-col :span="10">测试2</try-col>
      <try-col :span="10">测试2</try-col>
    </try-row>
    <try-row :gutter="20" justify="end">
      <try-col :span="10">测试3</try-col>
      <try-col :span="10">测试3</try-col>
    </try-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#layout_ {
  width: 100%;

  .title {
    margin-bottom: 20px;
  }
}
</style>