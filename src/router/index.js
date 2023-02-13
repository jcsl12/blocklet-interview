/**
 * 一个路由配置项示例
     {
        path: "/[path]",
        component: basicLayout,
        name: "xxx",
        redirect: "/debug/test1",
        hidden: false,
        meta: {
            title: "菜单标题",
            icon: "tlh-icon tlh-icon-edit",
            alwaysShow: true,
        },
        children: [
            {
                path: "/[path]/[child_path]",
                ...其他同上
             }
        ]
     }
 * * path: 请求路径
 *   1. 一般使用绝对路径以正斜杠. '/' 开头 2. 自己路由一般需要拼接父级路由. 3. 路由命名要与页面目录相对应 如用户页面为 views/sys/user/index.vue 则其路由地址为 /sys/user
 * * component：路由对应的组件
 *   1. 可以使用组件变量 var SomeComponent = require("xxx.vue")  此为静态引入
 *   2. 也可以动态引入 其值为函数 () => import("xxx.vue") 此为动态引入，
 *      构建后会生成一个单独的文件，当需要的时候才会请求加载
 *      如需为构建文件起名可使用 component: () => import( / * webpackChunkName: "sys-user" * / "xxx.vue") webpackChunkName两边的注释 / * 之间空格去掉
 *   3. 可以动态生成一个页面，如有一个 /sys/user模块，其下有 list detail update 三个页面，父级同为/sys/user 此时/sys/user 一般作为一个路由容器去加载三个子路由
 *      可以选择建一个文件里面加 <router-view></router-view> 去实现，也可以使用 component: {render :h => h("router-view")} h 是 vue createElement 方法
 * * name 路由名称，要求不重复，按模块划分
 * * redirect
 *
 */
import Vue from "vue";

import Router from "vue-router";

import DemoRoutes from "@/router/modules/demo.route";

import basicLayout from "@/system/layout/basicLayout";

Vue.use(Router);

/**
 * 生成路由函数 接口
 *
 * @param routes
 **/
const createRouter = (routes) => new Router({
    mode: "hash",
    // mode: 'history', // require service support
    // scrollBehavior: () => ({ y: 0 }),
    routes: routes
});

/**
 * 重置路由 接口 一般用于切换用户的时候
 *
 * @param routes { Array | undefined | null } 要渲染的路由 参数缺省则渲染内置路由
 **/
function resetRouter(routes) {
    let data = routes || [
        ...BuiltInRoutes,
        // ...DemoRoutes,
        // NotFoundMatherRoute
    ]
    // 重新生成路由的关键方法
    const newRouter = createRouter(data)
    routerInstance.matcher = newRouter.matcher;
    // 加不加不效果，但是会影响 $router.options.routes里面的是数据
    routerInstance.options.routes = data
}
var ConstantRoutes = [];

/**
 * 动态路由
 *
 * 一般指的是业务相关的路由 需要认证&权限才能访问
 **/
const DynamicRoutes = (function () {
    const modulesFiles = require.context('./modules', true, /\.route\.js$/)
    let dynamicModules = [];
    modulesFiles.keys().reduce((modules, modulePath) => {
        const moduleName = modulePath.replace(/(.*\/)*([^.]+).*/ig, '$2')
        const value = modulesFiles(modulePath)
        let p = value.default && value.default.length ? value.default[0].path : null;
        if(p && p.startsWith("/sys")) {
            ConstantRoutes = ConstantRoutes.concat(value.default)
        }
        dynamicModules = dynamicModules.concat(value.default)
    }, {})
    return dynamicModules;
})();


/**
 * 404路由 由于路由特殊性，生成路由的时候需要放在路由最后匹配
 *
 */
const NotFoundMatherRoute = {path: '*', redirect: '/404', hidden: true};

/**
 * 跟路由
 **/
const RootRoutes = [
    {
        path: "/",
        component: () => import("@/system/layout/basicLayout"),
        redirect: "/dashboard",
        name: "ROOT",
        hidden: false,
        meta: {
            title: "欢迎使用",
            icon: "iconfont icon-Moneymanagement-fill"
        },
        children: [
            {
                path: "/home",
                component: () => import("@/views/Home"),
                name: "home",
                meta: {
                    title: "首页"
                }
            },
            {
                path: "/dashboard",
                component: () => import("@/views/dashboard"),
                name: "dashboard",
                redirect: "/home",
                meta: {
                    title: "欢迎使用"
                }
            },
            {
                path: "/dashboard/:hash",
                component: () => import("@/views/dashboard"),
                name: "block",
                meta: {
                    title: "欢迎使用"
                }
            },
            {
                path: "/second",
                component: () => import("@/views/second"),
                name: "second",
                meta: {
                    title: "second"
                }
            },
        ]
    },
];

/**
 * 内置路由
 *
 * 主要存放一些功能性路由 一般无需认证和权限即可访问 如 404 登录页 锁屏 中转等页面
 */
const BuiltInRoutes = [
    /**
     *  用于重定向的路由
     */
    {
        path: "/redirect",
        component: null,
        name: "redirect",
        hidden: true,
        meta: {
            title: "重定向",
        },
        children: []
    },

    {
        path: "/login",
        component: () => import('@/system/views/login'),
        name: "login",
        hidden: true,
        meta: {
            title: "登录"
        },
    },

    {
        path: "/lock",
        component: () => import("@/system/views/lock"),
        name: "lock",
        hidden: true,
        meta: {
            title: "锁屏"
        }
    },

    ...RootRoutes,

    ...DemoRoutes,

    ...ConstantRoutes,

    // 最后才放404
    {
        path: "/404",
        name: "404",
        hidden: true,
        meta: {
            title: "404",
        },
        component: () => import("@/system/views/exception/404")
    },
    // NotFoundRoute
]



/**
 * 应用加载初始渲染的路由
 **/
var routesForInit = [
    ...BuiltInRoutes,
    // ...DynamicRoutes
]


/**
 * 渲染菜单的路由
 *
 * 左侧菜单显示条目会使用 routesForMenu 拼接 uroutes 生成的路由一起去渲染菜单
 * @type {*[]}
 */
var routesForMenu = [
    ...BuiltInRoutes,
    // ...DynamicRoutes
];

/**
 * 要导出的路由实例
 * 实例在整个应用生命周期只创建一次，注销登录只会更改路由，而不会重新创建，即引用长期有效
 **/
const routerInstance = createRouter(routesForInit);

export default routerInstance;

export {
    RootRoutes,
    BuiltInRoutes,
    DemoRoutes,
    DynamicRoutes,
    NotFoundMatherRoute,
    resetRouter,
    routesForMenu
}


