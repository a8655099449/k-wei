---
title: 如何在vscode 中自定义代码块
date: 2020-11-23
tags:
 - vscode
 - 工具
categories: tool
---

# vscode 中自定义代码块

1. 点击界面左下角图标，选择 `用户代码片段`
2. 输入你想定义代码的文件后缀名
3. 在打开的 json 格式中输入以下代码

```json
"tip": {
   "prefix": "tip",  // 触发词
   "body": [  // 补全内容
      ":::tip",
      "$1",  // 光标停留位置
      ":::"
   ],
   "description": "vuepresss 的tip快"  // 注释
}
```

4. 在md文件中可能无法触发代码块，这时我们要去设置文件中增加以下配置
```json
"[markdown]": {
  "editor.quickSuggestions": true
},
```