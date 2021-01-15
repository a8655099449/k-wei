---
title: vscode 的自定义代码片段
date: 2020-11-19
tags:
  - 工具
  - vscode
categories: tool
---

# vscode 的自定义代码片段

### mackdown

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

### react

```json
"reactRender": {
  // "scope": "javascript,typescript,jsx",
  "prefix": "jsxCode",
  "body": [
    "import React from 'react'\n",
    "class ${1:$TM_FILENAME_BASE} extends React.Component {\n",
    "\trender(){\n",
    "\t\treturn(",
    "\t\t\t<div>\n",
    "\t\t\t</div>",
    "\t\t)",
    "\t}",
    "}\n\n",
    "export default ${1:$TM_FILENAME_BASE}\n",
  ],
  "description": "react的组件代码片段"
},
"className": {
		// "scope": "javascript,typescript",
		"prefix": "cls",
		"body": [
			"className={`${styles['${1:classname}']}`}",
		],
		"description": "快速添加class"
	},
"impStyle": {
  // "scope": "javascript,typescript",
  "prefix": "impstyles",
  "body": [
    "import styles from './${1:$TM_FILENAME_BASE}.less';",
  ],
  "description": "导入样式"
}
```

### vuepress-head

```json
"Print to console": {
  "prefix": "head",
  "body": [
    "---",
    "title: ${1:默认标题}",
    "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
    "tags:",
    " - 前端",
    "categories: code",
    "---",
  ],
  "description": "blog title"
},
"tip": {
  "prefix": "tip", 
  "body": [  
      ":::tip",
      "$1",  
      ":::"
  ],
  "description": "vuepresss 的tip快"  
},
"warning": {
  "prefix": "warning", 
  "body": [  
      ":::warning",
      "$1",  
      ":::"
  ],
  "description": "vuepresss 的warning"  
},
"detail": {
  "prefix": "detail", 
  "body": [  
      ":::detail",
      "$1",  
      ":::"
  ],
  "description": "vuepresss 的detail"  
}
```




### 在代码片段中的变量

```
TM_SELECTED_TEXT 当前选定的文本或空字符串
TM_CURRENT_LINE 当前行的内容
TM_CURRENT_WORD 光标下的单词的内容或空字符串
TM_LINE_INDEX 基于零索引的行号
TM_LINE_NUMBER 基于一索引的行号
TM_FILENAME 当前文档的文件名
TM_FILENAME_BASE 当前文档的文件名（不含后缀名)
TM_DIRECTORY 当前文档的目录
TM_FILEPATH 当前文档的完整文件路径
CLIPBOARD 剪切板里的内容

CURRENT_YEAR 当前年(四位数)
CURRENT_YEAR_SHORT 当前年(两位数)
CURRENT_MONTH 当前月
CURRENT_MONTH_NAME 本月的全名（’七月’）
CURRENT_MONTH_NAME_SHORT 月份的简称（’Jul’）
CURRENT_DATE 当前日
CURRENT_DAY_NAME 当天的名称（’星期一’）
CURRENT_DAY_NAME_SHORT 当天的短名称（’Mon’）
CURRENT_HOUR 当前小时
CURRENT_MINUTE 当前分钟
CURRENT_SECOND 当前秒

BLOCK_COMMENT_START 块注释开始标识,如 PHP /* 或 HTML <!--
BLOCK_COMMENT_END 块注释结束标识,如 PHP */ 或 HTML -->
LINE_COMMENT 行注释，如： PHP // 或 HTML <!-- -->
```
