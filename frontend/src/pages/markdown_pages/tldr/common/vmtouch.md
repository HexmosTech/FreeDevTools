---
title: "VMtouch - Manage Filesystem Cache | Free DevTools"
name: vmtouch
path: /freedevtools/tldr/common/vmtouch
canonical: "https://hexmos.com/freedevtools/tldr/common/vmtouch/"
description: "Manage filesystem cache with Vmtouch. Evict, load, or lock files into memory, optimizing performance and controlling memory usage. Free online tool, no registration required."
category: common
keywords:
- Filesystem cache manager
- Memory management tool
- File caching linux
- Vmtouch cache control
- Linux disk cache
- Filesystem performance tuning
- File eviction utility
- Cache locking linux
- Memory optimization linux
- Linux file system
features:
- Print the cache status of a file
- Load a file into the filesystem cache
- Evict a file from the filesystem cache
- Lock a file in cache to prevent eviction
- Daemonize the program while keeping a file locked in cache
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vmtouch

> Manage the filesystem cache.
> More information: <https://manned.org/vmtouch>.

- Print the cache status of a file:

`vmtouch {{path/to/file}}`

- Load a file into cache:

`vmtouch -t {{path/to/file}}`

- Evict a file from cache:

`vmtouch -e {{path/to/file}}`

- Lock a file in cache to prevent eviction from memory:

`vmtouch -l {{path/to/file}}`

- Lock a file and daemonize the program:

`vmtouch -ld {{path/to/file}}`
