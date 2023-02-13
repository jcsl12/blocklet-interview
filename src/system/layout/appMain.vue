<!--
 * 主页面容器
 *
 * @Author: 大官人
 * @Date: 2023/2/12
 * @LastEditors: 大官人
 * @LastEditTime: 1991-02-09 00:00:00
 * @Description:
-->
<template>
  <keep-alive :include="[]">
    <router-view :key="$route.path"></router-view>
  </keep-alive>
</template>

<script>

export default {
  name: "appMain",

  data() {
    return {};
  },

  mounted() {
  }

}
</script>

<style scoped>

</style>
