## BOSS管理端（面向内部用户）

### 使用技术和工具

    node、react、webpack、bootstrap
    
### 如何让应用跑起来

    1. 确保成功安装node
    2. 在应用根目录下运行npm run build可安装环境和完成构建
    3. 在应用根目录下npm run server可启动服务器
    4. 访问<http://localhost:6001/>即可
    
### 如果开发

    在应用根目录下执行npm run watch，去statics/src下编辑源码就ok了（配合liverelaod可实时刷新页面）

### 目录结构介绍

* app 服务端代码
* statics 前端代码
    * src
        * components 在react中，一切皆组件，整个应用都看成一个组件，本目录放了本项目下所有的组件
            * App 表示整个应用
                * style.scss 整个应用通用的一些样式可以放在这里
            * Key 对应key备案管理页面
            * KeyUpdate 对应key的修改页面
        * models 与服务端打交道，比较轻
        * app.js 应用的入口模块
        * app.html 应用的入口页面 
        * routes.js 应用的路由配置
    * dist 构建完毕后，发布的文件放入此目录

### 如何新增一个菜单
    如：新增key权限管理页面
    1. 在components目录下新建一个组件 KeyPrivilege
    2. 在routes里配置路由 {name: 'key封停信息', path: 'key-privilege', component: KeyPrivilege}
 
### 组件API
所有组件均用大驼峰命名

#### react-bootstrap
    
    用法见http://react-bootstrap.github.io/

#### Select
props:
    
* optionsList [Array]，如[{text:'a',value:'1'},{text:'b',value:'2'}]
* value 可选 [any] 初始值 与optionsList的value类型保持一致即可，如'1'，默认空
* onChange 可选 [function] value改变时执行的回调，默认空
    
#### Table
    Table组件基于facebook的fixed-data-table组件进行了封装
    详细的api可参考http://facebook.github.io/fixed-data-table/
    在其基础上添加了两个功能，分页、自动适应容器的宽高，
    
props:

* total 可选 [number] 总记录数
* page 可选 [number] 当前页码
* pageSize 可选 [number] 每页记录数
* toPage 可选 [function] 当用户点击页码发生页码跳转行为时，执行的回调，如 function toPage(page){}
* width 可选 [number] 如果没有传参width，会保持与容器元素的宽度一致
* height 可选 [number] 如果没有传参height，会保持与容易元素的高度一致

#### Toastr
    此组件在应用内为单例模式,已经挂在window上
    
methods:

* success
* warning
* error
* info
这几个方法表示发出不同类型的通知，参数一样，使用方式如 

                  toast.warning(
                    '服务器异常',//内容
                    '操作失败',//标题
                    {
                        timeOut: 4000,//4s后关闭
                        extendedTimeOut: 1000,//通知框淡出，1s完全消失
                        closeButton: true//显示关闭按钮
                    }
                  )
    
#### DateTimeField
        用法见 http://web.npm.alibaba-inc.com/package/@alife/react-bootstrap-datetimepicker