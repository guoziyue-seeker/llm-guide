import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "学习博客", icon: "book", link: "/blogs/" },
  { text: "学习路线", icon: "route", link: "/roadmap/" },
  { text: "资源导航", icon: "compass", link: "/resources/" },
  { text: "项目实践", icon: "laptop-code", link: "/projects/" },
  {
    text: "关于",
    icon: "circle-info",
    children: [
      { text: "个人介绍", icon: "user", link: "/about-the-author/" },
      { text: "更新历史", icon: "clock-rotate-left", link: "/timeline/" },
    ],
  },
]);
