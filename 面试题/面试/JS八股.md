## 1.数组的some和every方法

some 有一个符合就为true

every 需要全部符合

## 2.promise常用的类方法

**Promise.all** 全为Fulfilled 才为fulfilled，如果有一个rejected

则状态变为rejected

**Promise.race** 先执行到成功就返回成功的状态，返回失败就是失败状态

**Promise.allSettled**：

```js
[
  { status: 'fulfilled', value: 11111 },
  { status: 'rejected', reason: 22222 },
  { status: 'fulfilled', value: 33333 }
]
```

**Promise.any** 只要有一个resolve，则返回最快resolve的值，

如果都reject了，则返回一个reject数组

