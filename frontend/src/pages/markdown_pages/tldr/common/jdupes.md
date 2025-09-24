---
title: "Find Duplicate Files - Deduplicate Files with jdupes | Online Free DevTools by Hexmos"
name: jdupes
path: /freedevtools/tldr/common/jdupes
canonical: "https://hexmos.com/freedevtools/tldr/common/jdupes/"
description: "Deduplicate files with jdupes, an enhanced duplicate file finder. Quickly identify and remove duplicate files to free up disk space. Free online tool, no registration required."
category: common
keywords:
- duplicate file finder
- jdupes file deduplication
- remove duplicate files linux
- find duplicate files macos
- delete duplicate files command line
- command line duplicate finder
- duplicate file removal tool
- recursive duplicate file search
- file integrity verification
- disk space recovery
features:
- Recursively search directories for duplicate files
- Delete duplicate files interactively
- Compare files based on content, not just name or size
- Search multiple directories in a specific order
- Follow subdirectories selectively
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jdupes

> A powerful duplicate file finder and an enhanced fork of `fdupes`.
> More information: <https://codeberg.org/jbruchon/jdupes#usage>.

- Search a single directory:

`jdupes {{path/to/directory}}`

- Search multiple directories:

`jdupes {{directory1 directory2 ...}}`

- Search all directories recursively:

`jdupes {{[-r|--recurse]}} {{path/to/directory}}`

- Search directory recursively and let user choose files to preserve:

`jdupes {{[-d|--delete]}} {{[-r|--recurse]}} {{path/to/directory}}`

- Search multiple directories and follow subdirectores under directory2, not directory1:

`jdupes {{directory1}} {{[-R|--recurse:]}} {{directory2}}`

- Search multiple directories and keep the directory order in result:

`jdupes {{[-O|--param-order]}} {{directory1 directory2 directory3 ...}}`
