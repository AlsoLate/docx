# VitePress Markdown 语法大全

本教程总结了在 VitePress 中编写文档时所有常用的 Markdown 语法，包括标准 Markdown 语法以及 VitePress 特有的扩展语法。

## 一、标准 Markdown 语法

### 1. 标题
在文字前添加 `#` 来创建标题，`#` 的数量代表标题的级别（1-6级）。
```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 2. 文本样式
```markdown
**粗体文本**
*斜体文本*
~~删除线文本~~
`内联代码`
```
**粗体文本**，*斜体文本*，~~删除线文本~~，`内联代码`。

### 3. 列表
**无序列表**（使用 `-`、`*` 或 `+`）：
```markdown
- 项目 1
- 项目 2
  - 子项目 2.1
```
- 项目 1
- 项目 2
  - 子项目 2.1

**有序列表**（使用数字加英文句号）：
```markdown
1. 第一步
2. 第二步
```
1. 第一步
2. 第二步

### 4. 链接与图片
```markdown
[点击这里访问 GitHub](https://github.com)
![图片替代文字](https://vitepress.dev/vitepress-logo-large.webp)
```

### 5. 引用块
```markdown
> 这是一段引用文本。
> 可以有多行。
```
> 这是一段引用文本。
> 可以有多行。

### 6. 代码块
使用三个反引号（\`\`\`）包围代码，并可以指定语言以获得语法高亮：
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

### 7. 表格
```markdown
| 表头 1 | 表头 2 | 表头 3 |
| :--- | :---: | ---: |
| 左对齐 | 居中对齐 | 右对齐 |
| 文本 | 文本 | 文本 |
```

| 表头 1 | 表头 2 | 表头 3 |
| :--- | :---: | ---: |
| 左对齐 | 居中对齐 | 右对齐 |
| 文本 | 文本 | 文本 |

---

## 二、VitePress 专属扩展语法

VitePress 在标准 Markdown 的基础上，增加了许多非常适合写技术文档的扩展语法。

### 1. 自定义容器（提示框）

你可以使用 `:::` 来创建各种颜色的提示框：

```markdown
::: info
这是一个信息框。
:::

::: tip
这是一个提示框。
:::

::: warning
这是一个警告框。
:::

::: danger
这是一个危险/错误框。
:::

::: details 点击查看详情
这是一个可折叠的详情框。
:::
```

**效果展示：**

::: info
这是一个信息框。
:::

::: tip
这是一个提示框。
:::

::: warning
这是一个警告框。
:::

::: danger
这是一个危险/错误框。
:::

::: details 点击查看详情
这是一个可折叠的详情框。
里面可以放任何 Markdown 内容，甚至是代码块！
:::

### 2. 代码块高亮与行号

你可以高亮特定的代码行，只需在语言后加上 `{行号}`：

```markdown
// 高亮第 2 和第 3 行
```javascript{2-3}
export default {
  data() {
    return { msg: 'Hello' }
  }
}
\```
```

**效果展示：**
```javascript{2-3}
export default {
  data() {
    return { msg: 'Hello' }
  }
}
```

### 3. 带有标题的代码块

在语言后面使用 `[文件名]` 可以给代码块加上标题：

```markdown
```vue [App.vue]
<template>
  <h1>Hello World</h1>
</template>
\```
```

**效果展示：**
```vue [App.vue]
<template>
  <h1>Hello World</h1>
</template>
```

### 4. 代码组 (Code Groups)

你可以将多个代码块组合成一个带标签页的组件：

```markdown
::: code-group

```npm [npm]
npm run build
\```

```yarn [yarn]
yarn build
\```

```pnpm [pnpm]
pnpm build
\```

:::
```

**效果展示：**

::: code-group

```npm [npm]
npm run build
```

```yarn [yarn]
yarn build
```

```pnpm [pnpm]
pnpm build
```

:::

### 5. 徽章 (Badge)

你可以给文本添加小徽章，通常用于标记版本号或状态：

```markdown
- Vue <Badge type="info" text="^3.2.0" />
- VitePress <Badge type="warning" text="v1.0.0" />
- 废弃的 API <Badge type="danger" text="Deprecated" />
```

**效果展示：**
- Vue <Badge type="info" text="^3.2.0" />
- VitePress <Badge type="warning" text="v1.0.0" />
- 废弃的 API <Badge type="danger" text="Deprecated" />

---

## 结语

掌握了以上这些 Markdown 语法，您就可以利用 VitePress 编写出排版精美、功能丰富的项目文档了！
