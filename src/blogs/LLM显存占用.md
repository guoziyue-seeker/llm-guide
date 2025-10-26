---
title: LLM显存占用
date: 2025-10-25
category: 面试
---

## LLM显存占用

### 推理时显存占用

以float16为例

参数：2Φ

KVcache：2byte*（K+V）
$$
2Φ + 2*2*b(s + n)hl
$$


Φ: 参数量

b：batch_size

s：输入序列长度

n：输出序列长度

h：隐藏层维度（d_model）

l：transformer层数

### 训练时显存占用

以混合梯度计算为例（float32 + float16）

参数：4Φ + 2Φ

梯度：4Φ + 2Φ

优化器：4Φ + 4Φ

激活值：**self-attention** + **MLP**

```latex
$$
20Φ+(34bsh+5bs^2a)∗l
$$
```

Φ: 参数量

b：batch_size

s：上下文长度

h：隐藏层维度（d_model）

a：attention头数

l：transformer层数