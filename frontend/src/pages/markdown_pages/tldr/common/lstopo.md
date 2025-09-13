---
title: "Lstopo - Show Hardware Topology | Free DevTools"
name: lstopo
path: /freedevtools/tldr/common/lstopo
canonical: "https://hexmos.com/freedevtools/tldr/common/lstopo/"
description: "Show hardware topology with Lstopo. Visualize system hardware components and their relationships. Free online tool, no registration required."
category: common
keywords:
- hardware topology viewer
- lstopo topology display
- system hardware information
- Linux hardware topology
- CPU topology visualization
- PCI device listing
- NUMA node display
- hardware resource allocation
- graphical topology representation
- machine architecture overview
features:
- Display system hardware topology graphically
- Show physical indices as seen by the OS
- Output topology in various formats (XML, PDF, PNG, etc.)
- Summarize or show full hardware topology details
- Represent topology in monochrome or greyscale
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lstopo

> Show the hardware topology of the system.
> More information: <https://manned.org/lstopo>.

- Show the summarized system topology in a graphical window (or print to console if no graphical display is available):

`lstopo`

- Show the full system topology without summarizations:

`lstopo --no-factorize`

- Show the summarized system topology with only physical indices (i.e. as seen by the OS):

`lstopo {{[-p|--physical]}}`

- Write the full system topology to a file in the specified format:

`lstopo --no-factorize {{[--of|--output-format]}} {{console|ascii|tex|fig|svg|pdf|ps|png|xml}} {{path/to/file}}`

- Output in monochrome or greyscale:

`lstopo --palette {{none|grey}}`
