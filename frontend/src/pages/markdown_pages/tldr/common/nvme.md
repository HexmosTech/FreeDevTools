---
title: "NVMe Control - Manage Storage Devices | Online Free DevTools by Hexmos"
name: nvme
path: /freedevtools/tldr/common/nvme
canonical: "https://hexmos.com/freedevtools/tldr/common/nvme/"
description: "Control NVMe storage devices with NVMe tool. Monitor drive health, retrieve SMART logs, and list connected devices. Free online tool, no registration required."
category: common
keywords:
- nvme command
- nvme smart logs
- nvme list devices
- storage device control
- linux nvme
- nvme monitoring
- nvme health check
- pcie device control
- nvme cli
- block device information
features:
- List all NVMe devices connected to the system
- Display detailed SMART logs for a specified NVMe device
- Retrieve device information such as model, firmware version, and serial number
- Monitor drive health status, including temperature and usage statistics
- Diagnose potential issues with NVMe storage devices
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nvme

> NVMe storage user space utility.
> More information: <https://github.com/linux-nvme/nvme-cli>.

- List all nvme devices:

`sudo nvme list`

- Show device information:

`sudo nvme smart-log {{device}}`
