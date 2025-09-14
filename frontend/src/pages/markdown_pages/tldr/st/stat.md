---
title: "Stat - Display File Information | Free DevTools"
name: stat
path: /freedevtools/tldr/st/stat
canonical: "https://hexmos.com/freedevtools/tldr/st/stat/"
description: "Display file information with Stat command. Inspect file size, permissions, and access dates with this powerful utility. Free online tool, no registration required."
category: common
keywords:
- file information viewer
- file metadata display
- file system statistics
- linux stat command
- macos stat command
- display file size
- display file permissions
- display file access dates
- file attribute inspector
- coreutils stat
features:
- Display file size in bytes
- Show file permissions in octal format
- Display file owner and group
- Display filesystem information
- Display terse file information without labels
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stat

> Display file and filesystem information.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/stat-invocation.html>.

- Display properties about a specific file such as size, permissions, creation and access dates among others:

`stat {{path/to/file}}`

- Display properties about a specific file such as size, permissions, creation and access dates among others without labels:

`stat {{[-t|--terse]}} {{path/to/file}}`

- Display information about the filesystem where a specific file is located:

`stat {{[-f|--file-system]}} {{path/to/file}}`

- Show only octal file permissions:

`stat {{[-c|--format]}} "%a %n" {{path/to/file}}`

- Show the owner and group of a specific file:

`stat {{[-c|--format]}} "%U %G" {{path/to/file}}`

- Show the size of a specific file in bytes:

`stat {{[-c|--format]}} "%s %n" {{path/to/file}}`
