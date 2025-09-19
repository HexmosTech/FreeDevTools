---
title: "Find Duplicate Files - Czkawka CLI | Online Free DevTools by Hexmos"
name: czkawka-cli
path: /freedevtools/tldr/common/czkawka-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/czkawka-cli/"
description: "Find duplicate files with Czkawka CLI, a powerful command-line tool. Locate and delete unnecessary files to free up disk space efficiently. Free online tool, no registration required."
category: common
keywords:
- duplicate file finder
- duplicate file remover
- command line duplicate finder
- czkawka cli linux
- czkawka cli macos
- czkawka duplicate cleaner
- disk space optimizer
- file deduplication tool
- similar image finder
- empty folder finder
features:
- Find duplicate files in multiple directories.
- Delete duplicate files using various methods (AEN, AEO, ON, OO, HARD, NONE).
- Locate similar images based on visual similarity.
- Identify and remove empty folders.
- Operate via command-line interface.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# czkawka-cli

> Command-line version of `czkawka` a multi-functional app to find duplicates, empty folders, similar images and much more.
> More information: <https://github.com/qarmin/czkawka>.

- List duplicate or similar files in specific directories:

`czkawka-cli {{dup|image}} --directories {{path/to/directory1 path/to/directory2 ...}}`

- Find duplicate files in specific directories and delete them (default: `NONE`):

`czkawka-cli dup --directories {{path/to/directory1 path/to/directory2 ...}} --delete-method {{AEN|AEO|ON|OO|HARD|NONE}}`
