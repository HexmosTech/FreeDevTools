---
title: "Archive Manager - Manage Files with Atool | Online Free DevTools by Hexmos"
name: atool
path: /freedevtools/tldr/common/atool
canonical: "https://hexmos.com/freedevtools/tldr/common/atool/"
description: "Manage file archives easily with Atool. Extract, create, and list files within archives using a consistent command-line interface. Free online tool, no registration required."
category: common
keywords:
- archive manager
- file archive extraction
- command line archive tool
- atool archive utility
- archive listing
- linux archive manager
- tar.gz extractor
- zip file manager
- rar archive tool
- bzip2 archive
features:
- List files within various archive formats.
- Extract archives with automatic subdirectory creation.
- Create new archives from files and directories.
- Repack archives between different formats.
- Extract multiple archives in a single command.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# atool

> A script for managing file archives of various types.
> `atool` uses external archiver programs but provides a consistent command-line interface for listing, extracting, creating, and managing archives.
> More information: <https://manned.org/atool>.

- List files in an archive:

`atool {{[-l|--list]}} {{path/to/archive.zip}}`

- Extract an archive (safely creates a subdirectory if needed):

`atool {{[-x|--extract]}} {{archive.tar.gz}}`

- Extract an archive to a specific directory:

`atool {{[-X|--extract-to]}} {{path/to/output_directory}} {{archive.rar}}`

- Display a specific file's content from an archive to standard output (like `cat`):

`atool {{[-c|--cat]}} {{archive.tar}} {{path/to/file_in_archive.txt}}`

- Create a new archive from specified files and/or directories:

`atool {{[-a|--add]}} {{new_archive.zip}} {{path/to/file1 path/to/file2 ...}}`

- List files in an archive and send the output through a pager:

`atool {{[-l|--list]}} {{[-p|--pager]}} {{large_archive.tar.bz2}}`

- Extract multiple archives at once (each to its own subdirectory if needed):

`atool {{[-x|--extract]}} {{[-e|--each]}} {{archive1.zip}} {{archive2.tar.gz}} {{*.rar}}`

- Repack an archive from one format to another (e.g., .tar.gz to .tar.7z):

`atool {{[-r|--repack]}} {{old_archive.tar.gz}} {{new_archive.tar.7z}}`
