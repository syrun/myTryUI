<template>
  <div id="layout">
    <div class="mune">
      <dl>
        <dt>组件</dt>
        <dd><router-link to="./button">Button按钮</router-link></dd>
        <dd><router-link to="./icon">Icon图标</router-link></dd>
        <dd><router-link to="./layout">Layout布局</router-link></dd>
        <dd><router-link to="./checkbox">ChekBox组件</router-link></dd>
        <dd><router-link to="./message">Message</router-link></dd>
        <dd><router-link to="./upload">upload</router-link></dd>
      </dl>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
#layout {
  position: absolute;
  margin-top: 100px;
  width: 1140px;
  display: flex;

  .mune {
    width: 240px;
    overflow: auto;
    padding: 10px 10px;

    dt {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    dd {
      a {
        display: block;
        line-height: 40px;
        height: 40px;
        &:hover {
          color: #409eff;
        }
      }
    }
  }

  .main-content {
    flex: 1;
    padding: 30px;
  }
}
</style>