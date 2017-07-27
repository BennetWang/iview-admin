# IView Admin

[![vue](https://img.shields.io/badge/vue-^2.4.2-brightgreen.svg?style=flat-square)](https://github.com/vuejs/vue)
[![iview](https://img.shields.io/badge/iview-^2.0.0_rc.19-yellowgreen.svg?style=flat-square)](https://github.com/iview/iview)

[![GitHub issues](https://img.shields.io/github/issues/Jetsly/iview-admin.svg?style=flat-square)](https://github.com/Jetsly/iview-admin/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Jetsly/iview-admin/pulls)
[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)


## 特性



## 更新日志


## 开发构建

### 目录结构

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /components/   # UI组件及UI相关方法
│ ├── /routes/       # 路由组件
│ │ └── App.vue      # 路由入口
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /mock/         # 数据mock
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html     
├── package.json     # 项目信息
└── .eslintrc        # Eslint配置
```

文件夹命名说明:


### 快速开始

克隆项目文件:

    git clone https://github.com/jetsly/iview-admin.git

进入目录安装依赖:

    npm i 或者 yarn install

开发：

```bash
npm run dev
打开 http://localhost:8080
```

构建：

```bash
npm run build

将会生成dist目录
```