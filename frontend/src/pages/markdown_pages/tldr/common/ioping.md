---
title: "Monitor I/O Latency - Check Disk Speed | Online Free DevTools by Hexmos"
name: ioping
path: /freedevtools/tldr/common/ioping
canonical: "https://hexmos.com/freedevtools/tldr/common/ioping/"
description: "Monitor I/O latency with ioping. Analyze disk read/write performance and identify bottlenecks. Free online tool, no registration required."
category: common
keywords:
- disk I/O latency monitor
- storage performance analyzer
- disk speed test
- I/O benchmark tool
- disk read/write test
- linux disk performance
- ioping command line
- server I/O monitoring
- storage latency check
- disk seek time measurement
features:
- Measure disk I/O latency in real-time
- Analyze disk seek rates
- Analyze sequential disk speed
- Test I/O performance on specific directories
- Customize request size and count
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ioping

> Monitor I/O latency in real time.
> More information: <https://github.com/koct9i/ioping>.

- Show disk I/O latency using the default values and the current directory:

`ioping .`

- Measure latency on /tmp using 10 requests of 1 megabyte each:

`ioping {{[-c|-count]}} 10 {{[-s|-size]}} 1M /tmp`

- Measure disk seek rate on `/dev/sdX`:

`ioping {{[-R|-rapid]}} {{/dev/sdX}}`

- Measure disk sequential speed on `/dev/sdX`:

`ioping {{[-RL|-rapid -linear]}} {{/dev/sdX}}`
