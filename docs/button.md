## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```js
render() {
  return (
    <div>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="text">文字按钮</Button>
    </div>
  )
}
```
:::