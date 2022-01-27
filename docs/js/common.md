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


## 图片进行压缩

```ts
type CompressImg = {
  afterKB?: number;
  beforeKB?: number;
  afterSrc?: string;
  beforeSrc?: string;
  file?: File;
  origin?: File;
};


//  传入文件对象 和 压缩比例 其中 0.2 为最佳压缩比例
function compressImg(file: File, quality: number): Promise<CompressImg> {
  let qualitys = quality || 0.2;
  if (Array.isArray(file)) {
    // @ts-ignore
    return Promise.all(
      // @ts-ignore
      Array.from(file).map((e) => compressImg(e, qualitys))
    ); // 如果是 file 数组返回 Promise 数组
  }


  return new Promise((resolve) => {
    const reader = new FileReader(); // 创建 FileReader
    reader.onload = ({ target: { result: src } }) => {
      const image = new Image(); // 创建 img 元素
      image.onload = async () => {
        const canvas = document.createElement("canvas"); // 创建 canvas 元素
        const context = canvas.getContext("2d");
        var targetWidth = image.width;
        var targetHeight = image.height;
        var originWidth = image.width;
        var originHeight = image.height;

        const sizeKb = parseInt((file.size / 1024).toFixed(2));
        //  1m ~ 10m
        if (1 * 1024 <= sizeKb && sizeKb <= 10 * 1024) {
          var maxWidth = 1600;
          var maxHeight = 1600;
          targetWidth = originWidth;
          targetHeight = originHeight;
          // 图片尺寸超过的限制
          if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
              // 更宽，按照宽度限定尺寸
              targetWidth = maxWidth;
              targetHeight = Math.round(
                maxWidth * (originHeight / originWidth)
              );
            } else {
              targetHeight = maxHeight;
              targetWidth = Math.round(
                maxHeight * (originWidth / originHeight)
              );
            }
          }
        }
        // >10m
        if (10 * 1024 <= sizeKb && sizeKb <= 20 * 1024) {
          maxWidth = 1400;
          maxHeight = 1400;
          targetWidth = originWidth;
          targetHeight = originHeight;
          // 图片尺寸超过的限制
          if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
              // 更宽，按照宽度限定尺寸
              targetWidth = maxWidth;
              targetHeight = Math.round(
                maxWidth * (originHeight / originWidth)
              );
            } else {
              targetHeight = maxHeight;
              targetWidth = Math.round(
                maxHeight * (originWidth / originHeight)
              );
            }
          }
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        context.clearRect(0, 0, targetWidth, targetHeight);
        context.drawImage(image, 0, 0, targetWidth, targetHeight); // 绘制 canvas
        const canvasURL = canvas.toDataURL(`image/jpeg`, qualitys);
        const buffer = atob(canvasURL.split(",")[1]);
        let length = buffer.length;
        const bufferArray = new Uint8Array(new ArrayBuffer(length));
        while (length--) {
          bufferArray[length] = buffer.charCodeAt(length);
        }
        const miniFile = new File([bufferArray], file.name, {
          type: `image/jpeg`,
        });

        resolve({
          file: miniFile,
          origin: file,
          // @ts-ignore
          beforeSrc: src,
          afterSrc: canvasURL,
          beforeKB: Number((file.size / 1024).toFixed(2)),
          afterKB: Number((miniFile.size / 1024).toFixed(2)),
        });
      };
      // @ts-ignore
      image.src = src;
    };
    reader.readAsDataURL(file);
  });
}
```