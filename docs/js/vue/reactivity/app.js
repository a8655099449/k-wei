//  自己实现一个 mini vite

const Koa = require("koa"); // 因为vite本地环境还是一个node服务器，我们这里使用koa来搭建node的服务器

const path = require("path");

const fs = require("fs");

const app = new Koa();

app.listen(9527, () => {
  console.log("listening to 9527");
});

app.use((ctx) => {
  const {
    request: { url, query },
  } = ctx;

  if (url === "/") {
    // 渲染根路径
    let content = fs.readFileSync("./index.html", "utf-8");
    content.replace('<script' , `
    <script></script>
    
    ` )

    ctx.type = "text/html";
    ctx.body = content;
  } else if (url.endsWith(".js")) {
    // 这里面我们要对js的引入做一些处理

    const p = path.resolve(__dirname, url.slice(1));
    ctx.type = "application/javascript";
    let content = fs.readFileSync(p, "utf-8");
    content = rewriteImport(content);
    /* 
    ? 做完以上这些处理后 mian.js是已经可以正常引入了
    ? 但是会遇到下一个报错  因为浏览器不支持以下的语法
    ? import { createApp } from 'vue'
    ? 所以我们要对其中的内容进行一些改变，用正则把 非 / ./ ../ 开头的import 变为引node_modules内引入 
    ? import { createApp } from 'vue'  =>  import { createApp } from '/node_modules/xx'
    */

    ctx.body = content;
  } else if (url.startsWith("/@modules/")) {
    // ? 如果是以此类开头的请求，去 node_modules 里面寻找依赖
    const prefix = path.resolve(
      __dirname,
      "node_modules",
      url.replace("/@modules/", "")
    );

    // ? node_modules的文件查找规则，是根据包的名字 查找 包里面的 `package.json`
    const modulePath = require(`${prefix}\\package.json`).module;
    console.log(path.resolve(
      prefix,
      modulePath
    ));

    const content = fs.readFileSync(
      path.resolve(
        prefix,
        modulePath
      ),
      'utf-8'
    );
    ctx.type = "application/javascript";
    ctx.body = rewriteImport(content);
  }
});

function rewriteImport(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"|';|";]/g, (s1, s2) => {
    if (s2[0] !== "." && s2[1] !== "/") {
      return ` from '/@modules/${s2}'`;
    } else {
      return s1;
    }
  });
}

console.log(rewriteImport(`import { initCustomFormatter, warn } from '@vue/runtime-dom';`));