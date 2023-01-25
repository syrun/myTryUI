<template>
  <div id="button">
    <h2>Button测试组件</h2>
    <try-button :type="'primary'" round icon="try-icon-quanbu">123</try-button>
    <try-button :type="'success'" round loading>加载中</try-button>
    <try-button-group>
      <try-button :type="'primary'" round icon="try-icon-quanbu"
        >123</try-button
      >
      <try-button :type="'primary'" round loading>加载中</try-button>
      <try-button :type="'primary'" round loading>加载中</try-button>
    </try-button-group>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style lang="less" scoped>
#button {
  width: 100%;
}
</style>