---
title: "Eject GPU - Safely Eject GPU on macOS | Online Free DevTools by Hexmos"
name: safeejectgpu
path: /freedevtools/tldr/osx/safeejectgpu
canonical: "https://hexmos.com/freedevtools/tldr/osx/safeejectgpu/"
description: "Safely eject a GPU with SafeEjectGPU on macOS. Manage GPU devices and applications using the command line. Free online tool, no registration required."
category: osx
keywords:
- macOS GPU Eject
- GPU Safe Eject
- SafeEjectGPU Command
- macOS GPU Management
- GPU Device Control
- GPU Application List
- GPU Status Check
- Command Line GPU
- GPU Eject Utility
- macOS GPU Tools
features:
- Safely eject GPUs on macOS
- List all attached GPU devices
- Display applications using a specific GPU
- Check the current status of a GPU
- Launch an application on a designated GPU
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# SafeEjectGPU

> Eject a GPU safely.
> More information: <https://keith.github.io/xcode-man-pages/SafeEjectGPU.8.html>.

- Eject all GPUs:

`SafeEjectGPU Eject`

- List all GPUs attached:

`SafeEjectGPU gpus`

- List apps using a GPU:

`SafeEjectGPU gpuid {{GPU_ID}} apps`

- Get the status of a GPU:

`SafeEjectGPU gpuid {{GPU_ID}} status`

- Eject a GPU:

`SafeEjectGPU gpuid {{GPU_ID}} Eject`

- Launch an app on a GPU:

`SafeEjectGPU gpuid {{GPU_ID}} LaunchOnGPU {{path/to/App.app}}`
