---
title: "Find Duplicate Files - Manage Duplicates with rdfind | Online Free DevTools by Hexmos"
name: rdfind
path: "/freedevtools/tldr/common/rdfind/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rdfind/"
description: "Find duplicate files efficiently with rdfind. Manage and remove redundant files, reclaim disk space with this command line tool. Free online tool, no registration required."
category: common
keywords:
- duplicate file finder
- rdfind duplicate removal
- command line file manager
- linux duplicate finder
- macos duplicate cleaner
- hardlink duplicate files
- symlink duplicate files
- disk space recovery
- file redundancy removal
- duplicate file management
features:
- Identifies duplicate files in specified directories
- Replaces duplicate files with hard links to save space
- Replaces duplicate files with symbolic links
- Deletes duplicate files while retaining one original
- Allows ignoring or including empty files in the search
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rdfind

> Find files with duplicate content and get rid of them.
> More information: <https://rdfind.pauldreik.se/rdfind.1.html>.

- Identify all duplicates in a given directory and output a summary:

`rdfind -dryrun true {{path/to/directory}}`

- Replace all duplicates with hardlinks:

`rdfind -makehardlinks true {{path/to/directory}}`

- Replace all duplicates with symlinks/soft links:

`rdfind -makesymlinks true {{path/to/directory}}`

- Delete all duplicates and do not ignore empty files:

`rdfind -deleteduplicates true -ignoreempty false {{path/to/directory}}`
