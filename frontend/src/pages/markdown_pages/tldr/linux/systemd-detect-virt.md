---
title: "Detect Virtualization - Systemd Tool | Online Free DevTools by Hexmos"
name: systemd-detect-virt
path: /freedevtools/tldr/linux/systemd-detect-virt
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-detect-virt/"
description: "Detect virtualization environments with systemd-detect-virt.  Identify VMs and containers quickly and easily. Free online tool, no registration required."
category: linux
keywords:
  - systemd virtualization detection
  - linux virtualization check
  - systemd-detect-virt command
  - virtual machine detection linux
  - container detection systemd
  - detect virtual environment linux
  - systemd container check
  - vm detection tool linux
  - hardware virtualization check
  - systemd environment detection
features:
  - Detects if the system is running inside a virtual machine (VM).
  - Detects if the system is running inside a container.
  - Provides detailed output listing detected virtualization technologies.
  - Offers quiet mode for silent checking without output.
  - Allows for separate detection of VM or container virtualization.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
