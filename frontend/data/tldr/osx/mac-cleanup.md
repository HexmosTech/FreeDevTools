---
title: "mac-cleanup - Remove macOS Junk | Online Free DevTools by Hexmos"
name: mac-cleanup
path: "/freedevtools/tldr/osx/mac-cleanup/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/mac-cleanup/"
description: "Cleanup junk files with mac-cleanup, a powerful macOS utility. Reclaim disk space by removing caches and unnecessary files. Free online tool, no registration required."
category: osx
keywords:
- macOS cleanup tool
- macOS system cleaner
- macOS junk removal
- macOS cache cleaner
- macOS disk space recovery
- command line macOS cleanup
- osx cleanup command
- mac-cleanup python
- terminal macOS cleanup
- system maintenance macOS
features:
- Remove unnecessary cache files
- Perform dry runs to preview cleanup actions
- Accept custom directory paths for cleanup
- Force cleanup by automatically acknowledging warnings
- Configure modules for tailored cleanup
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mac-cleanup

> A modern macOS cleanup tool to remove caches and junk.
> More information: <https://github.com/mac-cleanup/mac-cleanup-py>.

- Start the cleanup process:

`mac-cleanup`

- Open the module configuration screen:

`mac-cleanup {{[-c|--configure]}}`

- Perform a dry-run, showing what will be removed without actually deleting it:

`mac-cleanup {{[-n|--dry-run]}}`

- Specify the directory with custom cleanup path:

`mac-cleanup {{[-p|--custom-path]}} {{path/to/directory}}`

- Automatically acknowledge all warnings and continue with force:

`mac-cleanup {{[-f|--force]}}`
