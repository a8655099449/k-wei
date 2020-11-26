---
title: 我常用的VScode代码快
date: 2020-11-23
isTimeLine: true
tags:
- vscode
- 工具
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
