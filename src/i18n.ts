export const translations = {
  zh: {
    chapter0_h1: `如何让网站<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">对大模型可见</span>`,
    chapter0_p: `用户不再搜索，而是提问。<br/>你的网站准备好迎接<br/>AI读者了吗？`,
    
    chapter1_badge: `第零步`,
    chapter1_h2: `别把门关上 <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block">robots.txt</span>`,
    chapter1_p: `如果你已经把 GPTBot、ClaudeBot 一类爬虫挡在门外，后面做得再漂亮，也没有入口。`,
    
    chapter2_badge: `技能 1`,
    chapter2_h2: `写一份说明书 <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">/llms.txt</span>`,
    chapter2_p: `用 Markdown 列出“你希望 AI 优先读的关键页面”。可以把它当作对话时代的 README。`,
    chapter2_tip: `<span class="text-purple-400">示例：</span><br/>https://www.baklib.com/llms.txt`,

    chapter3_badge: `技能 2`,
    chapter3_h2: `双面打印 <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">同址 .md 路由</span>`,
    chapter3_p: `同一地址加上 <code class="text-white/80">.md</code>。解决“信息密度”的问题，让模型的上下文压力小很多。`,
    chapter3_tip: `<span class="text-purple-400">示例：</span><br/>
<span class="text-gray-500">当前博客的访问地址：</span><br/>https://www.baklib.com/blog/llm-website-visibility<br/>
<span class="text-gray-500 mt-1 block">则对应的.md访问地址：</span>
<span class="text-blue-400">https://www.baklib.com/blog/llm-website-visibility.md</span>`,

    chapter4_badge: `技能 3`,
    chapter4_h2: `主动递名片 <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">&lt;link&gt; & HTTP Link</span>`,
    chapter4_p: `在 HTML 的 <code class="text-white/80">&lt;head&gt;</code> 以及 HTTP 的 <code class="text-white/80">Link</code> 头中宣告 <code class="text-white/80">.md</code> 的存在，告诉机器另一种读取方式。`,
    chapter4_tip: `<span class="text-gray-500">示例：</span>
<span class="text-purple-400">&lt;link</span>
 <span class="text-blue-400">rel</span>="<span class="text-teal-400">alternate</span>"
 <span class="text-blue-400">type</span>="<span class="text-teal-400">text/markdown</span>"
 <span class="text-blue-400">title</span>="<span class="text-teal-400">Markdown version</span>"
 <span class="text-blue-400">href</span>="<span class="text-teal-400">/blog/my-post.md</span>"
<span class="text-purple-400">/&gt;</span>`,

    chapter5_badge: `技能 4`,
    chapter5_h2: `写给人类的备注 <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">sr-only 视觉隐藏</span>`,
    chapter5_p: `当人把 URL 贴进对话框时，在 DOM 中加入视觉隐藏的地址提示。你可以查看 www.baklib.com 下每篇文章的源代码，会发现如下提示：`,
    chapter5_tip: `<span class="text-gray-500">示例：</span>
<span class="text-purple-400">&lt;div</span> <span class="text-blue-400">class</span>="<span class="text-teal-400 break-all whitespace-normal">absolute w-px h-px p-0 overflow-hidden whitespace-nowrap</span>" <span class="text-blue-400">aria-hidden</span>="<span class="text-teal-400">true</span>"<span class="text-purple-400">&gt;</span>
  A Markdown version of this page is
  available at {{ page.url }}.md
  — optimized for AI and LLM tools.
<span class="text-purple-400">&lt;/div&gt;</span>`,

    chapter6_badge: `技能 5`,
    chapter6_h2: `打包更完整正文 <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">/llms-full.txt</span>`,
    chapter6_p: `和 <code class="text-white/80">llms.txt</code> 的关系，类似“目录”和“全集”。前者给你指路，后者把更多内容一次性打包。更适合文档站。`,
    chapter6_tip: `<span class="text-purple-400">示例：</span><br/>见链接： <a href="https://www.baklib.com/llms-full.txt" target="_blank" class="text-blue-400 underline">https://www.baklib.com/llms-full.txt</a>`,

    chapter7_badge: `技能 6`,
    chapter7_h2: `按需供给 <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">Accept: text/markdown</span>`,
    chapter7_p: `同一信息，只是不同表示。用 HTTP 协议返回模型需要的高密度文本。`,
    chapter7_tip: `<span class="text-purple-400">示例代码：</span><br/>Accept: text/markdown, text/html;q=0.9`,

    chapter8_badge: `验证效果`,
    chapter8_h2: `不测就不知道 <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">服务端验证</span>`,
    chapter8_p: `记录 <code class="text-white/80">.md</code>、<code class="text-white/80">/llms.txt</code> 等端点谁来访问了。<br/>看 <code class="text-white/80">User-Agent</code>、<code class="text-white/80">Referer</code>。`,
    chapter8_tip: `<span class="font-bold">注意：</span>前端统计脚本对很多爬虫无效，最好看服务端或边缘日志。`,

    chapter9_badge: `结尾`,
    chapter9_h2: `规避不切实际的做法 <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">AI SEO?</span>`,
    chapter9_p: `很多“小技巧”看上去热闹：特殊 meta、隐藏指令、<code class="text-white/80">ai.txt</code> 提案。它们很难验证统一。`,
    chapter9_tip: `更现实的做法，是把正文写清楚，把落点做干净，把协议接上，用日志验证。这通常是最省事的路线。`,

    chapter10_badge: `总结`,
    chapter10_h2: `上线顺序建议`,
    chapter10_li1: `审计 <code class="text-white/80">robots.txt</code>，勿误伤 AI 爬虫。`,
    chapter10_li2: `添加根路径 <code class="text-white/80">/llms.txt</code> 和 <code class="text-white/80">/llms-full.txt</code>。`,
    chapter10_li3: `为各页面提供 <code class="text-white/80">.md</code> 路由。`,
    chapter10_li4: `加 <code class="text-white/80">&lt;link rel="alternate" type="text/markdown"&gt;</code> 等头。`,
    chapter10_li5: `实现 <code class="text-white/80">Accept: text/markdown</code> 内容协商。`,
    chapter10_li6: `对端点做分析与监测。`,
    chapter10_tip: `<span class="text-purple-400 font-bold">Tips:</span> 目标不是「操纵 AI」，而是像多年坚持语义化 HTML 一样，让内容对语言模型与代理也可读；其中大部分其实也是早该做好的 Web 卫生习惯。`,

    chapter11_badge: `推荐`,
    chapter11_h2: `为什么要推荐 Baklib`,
    chapter11_p: `作为一个 All-in-one 的数字体验管理平台，是企业独立营销首选，AI SEO 首选，网站建设首选。`,
    chapter11_li1: `全站实现 AI Ready，已从底层 MCP 设计到上层体验应用都贯穿大模型支持。`,
    chapter11_li2: `站点默认支持 <code class="text-white/80">llms.txt</code> 和 <code class="text-white/80">llms-full.txt</code>。`,
    chapter11_li3: `每篇文章都支持 <code class="text-white/80">.md</code> 格式，并且支持自定义输出（只需要给变量指定属性：<code class="text-purple-300">"to_markdown": true</code>）。`,
    chapter11_li4: `完全的低代码模板自定义，满足多语言、多场景个性化需求。`,
    chapter11_cta: `免费开始`,

    chapter12_h2: `更现实的做法`,
    chapter12_p: `把正文写清楚，<br/>把落点做干净，<br/>把协议接上，<br/>然后用日志验证。`,
    chapter12_cta: `开始你的改造`,
  },
  en: {
    chapter0_h1: `How to make your site<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">LLM-Visible</span>`,
    chapter0_p: `Users don't search anymore, they ask.<br/>Is your website ready for<br/>AI readers?`,
    
    chapter1_badge: `Step Zero`,
    chapter1_h2: `Don't Lock the Door <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block">robots.txt</span>`,
    chapter1_p: `If you have blocked crawlers like GPTBot and ClaudeBot, whatever you do next won't matter because there is no entry point.`,
    
    chapter2_badge: `Skill 1`,
    chapter2_h2: `Write a Manual <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">/llms.txt</span>`,
    chapter2_p: `Use Markdown to list "key pages you want AI to read first". Think of it as a README for the conversational AI era.`,
    chapter2_tip: `<span class="text-purple-400">Example:</span><br/>https://www.baklib.com/llms.txt`,

    chapter3_badge: `Skill 2`,
    chapter3_h2: `Double-Sided Printing <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">.md Routes</span>`,
    chapter3_p: `Add <code class="text-white/80">.md</code> to the same URL. This solves the "information density" problem, reducing context load for models.`,
    chapter3_tip: `<span class="text-purple-400">Example:</span><br/>
<span class="text-gray-500">Current blog URL:</span><br/>https://www.baklib.com/blog/llm-website-visibility<br/>
<span class="text-gray-500 mt-1 block">Corresponding .md URL:</span>
<span class="text-blue-400">https://www.baklib.com/blog/llm-website-visibility.md</span>`,

    chapter4_badge: `Skill 3`,
    chapter4_h2: `Hand Out Business Cards <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">&lt;link&gt; & HTTP Link</span>`,
    chapter4_p: `Declare the existence of <code class="text-white/80">.md</code> in the HTML <code class="text-white/80">&lt;head&gt;</code> and HTTP <code class="text-white/80">Link</code> headers to tell machines about an alternative reading method.`,
    chapter4_tip: `<span class="text-gray-500">Example:</span>
<span class="text-purple-400">&lt;link</span>
 <span class="text-blue-400">rel</span>="<span class="text-teal-400">alternate</span>"
 <span class="text-blue-400">type</span>="<span class="text-teal-400">text/markdown</span>"
 <span class="text-blue-400">title</span>="<span class="text-teal-400">Markdown version</span>"
 <span class="text-blue-400">href</span>="<span class="text-teal-400">/blog/my-post.md</span>"
<span class="text-purple-400">/&gt;</span>`,

    chapter5_badge: `Skill 4`,
    chapter5_h2: `Notes for Humans <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">sr-only Visual Hiding</span>`,
    chapter5_p: `When users copy-paste URLs into chat interfaces, include visually hidden hints in the DOM. Check the source code of any post on www.baklib.com to see this hint:`,
    chapter5_tip: `<span class="text-gray-500">Example:</span>
<span class="text-purple-400">&lt;div</span> <span class="text-blue-400">class</span>="<span class="text-teal-400 break-all whitespace-normal">absolute w-px h-px p-0 overflow-hidden whitespace-nowrap</span>" <span class="text-blue-400">aria-hidden</span>="<span class="text-teal-400">true</span>"<span class="text-purple-400">&gt;</span>
  A Markdown version of this page is
  available at {{ page.url }}.md
  — optimized for AI and LLM tools.
<span class="text-purple-400">&lt;/div&gt;</span>`,

    chapter6_badge: `Skill 5`,
    chapter6_h2: `Pack Full Content <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">/llms-full.txt</span>`,
    chapter6_p: `Its relationship with <code class="text-white/80">llms.txt</code> is like "Table of Contents" vs "Complete Works". The former is a map, the latter bundles everything at once. Best suited for docs sites.`,
    chapter6_tip: `<span class="text-purple-400">Example:</span><br/>See link: <a href="https://www.baklib.com/llms-full.txt" target="_blank" class="text-blue-400 underline">https://www.baklib.com/llms-full.txt</a>`,

    chapter7_badge: `Skill 6`,
    chapter7_h2: `On-Demand Supply <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">Accept: text/markdown</span>`,
    chapter7_p: `Same information, different representation. Use HTTP protocol to return the high-density text needed by models.`,
    chapter7_tip: `<span class="text-purple-400">Example Code:</span><br/>Accept: text/markdown, text/html;q=0.9`,

    chapter8_badge: `Verify Results`,
    chapter8_h2: `Test to Know <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">Server-side Verification</span>`,
    chapter8_p: `Log who visits the <code class="text-white/80">.md</code> and <code class="text-white/80">/llms.txt</code> endpoints.<br/>Check <code class="text-white/80">User-Agent</code> and <code class="text-white/80">Referer</code>.`,
    chapter8_tip: `<span class="font-bold">Note:</span> Frontend analytics scripts usually don't work for crawlers. It's best to rely on server or edge logs.`,

    chapter9_badge: `Ending`,
    chapter9_h2: `Avoid Unrealistic Approaches <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl font-mono mt-2 block tracking-normal">AI SEO?</span>`,
    chapter9_p: `Many "tricks" look exciting: special meta tags, hidden prompts in comments, various <code class="text-white/80">ai.txt</code> proposals. They are hard to verify and unify.`,
    chapter9_tip: `A more realistic approach is to write clear content, maintain clean endpoints, support standard protocols, and verify with logs. This is usually the path of least resistance.`,

    chapter10_badge: `Summary`,
    chapter10_h2: `Deployment Checklist`,
    chapter10_li1: `Audit <code class="text-white/80">robots.txt</code>, avoid accidental AI crawler blocks.`,
    chapter10_li2: `Add <code class="text-white/80">/llms.txt</code> and <code class="text-white/80">/llms-full.txt</code> at root.`,
    chapter10_li3: `Provide <code class="text-white/80">.md</code> routes for individual pages.`,
    chapter10_li4: `Add <code class="text-white/80">&lt;link rel="alternate" type="text/markdown"&gt;</code> and HTTP headers.`,
    chapter10_li5: `Implement <code class="text-white/80">Accept: text/markdown</code> content negotiation.`,
    chapter10_li6: `Analyze and monitor endpoints.`,
    chapter10_tip: `<span class="text-purple-400 font-bold">Tips:</span> The goal isn't to "manipulate AI", but to make your content machine and agent readable—just like adhering to semantic HTML for years. Most of this is simply good Web Hygiene.`,

    chapter11_badge: `Recommendation`,
    chapter11_h2: `Why Recommend Baklib?`,
    chapter11_p: `As an All-in-one digital experience management platform, it's the top choice for independent enterprise marketing, AI SEO, and website building.`,
    chapter11_li1: `Fully "AI Ready"—LLM support is integrated from foundational MCP design to upper-level experience applications.`,
    chapter11_li2: `Default site support for <code class="text-white/80">llms.txt</code> and <code class="text-white/80">llms-full.txt</code>.`,
    chapter11_li3: `Every article supports <code class="text-white/80">.md</code> format with customizable outputs (by assigning variable attribute: <code class="text-purple-300">"to_markdown": true</code>).`,
    chapter11_li4: `Fully low-code template customization to meet multilingual and customized scenario needs.`,
    chapter11_cta: `Start for Free`,

    chapter12_h2: `A Realistic Approach`,
    chapter12_p: `Write clear content,<br/>clean up your endpoints,<br/>setup protocols,<br/>and verify via logs.`,
    chapter12_cta: `Start Modifying`,
  }
};
