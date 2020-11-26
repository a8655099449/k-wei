/*
 * @Author: your name
 * @Date: 2020-11-26 17:01:50
 * @LastEditTime: 2020-11-26 17:23:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-node\docs\.vuepress\config\hred.js
 */



const head = [
  ["link", { rel: "icon", href: "/icons/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
  [
    "script",
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js",
    },
  ],
  [
    "script",
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js",
    },
  ],
  [
    "link",
    {
      rel: "stylesheet",
      type: "text/css",
      href:
        "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css",
    },
  ],
]

module.exports = head