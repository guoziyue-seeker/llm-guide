---
title: 学习博客
icon: book
article: false
---

# 学习博客

记录在 LLM 领域的学习笔记与技术思考，内容按主题分类整理。

## 注意力机制

深入理解 Transformer 的核心 —— 注意力机制的原理与优化实现。

<div class="vp-card-container">

<VPCard
  title="多头注意力实现"
  desc="从零实现 Multi-Head Attention，理解 Q/K/V 计算流程"
  link="多头注意力实现"
/>

<VPCard
  title="MLA（多头潜在注意力）"
  desc="DeepSeek-V2 提出的高效注意力变体，大幅压缩 KV Cache"
  link="MLA"
/>

<VPCard
  title="Flash Attention"
  desc="IO-Aware 的精确注意力算法，显著降低显存占用"
  link="flash-attention"
/>

<VPCard
  title="Online Softmax"
  desc="理解 Safe Softmax 到 Online Softmax 的演进，FlashAttention 的数学基础"
  link="Online Softmax"
/>

</div>

## 推理优化

关注 LLM 推理阶段的性能瓶颈与优化策略。

<div class="vp-card-container">

<VPCard
  title="Prefill 与 Decoding"
  desc="理解 LLM 推理的两个核心阶段及其优化方向"
  link="Prefill和Decoding"
/>

<VPCard
  title="LLM 显存占用"
  desc="详细分析模型推理和训练时的显存开销计算"
  link="LLM显存占用"
/>

</div>

## RAG & Agent

检索增强生成与智能体系统的设计实践。

<div class="vp-card-container">

<VPCard
  title="RAG 检索增强生成"
  desc="RAG 系统的核心架构、检索策略与工程实现"
  link="RAG"
/>

<VPCard
  title="意图识别"
  desc="对话系统中的意图识别技术与实现方案"
  link="意图识别"
/>

<VPCard
  title="商品推荐 Agent"
  desc="基于 LLM 的商品推荐智能体设计"
  link="商品推荐agent"
/>

</div>

## 工程实践

模型训练、微调和落地部署的实战经验。

<div class="vp-card-container">

<VPCard
  title="Linux 下微调 LLM"
  desc="在 Linux 环境下进行大模型微调的完整流程"
  link="linux下微调LLM"
/>

<VPCard
  title="京东京言核心模块与工作流"
  desc="京东京言 LLM 平台的核心架构解析"
  link="京东京言核心模块与工作流"
/>

</div>

## 上下文工程

探索如何更好地管理和优化 LLM 的上下文。

<div class="vp-card-container">

<VPCard
  title="上下文工程"
  desc="上下文工程的核心概念与实践方法"
  link="上下文工程"
/>

<VPCard
  title="上下文工程-AI"
  desc="AI 视角下的上下文工程思考"
  link="上下文工程-AI"
/>

</div>
