import { sidebar } from "vuepress-theme-hope";

import { aboutTheAuthor } from "./about-the-author.js";
import { blogs } from "./blogs.js";

export default sidebar({
  "/blogs/": blogs,
  "/about-the-author/": aboutTheAuthor,
  "/roadmap/": "structure",
  "/resources/": "structure",
  "/projects/": "structure",
  "/": [],
});
