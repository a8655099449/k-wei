---
title: vscode的设置
date: 2021-01-07
tags:
 - 前端
categories: code
---

## 打开markdown的代码块提示

```json
"[markdown]": {
  "editor.quickSuggestions": true
},
```

## easy less 和 esay sass的设置

```json
{
 "easysass.formats": [

    {
      "format": "expanded",
      // format 的合法值
      //nested：嵌套缩进的 css 代码。
      //expanded：没有缩进的、扩展的css代码。
      //compact：简洁格式的 css 代码。
      //compressed：压缩后的 css 代码
      "extension": ".css" //设置编译输出的文件名
    },
    {
        "format": "compressed",
        "extension": ".min.css" //设置编译输出的文件名
    },
  ],
  "easysass.targetDir": "./css/", //提供 css 输出路径的设置（可以是绝对路径或者相对路径） 可以选填，如果不配置则默认是同路径之下


  "less.compile": {
    "out": "../css/app.css", //定义好输出的文件路径
    "autoprefixer": "> 5%, last 2 Chrome versions, not ie 6-9", // 暂时不知道有什么用
    "compress": true, // 是否删除多余空白字符  打开相当于压缩
    "sourceMap": false, // 是否创建文件目录树，true的话会自动生成一个 .css.map 文件
    "outExt": ".wxss", // 输出文件的后缀,默认为.css
  }
}

```


