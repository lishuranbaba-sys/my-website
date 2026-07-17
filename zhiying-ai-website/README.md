# 织影 AI 官网项目

这是一个可直接部署到 Vercel 的 React + Vite 官网项目。

## 项目文件说明

```text
index.html                  网站入口 HTML
package.json                项目依赖和启动命令
vite.config.js              Vite 配置
postcss.config.js           Tailwind CSS 配置
.tailwind.config.js         Tailwind 扫描配置
src/App.jsx                 网站主页面代码
src/main.jsx                React 启动入口
src/index.css               全局样式、Tailwind、动画特效
public/logo.png             网站 Logo
```

## 本地预览方式

需要先安装 Node.js。安装后，在项目文件夹里运行：

```bash
npm install
npm run dev
```

浏览器打开命令行提示的网址，通常是：

```text
http://localhost:5173
```

## 打包方式

```bash
npm run build
```

打包结果会生成在：

```text
dist
```

## Vercel 部署方式

1. 把本项目上传到 GitHub。
2. 打开 Vercel，选择 Add New Project。
3. 选择这个 GitHub 仓库。
4. Vercel 会自动识别 Vite 项目。
5. 确认配置：
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. 点击 Deploy。

## 更换 Logo

替换这个文件即可：

```text
public/logo.png
```

代码里已经固定使用：

```js
const LOGO_IMAGE_SRC = "/logo.png";
```

## 修改文字、价格、积分

主要修改：

```text
src/App.jsx
```

常用修改位置：

- `modelStack`：修改文字、图片、视频模型名称和描述
- `plans`：修改会员价格、积分、权益
- `generationItems`：修改功能消耗标准
- `manualSections`：修改产品使用手册内容
