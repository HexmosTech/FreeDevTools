---
title: "Find Duplicate Files - Identify & Remove Duplicates | Online Free DevTools by Hexmos"
name: fdupes
path: /freedevtools/tldr/common/fdupes
canonical: "https://hexmos.com/freedevtools/tldr/common/fdupes/"
description: "Identify duplicate files with fdupes. Efficiently manage disk space and remove redundant data across directories. Free online tool, no registration required."
category: common
keywords:
- duplicate file finder
- find duplicate files linux
- remove duplicate files
- disk space management
- file comparison tool
- linux command line tools
- fdupes command examples
- identify redundant files
- delete duplicate files linux
- file system optimization
features:
- Recursively search directories for duplicate files
- Interactively delete duplicate files with prompt
- Delete duplicate files without prompting
- Consider hardlinks as duplicates during search
- Compare files based on content, not just name
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fdupes

> Finds duplicate files in a set of directories.
> More information: <https://github.com/adrianlopezroche/fdupes>.

- Search a single directory:

`fdupes {{path/to/directory}}`

- Search multiple directories:

`fdupes {{directory1}} {{directory2}}`

- Search a directory recursively:

`fdupes {{[-r|--recurse]}} {{path/to/directory}}`

- Search multiple directories, one recursively:

`fdupes {{path/to/irectory1}} {{[-R|--recurse:]}} {{path/to/directory2}}`

- Search recursively, considering hardlinks as duplicates:

`fdupes {{[-rH|--recurse --hardlinks]}} {{path/to/directory}}`

- Search recursively for duplicates and display interactive prompt to pick which ones to keep, deleting the others:

`fdupes {{[-rd|--recurse --delete]}} {{path/to/directory}}`

- Search recursively and delete duplicates without prompting:

`fdupes {{[-rdN|--recurse --delete --noprompt]}} {{path/to/directory}}`
