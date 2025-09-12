---
title: "Accelerate - Run PyTorch Models Easily | Free DevTools"
name: accelerate
path: /freedevtools/tldr/common/accelerate
canonical: "https://hexmos.com/freedevtools/tldr/common/accelerate/"
description: "Accelerate PyTorch model training with Accelerate. Distribute your models across CPUs and GPUs effortlessly. Free online tool, no registration required."
category: common
keywords:
- accelerate pytorch training
- distributed pytorch training
- pytorch multi GPU
- pytorch cpu training
- accelerate config file
- accelerate estimate memory
- pytorch accelerate launch
- accelerate environment information
- accelerate distributed training
- accelerate pytorch library
features:
- Distribute PyTorch models across various hardware configurations.
- Estimate GPU memory requirements for Hugging Face models.
- Configure Accelerate settings interactively via command line.
- Test Accelerate configurations for proper functionality.
- Launch and run PyTorch models using the Accelerate library.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# accelerate

> A library that enables the same PyTorch code to be run across any distributed configuration.
> More information: <https://huggingface.co/docs/accelerate/index>.

- Print environment information:

`accelerate env`

- Interactively create a configuration file:

`accelerate config`

- Print the estimated GPU memory cost of running a Hugging Face model with different data types:

`accelerate estimate-memory {{name/model}}`

- Test an Accelerate configuration file:

`accelerate test --config_file {{path/to/config.yaml}}`

- Run a model on CPU with Accelerate:

`accelerate launch {{path/to/script.py}} {{--cpu}}`

- Run a model on multi-GPU with Accelerate, with 2 machines:

`accelerate launch {{path/to/script.py}} --multi_gpu --num_machines 2`
