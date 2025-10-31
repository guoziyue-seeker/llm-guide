## linux下微调LLM

切换下载来源

```shell
conda activate vllm_env
conda activate train_lora

切换下载来源
export USE_MODELSCOPE_HUB=1

持久化配置
echo 'export USE_MODELSCOPE_HUB=1' >> ~/.bashrc
source ~/.bashrc

自定义下载目录
export MODELSCOPE_CACHE="/autodl-tmp/cache/modelscope/"  
export MODELSCOPE_MODULES_CACHE="/autodl-tmp/cache/modelscope_modules/"
```

