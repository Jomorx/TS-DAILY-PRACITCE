## 1.为什么index不能作为key

1. 性能开销，每个元素的index都不相等，就要全部更新
2. 数据错误，在开头插入一个，插入的会和原来的index相等，导致数据错误

## 2.Vue2.0 和 Vue3.0 有什么区别

1.监听的目标是对象本身，不需要像Object.defineProperty那样遍历每个属性，有一定的性能提升

2.新增组合API，更好的逻辑重用和代码组织

3.直接添加对象属性删除

4.Vue3可以更好的支持TypeScript

## 3.Vue2的生命周期(8个)

beforecreate created beforemount mounted beforeupdate updated boforedestory destoried

## 4.keepalive 生命周期

钩子触发的顺序是created->mounted->activated