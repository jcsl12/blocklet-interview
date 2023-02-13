export default {
  /**
   * 是否使用命名空间
   * 若使用则访问数据的方式为 $store.state.demo.test ,否则为 $store.state.test(但是可能出现冲突数据)
   */
  namespaced: true,

  state: {
    test: "",
  },

  mutations: {
    SET_DATA: (state, data) => {
      state.test = data
    },
  },

  actions: {
    setDataAsync({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        resolve("")
      }).then(e => {
        commit("SET_DATA", e)
      }).catch(err => err)
    },

    /**
     * @param context
     * {
     *   commit,
     *   state,
     *   dispatch
     * }
     * @param data 传入的数据
     *
     * 调用方式$store.dispatch("demo/setData", "sth")
     **/
    setData(context, data){
      //1
      context.state = data;

      //2
      //context.commit("SET_DATA", data)
    }
  }
}
