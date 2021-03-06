---
title: git的使用(备忘)
date: 2020-12-14
tags:
 - 工具
 - 经验
 - git
categories: code
---


## 更新推送地址

```sh
git remote set-url origin git-link
```

## 如何在`.gitignore`设置，单独打开某个文件夹上传
> 有时候我们要有这要的需求，禁止A文件夹中的全部文件上传，但要让A文件夹中的`A1`文件夹上传，在文件中输入以下内容
```gitignore
/A/* 
!/A/A1/
```

## 在git中生成ssh 公钥

> ssh是为了让我们在使用的时候可以免去权限验证，比起账号验证会丝滑很多，在文档中实际已经介绍的非常详细了 [文档地址](https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5)

1. 检查本地是否已经存在秘钥 

:::tip
以windows系统为例，我们可以检查这个文件夹是否存在: `C:\Users\[你自己的用户名]\.ssh`，如果已经存在，将这个文件`id_rsa.pub`的内容复制到gitee或者github的后台设置就可以了 
:::

2. 假如没有秘钥,输入以下命令就可以创建第一点中的秘钥，然后再按照该步骤设置就可以了。 这里面会出现一些问答的内容，没有特殊的设置我们一直按 `enter`就可以
```sh
ssh-keygen -o
```


## 从服务器拉取指定分支

```shell
git clone -b develop [url] 
```


## 关于新电脑我们应该如何设置git

使用下面的命令将你的账号设置为自己的
```sh
git config --global user.name 'your name'
git config --global user.email 'xxxxx@qq.com'
```

## 合并

使用 `git merge  [分支名] ` 来进行合并

如果出现大量冲突需要取消合并 使用 `git merge --abort`


## 分支

- 查看分支 `git branch`
- 创建分支 `git branch [分支名]`
- 查看远程分支 `git branch -a`

- 切换分支 `git checkout [分支名]`
- 切换远程的某条分支
```sh
# 
git checkout -b test origin/test
git pull origin test  
```



## 推送

`git push 进行推送`



## 暂存工作区的内容

假设场景

我们正在`dev`开发，突然产品来说`release`分支出现了问题，需要修复紧急上限，可是目前手上的开发才进行到一半啊 

这是可以使用`git  stash` 命令暂存工作区中尚未存储的部分，然后回到`目标分支`修改问题。


之后在使用 `git stash apply` 就能释放之前那些正在开发的内容了。


```sh
# 保存当前未commit的代码
git stash

# 保存当前未commit的代码并添加备注
git stash save "备注的内容"

# 列出stash的所有记录
git stash list

# 删除stash的所有记录
git stash clear

# 应用最近一次的stash
git stash apply

# 应用最近一次的stash，随后删除该记录
git stash pop

# 删除最近的一次stash
git stash drop
```

## 回退或者修改commit





