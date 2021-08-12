(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{619:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"nuxt-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-是什么"}},[t._v("#")]),t._v(" nuxt 是什么")]),t._v(" "),a("p",[t._v("nuxt 是一款 vue 的服务端 ssr 渲染框架， "),a("a",{attrs:{href:"https://www.nuxtjs.cn/guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("nuxt 官网文档地址 - 关于 nuxtjs"),a("OutboundLink")],1),t._v(" ，我们可以把它看成一款像 "),a("code",[t._v("vue-cli")]),t._v(" 或者 "),a("code",[t._v("vite")]),t._v(" 一样的脚手架工具就行，而它的特点就是在服务端渲染这方面做得比较好。")]),t._v(" "),a("h3",{attrs:{id:"为什么要使用服务端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用服务端渲染"}},[t._v("#")]),t._v(" 为什么要使用服务端渲染？")]),t._v(" "),a("p",[t._v("我们如果使用 vue-cli 开发打包出来的代码，一般就是"),a("code",[t._v("spa(单页模式)")]),t._v(" ，这个问题在 vue 官网中也有提到"),a("a",{attrs:{href:"https://ssr.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js 服务器端渲染指南"),a("OutboundLink")],1),t._v("，spa 模式虽然性能和用户体验很好，但是对于 seo 支持很不好，以下是一整个 spa 网站的代码 html 结构造函数，在 js 没有被加载前，这个网站内容就是空的")]),t._v(" "),a("p",[a("img",{attrs:{src:"//image.woai996.com/picGo/20210327202844.png",alt:"alt"}})]),t._v(" "),a("p",[t._v("这一点对于需要在搜索引擎上有很大曝光的网站是一个很致命的缺陷，使用服务端渲染有以下的好处")]),t._v(" "),a("ol",[a("li",[t._v("更好的 seo 支持")]),t._v(" "),a("li",[t._v("更快首屏时间加载")])]),t._v(" "),a("p",[t._v("也有一些缺陷")]),t._v(" "),a("ol",[a("li",[t._v("少了一些钩子")]),t._v(" "),a("li",[t._v("需要等到 nodejs 的支持")]),t._v(" "),a("li",[t._v("更大的服务器压力")])]),t._v(" "),a("h2",{attrs:{id:"nuxt-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-安装"}},[t._v("#")]),t._v(" nuxt 安装")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create nuxt-app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("项目名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"nuxt-的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-的生命周期"}},[t._v("#")]),t._v(" nuxt 的生命周期")]),t._v(" "),a("p",[t._v("调用顺序根据以下表格从上到下执行")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),a("th",[t._v("调用环境")]),t._v(" "),a("th",[t._v("其他说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("nuxtServerInit")])]),t._v(" "),a("td",[t._v("服")]),t._v(" "),a("td",[t._v("定义在 "),a("code",[t._v("store\\index.js")]),t._v(" 内，需要导出一个"),a("code",[t._v("actions")]),t._v("对象，其中包含了这个函数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("middleware")])]),t._v(" "),a("td",[t._v("服")]),t._v(" "),a("td",[t._v("可以定义在 "),a("code",[t._v("nuxt.config.js / layout / pages")]),t._v(" 内")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("validate")])]),t._v(" "),a("td",[t._v("服")]),t._v(" "),a("td",[t._v("定义在"),a("code",[t._v("pages")]),t._v("内 ，用来验证参数非常合适，当 "),a("code",[t._v("return false")]),t._v("时会跳转至 "),a("code",[t._v("404")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("asyncData")])]),t._v(" "),a("td",[t._v("服")]),t._v(" "),a("td",[t._v("通常用于获取服务端数据， 可以return一个对象出来，会和data中的对象合并")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("beforeCreate")])]),t._v(" "),a("td",[t._v("服+客")]),t._v(" "),a("td",[t._v("就和vue中通常的生命周期一样")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("created")])]),t._v(" "),a("td",[t._v("服+客")]),t._v(" "),a("td",[t._v("就和vue中通常的生命周期一样")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("fetch")])]),t._v(" "),a("td",[t._v("服")]),t._v(" "),a("td",[t._v("通常用于将数据推送给vuex")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("...vue其他钩子")])]),t._v(" "),a("td",[t._v("客")]),t._v(" "),a("td",[t._v("就和vue中通常的生命周期一样")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[t._v("在服务器能访问的钩子中，无法访问客户端的对象，比如"),a("code",[t._v("window")])])]),t._v(" "),a("h2",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),a("h3",{attrs:{id:"一级路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一级路由"}},[t._v("#")]),t._v(" 一级路由")]),t._v(" "),a("p",[t._v("nuxt的路由是采用"),a("strong",[t._v("约定式")]),t._v("的，"),a("strong",[t._v("一级路由在"),a("code",[t._v("pages")]),t._v("目录下创建的"),a("code",[t._v(".vue")]),t._v("文件都会被自动注册页面，跳转的名字和文件名一样")])]),t._v(" "),a("p",[t._v("nuxt中有个 "),a("code",[t._v("<nuxt />")]),t._v(" 的标签，就相当于 "),a("code",[t._v("<router-view />")]),t._v("的功能，用于承载页面的内容")]),t._v(" "),a("p",[t._v("还有一个 "),a("code",[t._v("<nuxt-link />")]),t._v(" 相当于vue中的 "),a("code",[t._v("<router-link />")]),t._v("\n组件")]),t._v(" "),a("h3",{attrs:{id:"二级路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二级路由"}},[t._v("#")]),t._v(" 二级路由")]),t._v(" "),a("p",[t._v("2级路由需要创建和1级路由名称相同的"),a("strong",[t._v("文件夹")]),t._v("，就像下图")]),t._v(" "),a("p",[a("img",{attrs:{src:"//image.woai996.com/picGo/20210328220544.png",alt:"alt"}})]),t._v(" "),a("p",[t._v("服务一级路由就是 "),a("code",[t._v("/index")]),t._v(" 访问二级路由就是"),a("code",[t._v("index-new")]),t._v("，三级四级也是同理")]),t._v(" "),a("h3",{attrs:{id:"动态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[t._v("#")]),t._v(" 动态路由")]),t._v(" "),a("p",[t._v("文件夹内以下划线开头的"),a("code",[t._v("_")]),t._v("文件都会被当成动态理由解析")]),t._v(" "),a("h3",{attrs:{id:"扩展路由-通过手动的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展路由-通过手动的配置"}},[t._v("#")]),t._v(" 扩展路由 (通过手动的配置)")]),t._v(" "),a("p",[t._v("如果上面的约定式路由还是无法满足我们的需求，next中也可以通过配置来生成我们的路由 ，"),a("a",{attrs:{href:"https://www.nuxtjs.cn/api/configuration-router#extendroutes",target:"_blank",rel:"noopener noreferrer"}},[t._v("具体的文档地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("但我根据文档配置没有生效，出bug了这个还需于研究")]),t._v(" "),a("h3",{attrs:{id:"路由拦截"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由拦截"}},[t._v("#")]),t._v(" 路由拦截")]),t._v(" "),a("p",[t._v("用"),a("code",[t._v("validate")]),t._v("这个钩子就行，"),a("code",[t._v("return false")]),t._v(" 的时候会条错误页面，可配置，创建"),a("code",[t._v("layouts/error.vue")]),t._v("的文件即可,这个组件可以接受props "),a("code",[t._v("error")])]),t._v(" "),a("h3",{attrs:{id:"路由守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由守卫"}},[t._v("#")]),t._v(" 路由守卫")]),t._v(" "),a("p",[a("strong",[t._v("全局守卫：前置")])]),t._v(" "),a("p",[t._v("在config或者layout中定义中间件，就可以实现路由的全局守卫，在守卫上我们可以拿到vuex的或者url参数等信息")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/profile"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"数据交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据交互"}},[t._v("#")]),t._v(" 数据交互")]),t._v(" "),a("p",[t._v("首先需要安装 "),a("code",[t._v("@nuxtjs/axios 和 @nuxtjs/proxy")]),t._v(" 这两个依赖")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @nuxtjs/axios  @nuxtjs/proxy --save\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在 nuxt.config.js 进行配置")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nuxtjs/axios'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"同域请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同域请求"}},[t._v("#")]),t._v(" 同域请求")]),t._v(" "),a("p",[t._v("通常用于mock请求，简历这样一个文件"),a("code",[t._v("static\\data\\user.json")]),t._v(" ，用于数据模拟")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// static\\data\\user.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("通常都在"),a("code",[t._v("asyncData")]),t._v("这个钩子进行数据请求")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$axios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/data/user.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);