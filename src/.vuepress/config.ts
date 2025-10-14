import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/llm-guide/",

  lang: "zh-CN",
  title: "LLMGuide",
  description: "「LLM 学习指北 + LLM 面试指南」",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
