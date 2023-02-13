<!--
 * 移动端底部导航
 *
 * @Author: 大官人
 * @Date: 2023/2/12
 * @LastEditors: 大官人
 * @LastEditTime: 1991-02-09 00:00:00
 * @Description:
-->

<template>
  <div class="app_mobile_nav">
    <div class="mobile_nav_ul">
      <div v-for="(it, idx) in mobileMenus" class="nav_item">
        <div class="nav_icon">
          <img :src="it.icon" alt="">
        </div>
        <div class="nav_title">{{ it.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 组件描述
 * @desc
 *
 **/

export default {
  name: "appMobileNav",

  components: {},

  data() {
    return {
      mobileMenus: [
        {title: "Home", path: "", icon: require("@/assets/nav/home.svg")},
        {title: "Prices", path: "", icon: require("@/assets/nav/prices.svg")},
        {title: "Charts", path: "", icon: require("@/assets/nav/charts.svg")},
        {title: "NFTs", path: "", icon: require("@/assets/nav/nfts.svg")},
        {title: "Buy", path: "", icon: require("@/assets/nav/buy.svg")},
        {title: "More", path: "", icon: require("@/assets/nav/more.svg")},
      ],
    }
  },

  props: {},

  computed: {},

  mixins: [],

  created() {
  },

  mounted() {
  },

  methods: {}
}

</script>

<style scoped>
.app_mobile_nav {
  height: 100%;
}
</style>
