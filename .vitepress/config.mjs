import { defineConfig } from 'vitepress'
import { GitChangelog } from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vela Open Doc",
  description: "Community-Created Xiaomi Vela Document",
  lang: 'zh-CN',
  outDir: './dist',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: 'Vela Open Doc',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outlineTitle: '本页目录',
    darkModeSwitchLabel: '外观',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '设备参数', link: '/docs/device' },
          { text: '米表系统合集', link: '/docs/history' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zaona/vela-open-doc' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBoxPlaceholder: '搜索文档',
            resetButtonTitle: '清除查询条件',
            closeButtonAriaLabel: '关闭搜索',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              selectTextAriaLabel: '选择',
              navigateText: '导航',
              navigateTextAriaLabel: '导航到结果',
              closeText: '关闭',
              closeTextAriaLabel: '关闭搜索对话框'
            }
          }
        },
      }
    }
  },
  vite: {
    plugins: [
      GitChangelog({
        repoURL: () => 'https://github.com/zaona/vela-open-doc',
      }),
    ],
  },
})
