(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{613:function(t,e,r){"use strict";r.r(e);var a=r(5),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("code",[t._v("antd-pro")]),t._v(" 是阿里的一个著名的后台框架库，内置了许多的后台的常用功能 如果：国际化、数据表格、权限认证，如果使用react做后台，这也许是大多数开发者的第一选。这篇文章将记录使用的一些经验")]),t._v(" "),r("p",[t._v("我目前的工作很大一部分是写后台，这个框架对我帮助很多，如果仔细研究这个框架也可以发现很多值得学习的设计思想。")]),t._v(" "),r("p",[t._v("在我认为这个框架具有以下的优点")]),t._v(" "),r("ol",[r("li",[t._v("大厂出品在于"),r("a",{attrs:{href:"https://ant.design/docs/react/introduce-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("antd"),r("OutboundLink")],1),t._v(" UI框架库，质量值得肯定")]),t._v(" "),r("li",[t._v("完美契合ts")]),t._v(" "),r("li",[t._v("基于umi框架上手即用")]),t._v(" "),r("li",[t._v("国人开发，文档清晰易懂，"),r("a",{attrs:{href:"https://pro.ant.design/docs/getting-started-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档地址"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("这个框架目前还保持着持续的生命力"),r("a",{attrs:{href:"https://github.com/ant-design/ant-design-pro/issues/8656",target:"_blank",rel:"noopener noreferrer"}},[t._v("最新的"),r("code",[t._v("v5")]),t._v("版本"),r("OutboundLink")],1),t._v("，使用的是react最潮流的技术")]),t._v(" "),r("li",[t._v("在最新的版本中还集合了 "),r("code",[t._v("OpenAPI")]),t._v(" , "),r("code",[t._v("模板组件")]),t._v("等黑科技功能（虽然我都没用过）")])]),t._v(" "),r("p",[t._v("本文文档使用的antd版本")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("库名")]),t._v(" "),r("th",[t._v("版本")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("antd")]),t._v(" "),r("td",[t._v("4.14.0")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("umi")]),t._v(" "),r("td",[t._v("3.5.0")])])])]),t._v(" "),r("h2",{attrs:{id:"创建项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),r("p",[t._v("antd-pro 是基于 "),r("a",{attrs:{href:"https://umijs.org/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("umi"),r("OutboundLink")],1),t._v(" 的脚手架来搭建的，在使用react创建项目就可以看到antd-pro的选项。")]),t._v(" "),r("blockquote",[r("p",[t._v("这其实也是"),r("code",[t._v("umi")]),t._v("构建项目的命令 ， 如果你要使用"),r("code",[t._v("antd-pro")]),t._v(" 这个后台框架。最好提前了解一下"),r("code",[t._v("umi")]),t._v("脚手架 , 就我的使用体验来说，umi完全不弱其他脚手架")])]),t._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create umi  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("项目名"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[t._v("接下来出现的是一个问答环节，我们选择 "),r("code",[t._v("ant-design-pro")]),t._v(" 然后按照喜好来选择使用"),r("code",[t._v("ts")]),t._v("还是"),r("code",[t._v("js")]),t._v("就可以了，值得一提的是，这个框架完美的契合了 "),r("code",[t._v("TS")]),t._v("，如果使用过ts的同学不妨一试。")]),t._v(" "),r("p",[t._v("最后一个选项是 "),r("code",[t._v("simple")]),t._v(" 和 "),r("code",[t._v("complete")]),t._v(" ,  "),r("code",[t._v("complete")]),t._v("  创建的项目附带了"),r("a",{attrs:{href:"https://preview.pro.ant.design/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网预览"),r("OutboundLink")],1),t._v("的所有demo ， 如果是学习可以同时创建两个，自己写的用"),r("code",[t._v("simple")]),t._v(" ,以 "),r("code",[t._v("complete")]),t._v(" 作为参照。demo中的代码风格也绝对很多值得初中级前端学习。")]),t._v(" "),r("h2",{attrs:{id:"目录结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),r("p",[t._v("在官网的文档中有对于"),r("a",{attrs:{href:"https://pro.ant.design/zh-CN/docs/folder",target:"_blank",rel:"noopener noreferrer"}},[t._v("目录结构"),r("OutboundLink")],1),t._v("的说明 ,但在我写这篇文档时，实际结构已经有了些出入。可能是v5版本更新后文档更新不及时的问题")]),t._v(" "),r("p",[t._v("我们以官网的为准就行了，至于不同的地方其实出入并不大")]),t._v(" "),r("h2",{attrs:{id:"国际化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#国际化"}},[t._v("#")]),t._v(" 国际化")]),t._v(" "),r("p",[t._v("antd-pro中默认就打开了国际化，如果我们不需要的话，最好在创建项目之初就清除了。不然项目写多了会有一堆麻烦的报错")]),t._v(" "),r("p",[t._v("框架中提供了自带的指令来删除初始项目的国际化内容")]),t._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" i18n-remove\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("blockquote",[r("p",[t._v("如果自己已经写了很多代码，使用这个指令去删除国际化就不太合适了，这时候最好自己去手动删除")])]),t._v(" "),r("h2",{attrs:{id:"prolayout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prolayout"}},[t._v("#")]),t._v(" ProLayout")]),t._v(" "),r("p",[t._v("我们输入"),r("code",[t._v("yarn start")]),t._v(" 登录完成后，就可以看到初始的框架了，而框架最外层的组件"),r("a",{attrs:{href:"https://procomponents.ant.design/components/layout",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProLayout"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("是最外面的一个组件，管理着侧边栏和header ，是非常重要的一个组件,")]),t._v(" "),r("p",[t._v("具体的api在文档中已经讲解的十分详细了。")]),t._v(" "),r("p",[t._v("配置的位置在 "),r("code",[t._v("src/app.tsx")]),t._v(" 导出的一个 layout对象 ，这个是v5版本比较大的一个改动， ProLayout 不再是一个具体的组件了")]),t._v(" "),r("h3",{attrs:{id:"侧边栏配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏配置"}},[t._v("#")]),t._v(" 侧边栏配置")]),t._v(" "),r("p",[t._v("默认的侧边栏配置 是根据 "),r("code",[t._v("config/routes.ts")]),t._v(" 配置的内容来执行")]),t._v(" "),r("p",[t._v("也支持从服务器请求类配置，只要满足它提供的接口需求可以")]),t._v(" "),r("p",[t._v("在"),r("a",{attrs:{href:"https://pro.ant.design/zh-CN/docs/advanced-menu",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文档"),r("OutboundLink")],1),t._v("内，讲解了菜单的高级用途，几乎可以满足日常开发的绝大多数场景了。")])])}),[],!1,null,null,null);e.default=n.exports}}]);