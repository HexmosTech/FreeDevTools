---
title: "Merge Hidden Files - Control dot_clean on macOS | Online Free DevTools by Hexmos"
name: dot_clean
path: /freedevtools/tldr/osx/dot_clean
canonical: "https://hexmos.com/freedevtools/tldr/osx/dot_clean/"
description: "Merge hidden files with dot_clean on macOS. Clean up and manage metadata files associated with native files effectively. Free online tool, no registration required."
category: osx
keywords:
- macOS hidden files merge
- dot_clean command macOS
- macOS metadata cleanup
- macOS file management
- hidden files manager macOS
- dot_clean recursive merge
- macOS file system cleanup
- dot_clean options macOS
- macOS file attributes removal
- macOS directory cleanup
features:
- Recursively merge hidden files with native files
- Delete hidden files after merging
- Perform a flat merge without recursion
- Follow symbolic links during merging
- Verbose output during processing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dot_clean

> Merge ._* files with corresponding native files.
> More information: <https://keith.github.io/xcode-man-pages/dot_clean.1.html>.

- Merge all `._*` files recursively:

`dot_clean {{path/to/directory}}`

- Don't recursively merge all `._*` in a directory (flat merge):

`dot_clean -f {{path/to/directory}}`

- Merge and delete all `._*` files:

`dot_clean -m {{path/to/directory}}`

- Only delete `._*` files if there's a matching native file:

`dot_clean -n {{path/to/directory}}`

- Follow symlinks:

`dot_clean -s {{path/to/directory}}`

- Print verbose output:

`dot_clean -v {{path/to/directory}}`
