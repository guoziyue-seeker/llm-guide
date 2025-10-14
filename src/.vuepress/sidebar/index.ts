import { sidebar } from "vuepress-theme-hope";

// import { aboutTheAuthor } from "./about-the-author.js";
import { aboutTheAuthor } from "./about-the-author.js";
import { blogs } from "./blogs.js";
// import { openSourceProject } from "./open-source-project.js";

export default sidebar({
  // "/open-source-project/": openSourceProject,
  "/blogs/": blogs,
  "/about-the-author/": aboutTheAuthor,
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
