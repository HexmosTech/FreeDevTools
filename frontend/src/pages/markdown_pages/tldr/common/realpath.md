---
title: "Resolve Path - Display Absolute Paths | Online Free DevTools by Hexmos"
name: realpath
path: /freedevtools/tldr/common/realpath
canonical: "https://hexmos.com/freedevtools/tldr/common/realpath/"
description: "Resolve absolute paths with realpath. Instantly convert relative paths to absolute paths, ensuring clarity and consistency. Free online tool, no registration required."
category: common
keywords:
- absolute path resolver
- relative to absolute path conversion
- file path resolver
- directory path resolver
- canonical path generator
- symbolic link resolver
- linux path
- macos path
- command line path tool
- path normalization
features:
- Resolve relative paths to absolute paths.
- Expand symbolic links to their target paths.
- Normalize paths by resolving ".." components.
- Suppress error messages for non-existent paths.
- Determine the existence of specified path components.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# realpath

> Display the resolved absolute path for a file or directory.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/realpath-invocation.html>.

- Display the absolute path for a file or directory:

`realpath {{path/to/file_or_directory}}`

- Require all path components to exist:

`realpath {{[-e|--canonicalize-existing]}} {{path/to/file_or_directory}}`

- Resolve ".." components before symlinks:

`realpath {{[-L|--logical]}} {{path/to/file_or_directory}}`

- Disable symlink expansion:

`realpath {{[-s|--no-symlinks]}} {{path/to/file_or_directory}}`

- Suppress error messages:

`realpath {{[-q|--quiet]}} {{path/to/file_or_directory}}`
