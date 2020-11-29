---
title: vscode 的自定义代码片段
date: 2020-11-19
tags:
 - 工具
 - vscode
categories: tool
---

# vscode 的自定义代码片段

## mackdown

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
