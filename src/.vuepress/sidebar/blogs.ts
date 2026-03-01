import { arraySidebar } from "vuepress-theme-hope";

export const blogs = arraySidebar([
    {
        text: "注意力机制",
        icon: "lightbulb",
        collapsible: true,
        children: [
            { text: "多头注意力实现", link: "多头注意力实现" },
            { text: "MLA（多头潜在注意力）", link: "MLA" },
            { text: "Flash Attention", link: "flash-attention" },
            { text: "Online Softmax", link: "Online Softmax" },
        ],
    },
    {
        text: "推理优化",
        icon: "bolt",
        collapsible: true,
        children: [
            { text: "Prefill 与 Decoding", link: "Prefill和Decoding" },
            { text: "LLM 显存占用", link: "LLM显存占用" },
        ],
    },
    {
        text: "RAG & Agent",
        icon: "robot",
        collapsible: true,
        children: [
            { text: "RAG 检索增强生成", link: "RAG" },
            { text: "意图识别", link: "意图识别" },
            { text: "商品推荐 Agent", link: "商品推荐agent" },
        ],
    },
    {
        text: "工程实践",
        icon: "screwdriver-wrench",
        collapsible: true,
        children: [
            { text: "Linux 下微调 LLM", link: "linux下微调LLM" },
            { text: "京东京言核心模块与工作流", link: "京东京言核心模块与工作流" },
        ],
    },
    {
        text: "上下文工程",
        icon: "layer-group",
        collapsible: true,
        children: [
            { text: "上下文工程", link: "上下文工程" },
            { text: "上下文工程-AI", link: "上下文工程-AI" },
        ],
    },
]);
