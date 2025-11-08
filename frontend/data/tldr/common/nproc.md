---
title: "Display CPU Cores - Control Processor Count | Online Free DevTools by Hexmos"
name: nproc
path: "/freedevtools/tldr/common/nproc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nproc/"
description: "Display CPU core count with nproc. Determine available processors and control processor usage on Linux/macOS systems. Free online tool, no registration required."
category: common
keywords:
- CPU core count
- processor count
- nproc command
- Linux CPU information
- macOS CPU information
- command line CPU
- available processors
- system processing units
- coreutils nproc
- terminal processor information
features:
- Display the number of available processing units
- Show all installed processing units, including inactive ones
- Subtract a specified number from the core count
- Determine CPU core count on Linux
- Determine CPU core count on macOS
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nproc

> Print the number of processing units (normally CPUs) available.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/nproc-invocation.html>.

- Display the number of available processing units:

`nproc`

- Display the number of installed processing units, including any inactive ones:

`nproc --all`

- If possible, subtract a given number of units from the returned value:

`nproc --ignore {{count}}`
