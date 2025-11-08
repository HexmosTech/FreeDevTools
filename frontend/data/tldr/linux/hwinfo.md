---
title: "Hardware Info Probe - Investigate System Hardware | Online Free DevTools by Hexmos"
name: hwinfo
path: "/freedevtools/tldr/linux/hwinfo/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/hwinfo/"
description: "Investigate system hardware details with hwinfo.  Retrieve comprehensive information about CPU, memory, disk, and other components. Free online tool, no registration required."
category: linux
keywords:
  - hardware information linux
  - system hardware probe
  - linux hardware details
  - hwinfo command
  - hardware diagnostics linux
  - system information command
  - inspect hardware linux
  - detailed hardware report
  - get hardware specs linux
  - command-line hardware tool
features:
  - Displays comprehensive hardware information.
  - Provides detailed reports on specific components.
  - Offers a concise summary mode for quick overview.
  - Allows saving the output to a file for later analysis.
  - Supports various hardware components (CPU, memory, disk, network, etc.).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hwinfo

> Probe for the hardware present in the system.
> More information: <https://manpages.opensuse.org/hwinfo/hwinfo.8.en.html>.

- Display all available hardware information:

`hwinfo`

- Display information about a specific hardware component:

`hwinfo --{{cpu|memory|disk|gfxcard|network|usb|pci|keyboard|mouse|monitor|sound|fingerprint|...}}`

- Display information about a specific hardware component succinctly:

`hwinfo {{--component}} --short`

- Write all hardware information to a file:

`hwinfo --all --log {{path/to/file}}`

- Display help:

`hwinfo --help`
