---
title: "Diagnose DRM - Analyze KMS with modetest | Free DevTools"
name: modetest
path: /freedevtools/tldr/unknown/modetest
canonical: "https://hexmos.com/freedevtools/tldr/unknown/modetest/"
description: "Analyze Kernel Mode Setting with modetest, a Direct Rendering Manager diagnostics tool for display configuration. Inspect connectors and modes easily. Free online tool, no registration required."
category: unknown
keywords:
- DRM diagnostics
- KMS analysis
- modetest command
- display configuration
- connector modes
- video mixer utility
- direct rendering manager
- kernel mode setting
- linux display tools
- Xilinx video tools
features:
- List available display connectors
- Display modes for specific drivers
- Set resolution of display connectors
- Diagnose direct rendering manager issues
- Analyze kernel mode setting configurations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# modetest

> Diagnose Direct Rendering Manager and Kernel Mode Setting.
> More information: <https://xilinx-wiki.atlassian.net/wiki/spaces/A/pages/18841850/Video_Mixer#modetest>.

- List connectors and their available modes for a specific driver:

`modetest -M {{mgag200}} -c`

- Set the resolution of a connector:

`sudo modetest -M {{mgag200}} -s {{connector_id}}:{{1600}}x{{1200}}`
