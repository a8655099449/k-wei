---
title: 微信网页授权流程
date: 2021-02-22
tags:
 - 前端
 - 经验
categories: code
---
我们在做微信号网页开发时，所需要弄清楚的第一个问题就是网页授权

本篇记录使用微信网页开发如何获取用户信息的流程，**仅限前端**

[官方文档地址](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)



## 一句话概括

前端用获得微信用户信息，所需要的做的，就是获得微信给的`code`，然后将code发送给服务端，服务端经过处理再将用户信息返回回来，就这么简单


## 如何获得code ？

code 的获取方式是将链接指向微信给的一个地址，**携带必要的参数**，微信经过验证后，如果它觉得没问题，就会把code通过放在链接参数里面返还回来

## 有哪些必要的参数？

![alt](//image.woai996.com/picgo/20210222170029.png)

1. `appid` 这个没什么好说的，在后台找，不然就找你们后端或者老板要
2. `redirect_url` 重定向链接,你得告诉微信，它才能把code带回来给你

:::warning
这个回调的链接也有点说法

一般来说我们在本地开发，比如我们本地的域名`localhost:8080` <br>
而这个回调地址的域名必须是我们上面`配置的域名`，那我们在本地开发怎么获得`code`?

这里有个小技巧，我们只需要把当前环境的`href`通过参数的方式传递给回调地址，在回调地址专门弄个页面处理code，然后再把code拼接过来回到当前`href`就可以拿到code了

:::details 处理授权页面的代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>微信登录</title>
</head>
<body>

    <script>
        var GWC = {
            version: '1.2.0',
            urlParams: {},
            appendParams: function(url, params) {
                if (params) {
                    var baseWithSearch = url.split('#')[0];
                    var hash = window.location.hash.split('#')[1];
                    if (hash) {
                        baseWithSearch = baseWithSearch + '#' + hash;
                    }
                    for (var key in params) {
                        var attrValue = params[key];
                        if (attrValue !== undefined) {
                            var newParam = key + "=" + attrValue;
                            if (baseWithSearch.indexOf('?') > 0) {
                                var oldParamReg = new RegExp('^' + key + '=[-%.!~*\'\(\)\\w]*', 'g');
                                if (oldParamReg.test(baseWithSearch)) {
                                    baseWithSearch = baseWithSearch.replace(oldParamReg, newParam);
                                } else {
                                    baseWithSearch += "&" + newParam;
                                }
                            } else {
                                baseWithSearch += "?" + newParam;
                            }
                        }
                    }
                }

                return baseWithSearch;

            },
            getUrlParams: function() {
                var pairs = location.search.substring(1).split('&')
                for (var i = 0; i < pairs.length; i++) {
                    var pos = pairs[i].indexOf('=')
                    if (pos === -1) {
                        continue
                    }
                    GWC.urlParams[pairs[i].substring(0, pos)] = decodeURIComponent(pairs[i].substring(pos + 1))
                }
            },
            doRedirect: function() {
                var code = GWC.urlParams['code']
                var appId = GWC.urlParams['appid']
                var scope = GWC.urlParams['scope'] || 'snsapi_base'
                var state = GWC.urlParams['state']
                var isMp = GWC.urlParams['isMp'] //isMp为true时使用开放平台作授权登录，false为网页扫码登录
                var baseUrl
                var redirectUri

                if (!code) {
                    baseUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize#wechat_redirect'
                    if (scope == 'snsapi_login' && !isMp) {
                        baseUrl = 'https://open.weixin.qq.com/connect/qrconnect'
                    }

                    //第一步，没有拿到code，跳转至微信授权页面获取code
                    redirectUri = GWC.appendParams(baseUrl, {
                        appid: appId,
                        redirect_uri: encodeURIComponent(location.href),
                        response_type: 'code',
                        scope: scope,
                        state: encodeURIComponent(state)
                    })

                } else {
                    const params = Object.assign({}, GWC.urlParams)
                    delete params.backUrl
                        //第二步，从微信授权页面跳转回来，已经获取到了code，再次跳转到实际所需页面
                    redirectUri = GWC.appendParams(GWC.urlParams['backUrl'], params)
                }

                location.href = redirectUri
            }
        }

        GWC.getUrlParams()
        GWC.doRedirect();
    </script>
</body>
</html>
```
:::

![alt](//image.woai996.com/picgo/20210222173311.png)

:::

1. `scope` 目前有两种类型`snsapi_base`和`snsapi_userinfo` 微信官方文档有详细的解释 ，
> 通俗来讲 `snsapi_base` 只能获得用户的`openid` ，优点在于用户体验比较好<br>
> `snsapi_userinfo`可以获得一些用户的基本信息，但是需要用户点击一下确定授权




参考文档

[vue微信网页授权最终解决方案（掘金）](https://juejin.cn/post/6844903866002046990)