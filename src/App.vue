<template>
  <div id="app">
    <keep-alive :include="[]">
      <router-view :key="routeKey"/>
    </keep-alive>
  </div>
</template>

<script>

/**
 *
 **/

export default {
  name: 'App',

  computed: {
    routeKey() {
      return "static";
    }
  },

  mounted() {

  },

  methods: {}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f5f5f5;
  background-color: #f0f2f5;
  //background-image: url(~@/system/assets/app_bg7.jpg);
  background-size: 250px;
  background-repeat: repeat;
  background-attachment: fixed;
}

</style>

