---
title: 提升react的性能 uesCallback 和 useMemo 的使用
date: 2022-01-21
tags:
 - 前端
 - react
categories: code
pic: 
desc: 
---


## 使用[useCallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)
首先必须要介绍这两个hooks的使用背景，在使用hooks组件时，可能出现以下的场景


`组件A` 、`组件B` 、`组件C` 同时为一个父组件的子组件，但它们之间的数据并不相关

可以看以下的例子

:::details 展开查看
```javascript
import React, { useState, useCallback, } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  };

  const handleClickButton2 = () => {
    setCount2(count2 + 1);
  }

  return (
    <div>
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
      <div>
        <Button
          onClickButton={() => {
            setCount3(count3 + 1);
          }}
        >
          Button3
        </Button>
      </div>
    </div>
  );
}

const Button = ({ onClickButton, children }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </>
  );
};
```
:::

当点击其中一个按钮时，另外的两个也会发生渲染，而当子组件做的事情多时，这种没有必要的渲染固然是很浪费性能的


而使用`React.memo` + `useCallback`的组合可以解决上面的问题

将代码做出调整

:::details 展开查看
```javascript
import React, { useState, useCallback,  } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);


  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  };
  
  // 使用  useCallback 将函数包裹，并将依赖值放到第二个参数数组内 ,这样做的用意是只有数组中的值发生变化时，组件才会渲染
  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2, ]);

  return (
    <div>
      <div>
      <Button onClickButton={handleClickButton1}>Button1</Button>


      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
      <div>
        <Button
          onClickButton={() => {
            setCount3(count3 + 1);
          }}
        >
          Button3
        </Button>
      </div>
    </div>
  );
}

// 使用 React.memo 将组件包裹起来
const Button = React.memo(({ onClickButton, children }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </>
  );
});
```
:::
这时候我们点击button1 和 button3 将会发现按钮2 没有发生渲染，这是因为按钮2的点击事件`useCallback`包裹了
> [React.memo](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo) 的作用是只有当`props`发生变化时组件才会重新开始渲染


而`useCallback`则是监听第二个参数的依赖，依赖发生改变 => 返回一个新的函数 => 触发`React.memo`的渲染条件 => 开始渲染

所以在上面的案例中，button2的props `handleClickButton2` 由于 `count2`没有变化，所以不会触发渲染


## [useMemo](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo) 的使用

`useMemo` 和 `React.memo` 可不是一回事，不要把useMemo当成是`React.memo`的hook版


:::tip 官方的解释
把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
:::
说人话就是 ，传入一个函数 、 一个依赖数组， 当依赖数组发生改变时，会执行函数从而获得一个新的数值



来看一个例子

```javascript
import React, { useState } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleComputeNumber = () => {
    //  无论点击按钮1 还是 按钮2 函数都会触发计算函数
    console.log("👴computeNumber");
    return count1 * 2;
  };
  const computeNumber = handleComputeNumber();
  return (
    <div>
      <div>
        <button onClick={(e) => setCount1(count1 + 1)}> 按钮1</button>
      </div>
      <div>
        <button onClick={(e) => setCount2(count2 + 1)}> 按钮2</button>
      </div>
      <Form computeNumber={computeNumber} />
    </div>
  );
}

const Form = React.memo<any>(({ computeNumber }) => {
  return (
    <div>
      <button>提交</button>
      <p>{computeNumber}</p>
      <p>{Math.random()}</p>
    </div>
  );
});
```

这里点击两个按钮都会触发 `handleComputeNumber` 这个函数的计算 ，但函数实际值只依赖`count1` ,而其实`count2`变不变化其实都没什么关系,如果`handleComputeNumber`计算量十分庞大时，就会非常的影响性能


使用`useMemo`来避免这种情况

```javascript
import React, { useMemo, useState } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const computeNumber = useMemo(() => {
    console.log("👴触发计算函数");
    return count1 * 1;
  }, [count1]);
  return (
    <div>
      <div>
        <button onClick={(e) => setCount1(count1 + 1)}> 按钮1</button>
      </div>
      <div>
        <button onClick={(e) => setCount2(count2 + 1)}> 按钮2</button>
      </div>
      <Form computeNumber={computeNumber} />
    </div>
  );
}
const Form = React.memo<any>(({ computeNumber }) => {
  return (
    <div>
      <button>提交</button>
      <p>{computeNumber}</p>
    </div>
  );
});

```
这种写法无论你点击按钮2多少下，都不会再触发计算函数

## 在那种情况下才应该使用useCallback 和 useMemo呢？


正常简单的开发中，其实完全不使用这两个hooks也没有关系，因为现在的计算机都很强大，那点性能消耗不足为道。

只有设计当大量计算时，才应该考虑使用到`useCallback` \  `React.memo`这种缓存数据的函数

具体情况还是看具体问题 ， 但一定要知道这些api的作用才能更好的帮助我们开发






