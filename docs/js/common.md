---
title: 日常开发中常使用的js片段
date: 2021-09-17
tags:
 - 前端
 - js
categories: code
pic: 
desc: 
---


## 通过一个链接下载文件
```ts
export function download(link: string, name: string) {
  if (!name) {
    name = link.slice(link.lastIndexOf('/') + 1);
  }
  let eleLink = document.createElement('a');
  eleLink.download = name;
  eleLink.style.display = 'none';
  eleLink.href = link;
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}
```

## 图片链接转换为base64

```js
function image2base64(url) {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = url;
  return new Promise((resolve, reject) => {
    img.addEventListener('load', () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const mime = img.src
        .substring(img.src.lastIndexOf('.') + 1)
        .toLowerCase();

      const dataUrl = canvas.toDataURL('image/' + mime);
      resolve(dataUrl);
    });
    img.addEventListener('error', reject);
  });
}
```


## 下载一个图片链接
> 不能使用第一种方法 ，在谷歌浏览器下载后会直接在当前页面打开，先转换为base64在下载后就可以直接下载为文件
```js
async function downloadImgLink(link) {
  const base64 = await image2base64(link)
  download(base64, `xx.png`)
}

// 示例
downloadImgLink('https://pic2.zhimg.com/80/v2-3c97a28d50adae207cc95f0f96361894_720w.jpg?source=1940ef5c')
```


## 下载某些自定义的内容
> 这个下载指的是前端自定义的一些内容 比如一个json文件啥的，不依赖服务器


```js
export function downloadFile(name, content) {
  if (typeof name == 'undefined') {
    throw new Error('The first parameter name is a must');
  }
  if (typeof content == 'undefined') {
    throw new Error('The second parameter content is a must');
  }
  if (!(content instanceof Blob)) {
    if (typeof content !== 'string') {
      content = JSON.stringify(content, null, 2);
    }
    content = new Blob([content]);
  }
  const link = URL.createObjectURL(content);
  download(link, name);
}

// 使用示例

downloadFile(`test.json`, {
  a: 1,
  b: 2
})

```







## 复制某个字符串


```js
function copyToBoard(value) {
  const element = document.createElement('textarea')
  document.body.appendChild(element)
  element.value = value
  element.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    document.body.removeChild(element)
    return true
  }
  document.body.removeChild(element)
  return false
}
```



## 延迟多少秒
```js
function wait(ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
```

## 生成随机字符串


```js
function uuid(length=8, chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  let result = ''
  for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)]
  return result
}
```

## 在整个字符串中加粗特定字符



```js
const boldKeyword = (keyword, str) => {
  let rex = new RegExp(keyword, 'is');
  return str.replace(rex, `<b>$&</b>`);
};
```

## 将时间转换为特定格式


```js
export const formatTime = (date, fmt) => {
  if (!date) return 'is not time';
  // 判断date是不是时间戳
  if (typeof date == 'number') {
    date = new Date(date);
  }
  //获取年份
  if (/(y+)/.test(fmt)) {
    let dateY = date.getFullYear() + '';
    //RegExp.$1 在判断中出现过，且是括号括起来的，所以 RegExp.$1 就是 "yyyy"
    fmt = fmt.replace(RegExp.$1, dateY.substr(4 - RegExp.$1.length));
  }

  //获取其他
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? str : ('00' + str).substr(str.length),
        //
      );
    }
  }
  return fmt;
};

      
// 使用示例
console.log(formatTime(Date.now(), 'yyyy-MM-dd hh:mm:ss'))
```