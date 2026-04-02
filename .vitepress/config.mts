import { defineConfig } from 'vitepress'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { PageProperties, PagePropertiesMarkdownSection } from '@nolebase/vitepress-plugin-page-properties/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', // 设置全局语言为中文
  title: "亦迟的文档",
  description: "基于 VitePress 的文档站点",
  // 因为您的 GitHub 仓库名是 docx，所以这里的 base 必须设置为 /docx/
  base: '/docx/',
  vite: {
    plugins: [
      GitChangelog({
        // 留空以自动获取当前仓库，或者填写具体仓库地址
        mapAuthors: [
          {
            name: '亦迟', // 这里是页面上显示的名称
            username: 'AlsoLate', // 这里是您的真实 GitHub 用户名，用于获取您的头像和主页链接
            mapByNameAliases: ['亦迟'], // 包含历史提交的名字
            mapByEmailAliases: ['3958426615@qq.com'] // 包含历史提交的邮箱
          }
        ]
      }),
      GitChangelogMarkdownSection(),
      PageProperties(),
      PagePropertiesMarkdownSection()
    ],
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        '@nolebase/vitepress-plugin-git-changelog/client',
        '@nolebase/vitepress-plugin-page-properties/client',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-git-changelog',
        '@nolebase/vitepress-plugin-page-properties',
        '@nolebase/ui',
      ],
    },
  },
  themeConfig: {
    // 设置中文的外观提示
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档指南', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '使用指南',
        items: [
          { text: '快速开始与部署', link: '/markdown-examples' },
          { text: 'Markdown 语法大全', link: '/markdown-tutorial' },
          { text: '实用工具资源集合', link: '/tools-collection' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AlsoLate/docx' }
    ]
  }
})
