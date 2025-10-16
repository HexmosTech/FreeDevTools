---
title: "UV Cache - Manage Package Cache | Online Free DevTools by Hexmos"
name: uv-cache
path: "/freedevtools/tldr/uv/uv-cache/"
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-cache/"
description: "Manage package cache with uv-cache. Clean, prune, and control your uv package cache directory. Free online tool, no registration required."
category: common
keywords:
- uv package cache
- uv cache management
- python package cache
- uv cache cleaner
- uv cache prune
- uv cache directory
- uv package manager
- python dependency manager
- uv virtual environment
- uv cache control
features:
- Show the cache directory path
- Clean the entire cache
- Clean cache for specific packages
- Prune unreachable objects from the cache
- Prune cache optimized for CI environments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uv cache

> Manage `uv`'s global cache directory.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-cache>.

- Show the cache directory path:

`uv cache dir`

- Clean the entire cache (removes all cached packages and environments):

`uv cache clean`

- Clean the cache for specific packages:

`uv cache clean {{package1 package2 ...}}`

- Prune all unreachable objects from the cache:

`uv cache prune`

- Prune cache optimized for CI environments like GitHub Actions:

`uv cache prune --ci`

- Use a specific cache directory:

`uv cache clean --cache-dir {{path/to/cache}}`

- Clean cache with verbose output:

`uv cache clean {{[-v|--verbose]}}`
