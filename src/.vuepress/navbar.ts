import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "学习博客", icon: "book", link: "/blogs/" },
  {
    text: "关于",
    icon: "circle-info",
    children: [
      { text: "个人介绍", icon: "user", link: "/about-the-author/" },
      { text: "更新历史", icon: "history", link: "/timeline/" },
    ],
  },
]);
