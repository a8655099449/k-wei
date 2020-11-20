## sass是什么？
> sass属于css的一种编译语言



## sass的安装
> sass在windows的安装，需要安装 ruby 
可以直接查看sass的官网，有非常详细的教程
https://www.sass.hk/install/


### sass的更新指令
```
//更新sass
gem update sass
//查看sass版本
sass -v
//查看sass帮助
sass -h
```

### sass的编译
> 只简单的介绍几种常用的方法

#### 1.命令行编译
```
//单文件转换命令
sass input.scss output.css

//单文件监听命令
sass --watch input.scss:output.css

//如果你有很多的sass文件的目录，你也可以告诉sass监听整个目录：
sass --watch app/sass:public/stylesheets
```

#### 2.使用软件`koala`进行编译
> 这个具体去查看koala官网


#### 3.vscode使用`easysass`进行编译
> easysass插件，会自动在目录下编译成一个一模一样的css文件 强烈推荐使用


### 1.sass的基础语法
#### 1.1 嵌套语法

```CSS
ul{
	color：#ccc;
	li{
		li-style:none;
	}
}
```

#### 1.2 如果要找到父选择器，使用`&`这个符号

```
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
```
### 2.sass的注释
> 在sass中只有多行注释会被编译出来，单行注释会被忽略 ,如果要在注释中插入变量，需要使用 #{$a}这样的语法

```
// 我是一行注释
/* 我是一个多行注释 #{$a}. */
```


### 3.sass的函数
#### 3.1变量
> sass中的变量使用 $符号开头

