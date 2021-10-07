(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{624:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("vue3从发布到现在")]),t._v(" "),a("h2",{attrs:{id:"vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[t._v("#")]),t._v(" vite")]),t._v(" "),a("p",[t._v("vite是vue3的一个新的特点，可以看出，尤大对vite十分的关注，微博最近的更新都是vite。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite中文文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("vite的法语音译过来就是 "),a("strong",[t._v("快")]),t._v(" ，我自己上手体验了一下，确实是非常快，到底有多快呢？用过 "),a("code",[t._v("vue-cli")]),t._v("的同学肯定清楚，我们要使用vue-cli构建一个项目到跑起来，怎么说也得有个两三分钟。网速不好的同学半个小时也有可能。")]),t._v(" "),a("p",[t._v("但vite大概只要不到一分钟，尤其是启动编译环境，几乎就是输入指令的瞬间就已经可以启动了。")]),t._v(" "),a("p",[t._v("而且热更新也很丝滑，之所以这么快是因为之前的编译，原理上还是使用了webpack的打包编译，而vite使用的是原生js模块载入功能，跳过了打包步骤，自然是很快。")]),t._v(" "),a("p",[t._v("当然我还是没有深入的使用，从写这篇文章时，vue3和vite都属于新技术，新技术也代表着未知和风险，根据目前一些人的使用体验，大部分是对其赞誉有加，但实际用到商业项目中还是不够保险， 毕竟之前的 "),a("strong",[t._v("vue2.x+webpack")]),t._v("的方案已经非常成熟了。")]),t._v(" "),a("p",[t._v("我对vue3和vite的认识也仅仅只是读了一些文档，启动了一个demo，以及之前对于vue2的一些经验而已，后面我会详细的记录vue3一些使用体验。")]),t._v(" "),a("p",[t._v("现在的目标是想使用vue3来写一个后台的框架demo，刚好element也更新了vue3版本的 "),a("a",{attrs:{href:"https://github.com/element-plus/element-plus",target:"_blank",rel:"noopener noreferrer"}},[t._v("element-plus"),a("OutboundLink")],1),t._v(" ，无论写成与否，学习总是不会有错的。")]),t._v(" "),a("h3",{attrs:{id:"_1-使用vite构建一个项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用vite构建一个项目"}},[t._v("#")]),t._v(" 1.使用vite构建一个项目")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init @vitejs/app\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./yourapp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"组合式api-composition-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合式api-composition-api"}},[t._v("#")]),t._v(" 组合式Api (Composition Api)")]),t._v(" "),a("p",[t._v("组合式Api是vue3中的一大特性，如果你使用过react中的hooks，你就会对此感到非常熟悉")]),t._v(" "),a("h3",{attrs:{id:"为什么要使用组合式api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用组合式api"}},[t._v("#")]),t._v(" 为什么要使用组合式Api")]),t._v(" "),a("p",[t._v("我们在vue2中使用的是 options Api 也就是以下这种语法,在一个对象中有着一个一个的属性")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Test4"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("当一个组件代码量非常多的时候，这种语法维护起来就有些困难，你要增加一个功能，基本都会在"),a("code",[t._v("data")]),t._v("里面先注册一个属性，在"),a("code",[t._v("methods")]),t._v("里面再注册一个方法等等，就像以下的这个图一样，不同的功能混合在一起变得非常难以理解")]),t._v(" "),a("p",[t._v("而CompositionApi则是专门解决这个问题的，他可以将相关的代码组织到一块，而且还可以抽离出来，这样代码就变的非常清晰且易于维护，而且我们可以单独的用"),a("code",[t._v("js")]),t._v(" 文件，将一个模块的功能单独拆分出去")]),t._v(" "),a("p",[t._v("比如以下，是一个非常简单的TODO-LIST的实例")]),t._v(" "),a("h2",{attrs:{id:"compositional-api-的一些内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compositional-api-的一些内置函数"}},[t._v("#")]),t._v(" compositional api 的一些内置函数")]),t._v(" "),a("h3",{attrs:{id:"数据响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据响应"}},[t._v("#")]),t._v(" 数据响应")]),t._v(" "),a("p",[t._v("在vue中我们之前如果要一个数据达到可以响应的效果，就把数据声明到 "),a("code",[t._v("data")]),t._v(" 或者 "),a("code",[t._v("props")]),t._v(",在组合式api中也有声明响应式数据的办法")]),t._v(" "),a("ol",[a("li",[t._v("ref")])]),t._v(" "),a("p",[t._v("ref 可以针对一些基础类型数据达到响应式数据")]),t._v(" "),a("h3",{attrs:{id:"组合式组件的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合式组件的生命周期"}},[t._v("#")]),t._v(" 组合式组件的生命周期")]),t._v(" "),a("p",[t._v("在vue3中普通组件的生命")])])}),[],!1,null,null,null);s.default=n.exports}}]);