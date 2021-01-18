# active-box

**active-box 是一个基于[interactjs](https://interactjs.io)封装的 vue3.0 组件**

## 组件简介

Active-box 是一个轻量级、易使用的支持拖动和缩放的 vue3.0 组件。

## 安装

```shell
npm i active-box
```

## 引入

```typescript
import { ActiveBox } from "active-box";
```

## 涉及类型

```typescript
interface BoxState {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface EdgeOptions {
  top?: boolean | string | Element;
  left?: boolean | string | Element;
  bottom?: boolean | string | Element;
  right?: boolean | string | Element;
}
```

## 参数

| 参数           | 说明                              | 类型        | 默认值                                               | 例              |
| -------------- | --------------------------------- | ----------- | ---------------------------------------------------- | --------------- |
| draggable      | 是否可拖动                        | boolean     | true                                                 |                 |
| resizable      | 是否可缩放                        | boolean     | true                                                 |                 |
| initX          | 初始水平位置(px)                  | number      | 0                                                    |                 |
| initY          | 初始垂直位置(px)                  | number      | 0                                                    |                 |
| initWidth      | 初始宽度                          | number      | 300                                                  |                 |
| initHeight     | 初始高度                          | number      | 300                                                  |                 |
| minWidth       | 最小宽度                          | number      | 10                                                   |                 |
| minHeight      | 最小高度                          | number      | 10                                                   |                 |
| maxWidth       | 最大宽度                          | number      | Infinity                                             |                 |
| maxHeight      | 最大高度                          | number      | Infinity                                             |                 |
| dragHandle     | 拖动触发位置(dom 元素的 class/id) | string      | ""                                                   | “.head”,"#head" |
| resizeBarWidth | 缩放触发距离                      | number      | 10                                                   |                 |
| edges          | 可缩放方向                        | EdgeOptions | { left: true, right: true, bottom: true, top: true } |                 |

## 事件

| 事件名      | 说明     | 参数类型 |
| ----------- | -------- | -------- |
| dragStart   | 拖动开始 | BoxState |
| dragMove    | 拖动中   | BoxState |
| dragEnd     | 拖动结束 | BoxState |
| resizeStart | 缩放开始 | BoxState |
| resizeMove  | 缩放中   | BoxState |
| resizeEnd   | 缩放结束 | BoxState |
