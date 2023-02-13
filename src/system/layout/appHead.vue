<!--
 * 顶部布局
 *
 * @Author: 大官人
 * @Date: 2023/2/11
 * @LastEditors: 大官人
 * @LastEditTime: 1991-02-09 00:00:00
 * @Description:
-->

<template>
  <div class="app_top">
    <div class="app_head">
      <div class="app_name">
        <div class="logo"><img :src="require('@/assets/logo.svg')" alt=""></div>
        <div class="title">Blockchain <span>.com</span></div>
      </div>
      <div class="head_center">
        <div class="page_search">
          <input class="" placeholder="Search Blockchain, Transactions, Addresses and Blocks" type="text" v-model="hashModel" />
          <button @click="handleSearch"><img :src="require('@/assets/icon-search.svg')" alt="" class=""></button>
        </div>
        <button class="btn_theme"><img :src="require('@/assets/icon-sun.svg')" alt="" class=""></button>
      </div>
      <button class="btn_sign" @click="todo">Sign In</button>
    </div>
    <div v-if="10" class="app_exhibit">
      <div class="exhibit_ul">
        <div class="exhibit_li">
          <a href="">
            <div class="sc-49e472fc-0 fJYBpI" style="display: flex;flex-direction: row"><span class="sc-49e472fc-1 bhUia-D">Optimism<!-- -->/USD</span><span class="sc-49e472fc-2 ginful">2.44</span>
              <div class="sc-49e472fc-3 jxNrYJ">
                <div class="sc-49e472fc-4 gxAWpN" src="/explorer/_next/static/media/triangle.b0bc9bd9.svg"></div>
                3.12 %
              </div>
            </div>
          </a>
        </div>
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
  name: "appHead",

  components: {},

  data() {
    return {
      hashModel: "",
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
    handleSearch() {
      this.$router.push({
        path: "/dashboard/" + this.hashModel,
      })
    },
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
</style>
