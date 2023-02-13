# 开始开发

```text
1. 当前项是基于已有项目初始化而未使用blocklet脚手架。
2. 未使用到blocklet sever
3. 路由主要有
-- /home 首页，只有一个按钮和搜索框
-- /dashboard 邮件里提到的样例地址
4. 当前已打包生成放到 /outputs/dist.zip
5. 实现主要是页面，逻辑没多少
6. 平台功能接口还没理解透，当前block接口只使用了一个，字段也就是用了几个。
```
### 调试启动地址
http://xxx:10086/



```

### 安装依赖

`npm i` | `cnpm i`

### 运行

开发环境 `npm run run:dev`  
测试环境 `npm run run:stage`  
生产环境 `npm run run:prod`

### 构建

*生成dist目录*

开发环境 `npm run build:dev`  
测试环境 `npm run build:stage`    
生产环境 `npm run build:prod`

### 打包

*生成outpus/dist.zip*

开发环境 `npm run zip:dev`  
测试环境 `npm run zip:stage`  
生产环境 `npm run zip:prod`  

### 环境

> dev 开发环境

> stage 测试环境

> prod 生产环境

