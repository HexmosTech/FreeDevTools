---
title: "Control File Caching - fadvise Command | Online Free DevTools by Hexmos"
name: fadvise
path: /freedevtools/tldr/linux/fadvise
canonical: "https://hexmos.com/freedevtools/tldr/linux/fadvise/"
description: "Control Linux file caching behavior with the fadvise command.  Manage file preloading and removal from cache for improved performance. Free online tool, no registration required."
category: linux
keywords:
  - linux file caching
  - fadvise command
  - linux file management
  - control file caching linux
  - manage file cache linux
  - fadvise optimization
  - linux system performance
  - file i/o optimization
  - improve linux performance
  - linux command line tools
features:
  - Preload files and directories into the system cache.
  - Suggest dropping files from the cache to free memory.
  - Optimize application performance by controlling file caching.
  - Improve I/O performance by managing data access patterns.
  - Fine-grained control over file caching behavior in Linux.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fadvise

> Control Linux file caching behavior.
> See also: `fincore`.
> More information: <https://manned.org/fadvise>.

- Preload a file or directory into cache:

`fadvise {{[-a|--advice]}} willneeded {{path/to/file_or_directory}}`

- Suggest dropping a file from cache:

`fadvise {{path/to/file}}`

- Display help:

`fadvise {{[-h|--help]}}`
