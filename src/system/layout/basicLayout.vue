<!--
 * 基础布局
 *
 * @Author: 大官人
 * @Date: 2023/2/12
 * @LastEditors: 大官人
 * @LastEditTime: 1991-02-09 00:00:00
 * @Description:
-->
<template>
  <div class="basic_layout"  >
    <div class="lay_left"  >
      <app-menu />
    </div>
    <div class="lay_right"  >
      <div class="lay_top">
        <app-head/>
      </div>
      <div class="lay_main">
        <app-main/>
      </div>
    </div>
    <div class="lay_mobile">
      <app-mobile-nav />
    </div>
  </div>
</template>
<script>

/**
 * 主布局方式
 **/
import appLogo from "@/system/layout/appLogo";
import appHead from "@/system/layout/appHead";
import appMain from "@/system/layout/appMain";
import appMenu from "@/system/layout/appMenu";
import appAdd from "@/system/layout/appAdd";
import appMobileNav from "@/system/layout/appMobileNav";

import {mapGetters} from "vuex";

export default {
  name: "basicLayout",

  computed: {
    ...mapGetters(['menuCollapsed']),
    layoutLeftClazz() {
      return {
        "collapsed": this.menuCollapsed
      };
    },
    layoutRightClazz() {
      return {
        "collapsed": this.menuCollapsed
      };
    }
  },

  components: {
    appLogo,
    appHead,
    appMain,
    appMenu,
    appAdd,
    appMobileNav
  },

  beforeDestroy(){
  },

  mounted(){
  },

  methods: {

  }
}
</script>

<style scoped>
.basic_layout{
  min-height: 100vh;
}
</style>
