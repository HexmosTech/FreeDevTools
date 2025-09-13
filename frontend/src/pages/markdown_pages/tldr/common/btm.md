---
title: "Btm - Monitor System Resources | Free DevTools"
name: btm
path: /freedevtools/tldr/common/btm
canonical: "https://hexmos.com/freedevtools/tldr/common/btm/"
description: "Monitor system resources effectively with Btm. Observe CPU, memory, disk I/O, and network usage in a graphical terminal interface. Free online tool, no registration required."
category: common
keywords:
- system monitor
- resource monitor
- performance monitor
- terminal monitor
- cpu usage
- memory usage
- disk I/O
- network usage
- linux monitor
- macos monitor
features:
- Display CPU, memory, disk, and network metrics
- Show system temperatures and process information
- Enable a basic mode for minimal resource usage
- Customize chart marker styles
- Monitor battery charge and health status
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# btm

> An alternative to `top`.
> Aims to be lightweight, cross-platform and more graphical than `top`.
> More information: <https://github.com/ClementTsang/bottom>.

- Show the default layout (CPU, memory, temperatures, disk, network, and processes):

`btm`

- Enable basic mode, removing charts and condensing data (similar to `top`):

`btm --basic`

- Use big dots instead of small ones in charts:

`btm --dot_marker`

- Show also battery charge and health status:

`btm --battery`

- Refresh every 250 milliseconds and show the last 30 seconds in the charts:

`btm --rate 250 --default_time_value 30000`
