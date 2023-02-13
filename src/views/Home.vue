<!--
 * 组件名称
 *
 * @Author: 大官人
 * @Date: 2023/2/12
 * @LastEditors: 大官人
 * @LastEditTime: 1991-02-09 00:00:00
 * @Description:
-->

<template>
  <div class="pg_home">
    <input class="home_input" placeholder="Search Blockchain, Transactions, Addresses and Blocks" type="text" v-model="hashModel" />
<!--    <input v-model="hashModel" class="home_input" type="text" placeholder="请输入">-->
    <button class="btn_search" @click="handleSearch"></button>
  </div>
</template>

<style lang="scss">
.pg_home {
  height: 100%;
  padding: 10px;
}

.home_input {

  border: 0;
  outline: 0;
  padding: 10px;
  display: block;
  width: 100%;
}

.btn_search {
  display: block;
  outline: 0;
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 100px;
  background-color: #189ff0;
  border: 6px solid rgba(24, 159, 240, 0.58);
}
</style>

<script>
/**
 * 组件描述
 * @desc
 *
 **/

export default {
  name: "Home",

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
      if(!this.hashModel) {
        alert("请输入")
        return
      };
      this.$router.push({
        path: "/dashboard/" + this.hashModel // Date.now(),
      })
    }
  }
}

</script>

<style scoped>

</style>
