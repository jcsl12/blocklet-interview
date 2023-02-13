/**
 * 此处路由试一下功能使用实例，不应出现在生产环境
 **/
const EmptyRouterView = {template: "<div><router-view</router-view></div>"};// 需要带运行时版本的vue

const DemoRoutes = [
  {
    path: "/demo",
    // component: EmptyRouterView,
    component: () => import("@/system/layout/basicLayout"),
    name: "demo",
    hidden: false,
    meta: {
      title: "DEMO",
      icon: "iconfont icon-insurance-fill"
    },
  }
]

export default DemoRoutes;
