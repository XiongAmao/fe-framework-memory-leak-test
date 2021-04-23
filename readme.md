## vue2  / vue3

打开chrome - devtool [memory] tab，
检查实时的内存占用情况

测试1: 只 点击 切换按钮，卸载加载组件  循环
测试2: 点击 【切换】 ，然后点击【开始】 再点击 【切换】   循环

然后测试2 加上 `SubPage` 组件的 卸载生命周期 `clearTimeout`

### 结论
vue2 如果不正常清理引用，会在卸载组件后，内存不会被回收
vue3 通过proxy收集依赖，通过weakMap 弱引用，不会影响组件被其他地方引用

## react

测试`SubPage.jsx` `clearTimeout` 的区别

### 结论
FC 组件不清理内存，会直接引用到上一轮渲染，导致内存无法被正常回收