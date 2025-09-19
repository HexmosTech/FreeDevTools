---
title: "SCCache - Compiler Cache Control | Online Free DevTools by Hexmos"
name: sccache
path: /freedevtools/tldr/common/sccache
canonical: "https://hexmos.com/freedevtools/tldr/common/sccache/"
description: "Speed up compilations with SCCache, a fast C/C++/Rust compiler cache. Improve build times and developer productivity instantly. Free online tool, no registration required."
category: common
keywords:
- compiler cache
- c compiler cache
- cpp compiler cache
- rust compiler cache
- distributed compilation
- compilation statistics
- sccache linux
- sccache macos
- sccache windows
- compiler build optimization
features:
- Show compilation statistics for analysis
- Run compiler commands through the cache
- Start the sccache server in the foreground
- Check status of distributed compilation scheduler
- Stop the sccache server process
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sccache

> A fast C/C++/Rust compiler cache.
> Composed of a client and a server, both running on the machine.
> More information: <https://manned.org/sccache>.

- Show compilation statistics:

`sccache {{[-s|--show-stats]}}`

- Run `gcc` (or any compiler command) through `sccache`:

`sccache gcc {{path/to/file.c}}`

- Start `sccache` server in the foreground and print logs:

`sccache --stop-server; SCCACHE_LOG=trace SCCACHE_START_SERVER=1 SCCACHE_NO_DAEMON=1 sccache`

- Ask scheduler for distributed compilation status:

`sccache --dist-status`
