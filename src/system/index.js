
function welcome(){
  // console.log("")
}


/**
 * @desc
 * @param Vue { Vue } Vue实例 此处形参应该用其他字符如vm代替，实际发现若用vm代替，webstorm无法通过点击方式找到定义，为了方便编码，故而
 * @param options 初始化配置
 **/
const install = (Vue, options) =>{

  welcome();

  /** 全局Loading */
  Vue.use(LoadingManager)

}

export default {
  install
}
