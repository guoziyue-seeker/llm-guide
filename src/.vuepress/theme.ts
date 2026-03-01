import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://guoziyue-seeker.github.io",

  author: {
    name: "guoziyue-seeker",
    url: "https://github.com/guoziyue-seeker",
  },

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "https://github.com/guoziyue-seeker",

  docsDir: "src",

  navbar,
  sidebar,

  displayFooter: true,
  footer: "© 2024 guoziyue-seeker",

  blog: {
    intro: "/about-the-author/",
    description: "一个 LLM 学习者",
    medias: {
      GitHub: "https://github.com/guoziyue-seeker",
    },
  },

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    math: {
      type: "katex",
    },
    align: true,
    codeTabs: true,
    gfm: true,
    tasklist: true,
  },

  plugins: {
    blog: true,

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    search: {
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
    },
  },
});
