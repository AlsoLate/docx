# 如何编写文档

VitePress 使得编写项目文档变得非常简单。它基于 Markdown，并提供了一些强大的扩展。

## 1. 创建和编辑页面

您可以在项目目录中直接创建 `.md` 文件。VitePress 会自动将它们映射为网页。
例如，您正在查看的这个页面就是 `markdown-examples.md`。

## 2. 基础 Markdown 语法

您可以使用标准的 Markdown 语法，比如：

**加粗文字**，*斜体文字*，以及 `内联代码`。

### 列表

- 这是一个无序列表项
- 这是另一个无序列表项
  - 嵌套的列表项

### 引用

> 这是一个引用块，可以用来突出显示重要的说明或警告。

## 3. 代码块

您可以轻松地展示代码，VitePress 会自动进行语法高亮：

```js
console.log('Hello, VitePress!')
```

## 4. VitePress 特有扩展

VitePress 还提供了一些特殊的语法，例如自定义容器：

::: info 提示
这是一个信息框。可以用来展示一些提示信息。
:::

::: warning 警告
这是一个警告框，提醒用户注意某些重要事项。
:::

::: danger 危险
这是一个危险框，通常用于提示破坏性操作。
:::

## 5. 配置侧边栏和导航

如果您创建了新的 Markdown 文件（例如 `guide.md`），您需要在 `.vitepress/config.mts` 中更新导航栏（`nav`）或侧边栏（`sidebar`）的配置，这样用户才能在页面上看到它。

```typescript
// .vitepress/config.mts
export default defineConfig({
  themeConfig: {
    sidebar: [
      {
        text: '使用指南',
        items: [
          { text: '如何编写文档', link: '/markdown-examples' },
          { text: '新指南页面', link: '/guide' } // 添加这行
        ]
      }
    ]
  }
})
```

## 6. 保存并预览

由于我们在开发模式下运行 VitePress，当您保存 Markdown 文件时，浏览器会自动刷新并显示最新的更改。

您可以尝试修改当前文件（`markdown-examples.md`），保存后看看效果！

## 7. 部署到 GitHub Pages

我们已经为您配置好了自动化部署文件 (`.github/workflows/deploy.yml`)，您只需要按照以下步骤操作，即可将您的文档发布到互联网上：

### 第一步：将代码推送到 GitHub
1. 在 GitHub 上创建一个新的**公开仓库** (Public Repository)。
2. 将本地代码推送到该仓库：
```bash
git remote add origin https://github.com/您的用户名/您的仓库名.git
git branch -M main
git push -u origin main
```

### 第二步：配置基础路径 (如果需要)
如果您不是部署到根域名（例如 `用户名.github.io`），而是部署到某个项目路径下（例如 `用户名.github.io/仓库名`），您需要在 `.vitepress/config.mts` 中取消注释并配置 `base` 选项：
```typescript
export default defineConfig({
  // 将此处的 '仓库名' 替换为您真实的 GitHub 仓库名，注意前后都要有斜杠
  base: '/您的仓库名/', 
  // ... 其他配置
})
```

### 第三步：启用 GitHub Pages
1. 在您的 GitHub 仓库页面，点击顶部的 **Settings**（设置）标签。
2. 在左侧菜单中，找到并点击 **Pages**。
3. 在 **Build and deployment** 下的 **Source** 下拉菜单中，选择 **GitHub Actions**。
4. 完成配置后，GitHub 会自动运行工作流并构建您的站点。您可以在 **Actions** 标签页中查看构建进度。
5. 构建完成后，您就可以在浏览器中访问您的在线文档了！

## 8. 日常更新与维护

当您的网站首次部署成功后，以后每次修改文档并想更新到线上时，**您只需要在本地完成修改并推送到 GitHub 即可**。GitHub 会自动检测到变化并重新部署。

日常更新的三步曲（在您的项目目录下执行）：

```bash
# 1. 将所有修改过的文件添加到暂存区
git add .

# 2. 提交这些修改，并写上一句简短的说明
git commit -m "更新了文档"

# 3. 将修改推送到 GitHub
git push
```

执行完 `git push` 后，大概等待 1~2 分钟，刷新您的线上网页，就能看到最新的内容了。
