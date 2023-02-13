<!--
 * 左侧导航
 *
 * @Author: 大官人
 * @Date: 2023/2/12
 * @LastEditors: 大官人
 * @LastEditTime: 1991-02-09 00:00:00
 * @Description:
-->

<template>
  <div class="app_left">
    <div class="app_name">
      <div class="logo"><img :src="require('@/assets/logo.svg')" alt=""></div>
      <div class="title">Blockchain <span>.com</span></div>
    </div>
    <ul class="nav_li">
      <template v-for="(it, idx) in menus" class="nav_li">
        <li v-if="it.line" class="nav_li_split"></li>
        <li v-else>
          <a :class="{active: activeMenu== it.title}" class="nav_link" href="javascript:void(0)" @click="todo">
            <div class="nav_icon">
              <img :src="it.icon" alt="">
            </div>
            <div class="nav_title">{{ it.title }}</div>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
/**
 * 组件描述
 * @desc
 *
 **/

export default {
  name: "appMenu",

  components: {},

  data() {
    return {
      activeMenu: "Home",
      menus: [
        {title: "Home", path: "", icon: require("@/assets/nav/home.svg")},
        {title: "Prices", path: "", icon: require("@/assets/nav/prices.svg")},
        {title: "Charts", path: "", icon: require("@/assets/nav/charts.svg")},
        {title: "NFTs", path: "", icon: require("@/assets/nav/nfts.svg")},
        {title: "DeFi", path: "", icon: require("@/assets/nav/defi.svg")},
        {title: "Academy", path: "", icon: require("@/assets/nav/academy.svg")},
        {title: "Developers", path: "", icon: require("@/assets/nav/developers.svg")},
        {title: "Wallet", path: "", icon: require("@/assets/nav/wallet.svg")},
        {title: "Exchanges", path: "", icon: require("@/assets/nav/exchange2.svg")},
        {line: true, path: "", icon: require("@/assets/nav/btc.png")},
        {title: "Bitcoin", path: "", icon: require("@/assets/nav/btc.png")},
        {title: "Etherenum", path: "", icon: require("@/assets/nav/eth.png")},
        {title: "Bitcoin Cache", path: "", icon: require("@/assets/nav/bch.svg")},
        {title: "BTC Testnet", path: "", icon: require("@/assets/nav/btc-testnet.png")},
        {title: "BCH Tetnet", path: "", icon: require("@/assets/nav/bch-testnet.png")},
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

  methods: {

  }
}

</script>

<style lang="scss" scoped>
.app_name {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  padding: 0 30px;

  .logo {
    width: 20px;
    height: 20px;
    margin-right: 7px;

    > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .title {
    user-select: none;
    font-weight: bolder;
    font-size: 1.1em;
    color: #000;

    > span {
      font-size: 18px;
    }
  }
}

.nav_ul {
  display: inline-block;
}

.nav_li {
  display: block;
  width: 100%;
  text-align: center;
}

.nav_li_split {
  height: 1px;
  background-color: #eeeeee;
  margin: 10px 20px;
}

.nav_link {
  border: none;
  user-select: none;
  display: flex;
  display: inline-flex;

  width: 210px;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding: 8px 15px;
  cursor: pointer;
  color: rgb(0, 0, 0);
  text-decoration: none;
  margin: 3px 0px;

  border-radius: 9px;

  &.active, &:hover {
    background-color: rgb(249, 247, 246);
  }

  .nav_icon {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;

    > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .nav_title {
    margin-left: 18px;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
  }
}
</style>
