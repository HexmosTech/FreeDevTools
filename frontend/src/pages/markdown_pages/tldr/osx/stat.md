---
title: "Stat - Display File Status | Online Free DevTools by Hexmos"
name: stat
path: /freedevtools/tldr/osx/stat
canonical: "https://hexmos.com/freedevtools/tldr/osx/stat/"
description: "Display file status with Stat. Analyze file properties and permissions effortlessly using this command line tool. Free online tool, no registration required."
category: osx
keywords:
  - file status display
  - file properties analyzer
  - command line stat
  - unix stat command
  - file permissions viewer
  - file size reader
  - access date retrieval
  - creation date display
  - file metadata extractor
  - stat command examples
features:
  - Display file size in bytes
  - Show octal file permissions
  - Provide verbose file information
  - Display file owner and group
  - Show file creation and access dates
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stat

> Display file status.
> More information: <https://keith.github.io/xcode-man-pages/stat.1.html>.

- Show file properties such as size, permissions, creation and access dates among others:

`stat {{path/to/file}}`

- Same as above but verbose (more similar to Linux's `stat`):

`stat -x {{path/to/file}}`

- Show only octal file permissions:

`stat -f %Mp%Lp {{path/to/file}}`

- Show owner and group of the file:

`stat -f "%Su %Sg" {{path/to/file}}`

- Show the size of the file in bytes:

`stat -f "%z %N" {{path/to/file}}`
