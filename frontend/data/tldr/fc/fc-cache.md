---
title: "Font Cache - Generate Font Cache Files | Online Free DevTools by Hexmos"
name: fc-cache
path: "/freedevtools/tldr/fc/fc-cache/"
canonical: "https://hexmos.com/freedevtools/tldr/fc/fc-cache/"
description: "Generate font cache files efficiently with fc-cache. Improve font loading and application performance by rebuilding font caches. Free online tool, no registration required."
category: common
keywords:
- Font cache generator
- Font cache builder
- Font cache manager
- Linux font cache
- macOS font cache
- Font directory scanner
- Fontconfig cache
- Font rendering performance
- System font update
- Command-line font tool
features:
- Scan font directories
- Generate new font cache files
- Force rebuild of font caches
- Erase and regenerate font caches
- Scan system-wide font directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fc-cache

> Scan font directories to build font cache files.
> More information: <https://manned.org/fc-cache>.

- Generate font cache files:

`fc-cache`

- Generate font cache files verbosely:

`fc-cache {{[-v|--verbose]}}`

- Force a rebuild of all font cache files, without checking if cache is up-to-date:

`fc-cache {{[-f|--force]}}`

- Erase font cache files, then generate new font cache files:

`fc-cache {{[-r|--really-force]}}`

- Scan a specific directory:

`fc-cache {{path/to/directory}}`

- Scan system-wide directories, skipping the user's home directory:

`fc-cache {{[-s|--system-only]}}`

- Display version:

`fc-cache {{[-V|--version]}}`
