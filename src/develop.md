# 系统使用的缓存
*所有系统使用到的缓存要标记*

## localStorage
+ `example_key` `example_type` `示例名` 
```text
这里写这个存储的介绍
`example_key` 是键，用反引号
`example_type` 去除数据后期望转化的数据类型
`示例名` 是存储的名字，不加也行
```

## sessionStorage
+ `tlh_routes` `Array` `用户路由`
```text
从用户信息接口权限里解析出的路由，进行转化后的数组
```

+ `tlh_perms` `Array` `用户权限`
```text
从用户信息接口权限里解析出的功能，进行转化后的数组
```
+ `tlh_hasData` `Boolean` `是否存在数据`
```text
每次路由跳转都要判断是否存在路由权限等权限认证数据， 
一般判断规则是遍历数组，改为用变量控制提升性能
```

+ `tlh_userInfo` `Object` `用户个人数据`
```text
存储用户个人信息
```

+ `tlh_token` `String` `token`
```text
token
```

## Cookie

## process环境变量
*process'env的变量 本地 | 测试 | 生产环境*
+ `BASE_URL` 构建后的文件加载路径
```text
如果项目部署在根目录可以随意使用
如果项目部署在xxx下 则代码文件需要相对于xxx访问
如
xxx/app.js
xxx/lib/test.js
xxx/img/logo.png
BASE_URl控制的是webpack项目文件加载路径
``` 

+ `BASE_API` 接口请求地址
请求地址

## 系统全局JS变量&函数
*为了防止冲突，需要把所有自定义的全局变量写在这里，方便其他人参考*
+ `function cloneDeep(){}`
深度克隆对象方法，比较常遂挂载到windows上

## VUE全局指令
*使用率高的可以挂载到全局*

## VUE全局自定义组件
*多个地方使用的组件可以挂载到全局*

## VUE全局过滤器
*使用率高的可以挂载到全局*
+ `fil_formatDate`
全局格式化日期的过滤器 
{{ dataVal | fil_formatDate("yyyy-MM-dd", "--")}}














# END
