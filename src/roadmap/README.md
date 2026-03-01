---
title: 学习路线
icon: route
---

# LLM 学习路线

::: tip 说明
这是一份 LLM 学习路线图，从基础到进阶逐步深入。标注 ✅ 的是已有笔记的内容，点击可直接跳转。
:::

## 阶段一：基础入门

打好数学和深度学习基础，理解 Transformer 架构。

<div class="vp-card-container">

<VPCard
  title="1. 线性代数与概率论基础"
  desc="矩阵运算、特征分解、概率分布 —— LLM 的数学基石"
  link=""
/>

<VPCard
  title="2. 深度学习基础"
  desc="前馈网络、反向传播、优化器、正则化"
  link=""
/>

<VPCard
  title="3. Transformer 架构"
  desc="Self-Attention、Positional Encoding、Encoder-Decoder"
  link=""
/>

</div>

## 阶段二：注意力机制深入

理解注意力机制的各种变体和优化。

<div class="vp-card-container">

<VPCard
  title="✅ 4. 多头注意力实现"
  desc="从零实现 Multi-Head Attention"
  link="/blogs/多头注意力实现"
/>

<VPCard
  title="✅ 5. MLA 多头潜在注意力"
  desc="DeepSeek-V2 的高效注意力变体"
  link="/blogs/MLA"
/>

<VPCard
  title="✅ 6. Online Softmax"
  desc="Safe Softmax 到 Online Softmax 的演进"
  link="/blogs/Online Softmax"
/>

<VPCard
  title="✅ 7. Flash Attention"
  desc="IO-Aware 精确注意力，大幅降低显存"
  link="/blogs/flash-attention"
/>

</div>

## 阶段三：训练与微调

掌握大模型的训练范式与微调技巧。

<div class="vp-card-container">

<VPCard
  title="8. 预训练技术"
  desc="自回归预训练、数据处理、训练策略 —— 待补充"
  link=""
/>

<VPCard
  title="✅ 9. Linux 下微调 LLM"
  desc="LoRA/QLoRA 微调的完整实战流程"
  link="/blogs/linux下微调LLM"
/>

<VPCard
  title="✅ 10. LLM 显存占用分析"
  desc="训练和推理时的显存开销详细计算"
  link="/blogs/LLM显存占用"
/>

</div>

## 阶段四：推理优化

深入推理阶段的性能优化。

<div class="vp-card-container">

<VPCard
  title="✅ 11. Prefill 与 Decoding"
  desc="理解推理两阶段及优化方向"
  link="/blogs/Prefill和Decoding"
/>

<VPCard
  title="12. KV Cache 优化"
  desc="PagedAttention、连续批处理 —— 待补充"
  link=""
/>

<VPCard
  title="13. 量化与蒸馏"
  desc="INT8/INT4 量化、知识蒸馏 —— 待补充"
  link=""
/>

</div>

## 阶段五：应用系统

构建基于 LLM 的实际应用系统。

<div class="vp-card-container">

<VPCard
  title="✅ 14. RAG 检索增强生成"
  desc="RAG 系统的架构、检索策略与实现"
  link="/blogs/RAG"
/>

<VPCard
  title="✅ 15. 意图识别"
  desc="对话系统中的意图识别技术"
  link="/blogs/意图识别"
/>

<VPCard
  title="✅ 16. 商品推荐 Agent"
  desc="基于 LLM 的智能体设计实践"
  link="/blogs/商品推荐agent"
/>

<VPCard
  title="✅ 17. 上下文工程"
  desc="如何更好地管理 LLM 的上下文"
  link="/blogs/上下文工程"
/>

</div>

---

::: info 持续更新
学习路线将持续完善，欢迎关注更新。空链接的卡片表示计划中但尚未完成的内容。
:::
