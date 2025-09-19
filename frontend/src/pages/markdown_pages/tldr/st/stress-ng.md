---
title: "Stress Linux System - Load Test with stress-ng | Online Free DevTools by Hexmos"
name: stress-ng
path: "/freedevtools/tldr/st/stress-ng"
canonical: "https://hexmos.com/freedevtools/tldr/st/stress-ng/"
description: "Load test with stress-ng! Stress your Linux system's CPU, memory, and I/O. A free online tool for hardware validation and system stability testing, no registration required."
category: common
keywords:
- linux stress test
- system load testing
- cpu stress test
- memory stress test
- io stress test
- hardware validation linux
- stress-ng linux
- benchmark linux system
- stability test linux
- linux performance test
features:
- Stress CPU cores with configurable worker counts
- Stress virtual memory allocation and deallocation
- Generate I/O load on the system
- Run all stress tests simultaneously
- Control test duration with timeout options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stress-ng

> Load and stress a Linux system in various ways (CPU, memory, I/O, etc.).
> Useful for benchmarking, hardware validation, and stability testing.
> More information: <https://manned.org/stress-ng>.

- Stress all CPUs with 4 workers for 60 seconds:

`stress-ng {{[-c|--cpu]}} 4 {{[-t|--timeout]}} 60s`

- Stress virtual memory with 2 workers for 30 seconds:

`stress-ng {{[-m|--vm]}} 2 --vm-bytes {{512M}} {{[-t|--timeout]}} 30s`

- Stress the I/O subsystem with 3 workers for 45 seconds:

`stress-ng {{[-i|--io]}} 3 {{[-t|--timeout]}} 45s`

- Run all stress tests for 2 minutes:

`stress-ng {{[-a|--all]}} {{1}} {{[-t|--timeout]}} 2m`
