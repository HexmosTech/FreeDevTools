---
title: "Nvidia-smi MIG - Manage GPUs | Online Free DevTools by Hexmos"
name: nvidia-smi-mig
path: "/freedevtools/tldr/nvidia/nvidia-smi-mig/"
canonical: "https://hexmos.com/freedevtools/tldr/nvidia/nvidia-smi-mig/"
description: "Manage Nvidia Multi-Instance GPUs with nvidia-smi mig. Control GPU instances and create compute instances using the command line. Free online tool, no registration required."
category: common
keywords:
- nvidia-smi mig control
- gpu instance manager
- nvidia mig configuration
- linux gpu management
- command line gpu control
- nvidia smi command
- multi-instance gpu setup
- gpu compute instance creation
- nvidia gpu partitioning
- linux nvidia-smi
features:
- Create compute instances on GPUs
- List available GPU instances
- Display help information for mig
- Manage Nvidia Multi-Instance GPUs
- Control GPU partitioning through command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nvidia-smi mig

> Manage Nvidia multi-instance GPUs.
> More information: <https://docs.nvidia.com/datacenter/tesla/mig-user-guide/index.html>.

- Create a compute instance from device 0:

`nvidia-smi mig {{[-cgi|--create-gpu-instance]}} {{0}} {{[-C|--default-compute-instance]}}`

- List GPU instances:

`nvidia-smi mig {{[-lgi|--list-gpu-instances]}}`

- Display help:

`nvidia-smi mig {{[-h|--help]}}`
