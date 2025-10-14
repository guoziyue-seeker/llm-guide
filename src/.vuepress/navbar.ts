import { navbar } from "vuepress-theme-hope";

export default navbar([
  {text: "技术体系", icon: "book", link: "/technical-system/"},
  {text: "开源项目", icon: "tool", link: "/open-source-project/"},
  {text: "技术书籍", icon: "book", link: "/books/"},
  {text: "学习博客", icon: "book", link: "/blogs/"},
  {
    text: "网站相关",
    icon: "about",
    children: [
      { text: "关于作者", icon: "zuozhe", link: "/about-the-author/" },
      {
        text: "更新历史",
        icon: "history",
        link: "/timeline/",
      },
    ],
  },
]);
