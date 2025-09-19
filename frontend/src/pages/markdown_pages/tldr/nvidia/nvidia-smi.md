---
title: "Control NVIDIA GPUs - Monitor and Manage | Online Free DevTools by Hexmos"
name: nvidia-smi
path: /freedevtools/tldr/nvidia/nvidia-smi
canonical: "https://hexmos.com/freedevtools/tldr/nvidia/nvidia-smi/"
description: "Control NVIDIA GPUs with nvidia-smi. Monitor performance, manage processes, and get detailed GPU information. Free online tool, no registration required."
category: common
keywords:
- nvidia-smi command
- GPU monitoring tool
- NVIDIA GPU management
- CUDA device control
- Linux GPU statistics
- nvidia-smi usage
- GPU process monitor
- nvidia-smi examples
- GPU performance analysis
- NVIDIA system management
features:
- Display GPU device information
- Monitor GPU utilization in real-time
- List processes using GPUs
- Control GPU device parameters
- Query detailed GPU metrics
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nvidia-smi

> Aid the management and monitoring of NVIDIA GPU devices.
> More information: <https://developer.nvidia.com/nvidia-system-management-interface>.

- Display information on all available GPUs and processes using them:

`nvidia-smi`

- Display more detailed GPU information:

`nvidia-smi {{[-q|--query]}}`

- Monitor overall GPU usage with 1-second update interval:

`nvidia-smi dmon`
