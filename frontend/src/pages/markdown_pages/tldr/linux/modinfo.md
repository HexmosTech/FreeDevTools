---
title: "Modinfo - Extract Kernel Module Info | Free DevTools"
name: modinfo
path: /freedevtools/tldr/linux/modinfo
canonical: "https://hexmos.com/freedevtools/tldr/linux/modinfo/"
description: "Extract Linux kernel module information with Modinfo. Inspect module attributes, versions, and dependencies for effective system management. Free online tool, no registration required."
category: linux
keywords:
- linux kernel module information
- module attribute extraction
- kernel module metadata
- linux module details
- modinfo command linux
- kernel module dependencies
- system module inspection
- kernel module version
- module author information
- linux system administration
features:
- List all attributes of a Linux kernel module
- Display specific module attributes
- Extract kernel module version information
- Determine module license details
- Show module dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# modinfo

> Extract information about a Linux kernel module.
> See also: `kmod` for other module management commands.
> More information: <https://manned.org/modinfo>.

- List all attributes of a kernel module:

`modinfo {{kernel_module}}`

- List the specified attribute only:

`modinfo {{[-F|--field]}} {{author|description|license|parm|filename|version|...}} {{kernel_module}}`
