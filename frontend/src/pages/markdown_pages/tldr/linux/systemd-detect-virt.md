---
title: "Detect Virtualization with systemd-detect-virt | Online Free DevTools by Hexmos"
name: systemd-detect-virt
path: /freedevtools/tldr/linux/systemd-detect-virt
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-detect-virt/"
description: "Detect virtualization environments quickly using systemd-detect-virt. Identify VMs and containers easily with this Linux command. Free online tool, no registration required."
category: linux
keywords:
  - systemd virtualization detection
  - linux virtualization check
  - systemd-detect-virt command
  - virtual machine detection linux
  - container detection linux
  - detect virtual environment linux
  - systemd container check
  - vm detection linux
  - hardware virtualization check linux
  - systemd environment detection linux
features:
  - Detects if the system is running within a virtual machine (VM).
  - Identifies if the system is running inside a container.
  - Provides detailed output showing detected virtualization technologies.
  - Offers a quiet mode for silent detection without console output.
  - Supports separate detection of VM or container virtualization.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-detect-virt

> Detect execution in a virtualized environment.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-detect-virt.html>.

- List detectable virtualization technologies:

`systemd-detect-virt --list`

- Detect virtualization, print the result and return a zero status code when running in a VM or a container, and a non-zero code otherwise:

`systemd-detect-virt`

- Silently check without printing anything:

`systemd-detect-virt {{[-q|--quiet]}}`

- Only detect container virtualization:

`systemd-detect-virt {{[-c|--container]}}`

- Only detect hardware virtualization:

`systemd-detect-virt {{[-v|--vm]}}`
