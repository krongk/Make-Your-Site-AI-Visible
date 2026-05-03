<div align="center">
<img src="src/assets/SV-S39-M1-shot1.png" alt="如何让网站对大模型可见" width="1200" />
</div>

# 如何让网站对大模型可见

面向「AI 读者」与检索演进的单页叙事站点：全屏分章滚动、视频与文案结合，说明站点如何被大模型更好地理解与引用。

技术栈：**Vite**、**Alpine.js**、**Tailwind CSS**，并集成 **Google GenAI（Gemini）**。

在 AI Studio 中查看应用：<https://ai.studio/apps/a57f8bbb-f4bc-4a1f-b2a9-4df6563acfd7>

## 本地运行

**环境要求：** Node.js

1. 安装依赖：`npm install`
2. 在 [.env.local](.env.local) 中设置 `GEMINI_API_KEY` 为你的 Gemini API 密钥
3. 启动开发服务器：`npm run dev`

默认开发地址为 `http://localhost:3000`（见 `package.json` 中 `vite` 配置）。

## 构建与预览

- 生产构建：`npm run build`，产物在 `dist/`
- 本地预览构建结果：`npm run preview`
