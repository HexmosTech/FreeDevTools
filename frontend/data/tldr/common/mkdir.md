---
title: "Create Directories - Control File Systems | Online Free DevTools by Hexmos"
name: mkdir
path: "/freedevtools/tldr/common/mkdir/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mkdir/"
description: "Create directories with mkdir. Manage file system structures and set permissions instantly. Free online tool, no registration required."
category: common
keywords:
- directory creation
- mkdir command
- linux mkdir
- create folder linux
- file system manager
- directory permissions
- unix mkdir
- command line directory
- nested directory creation
- directory path management
features:
- Create single or multiple directories.
- Recursively create parent directories.
- Set specific permissions during creation.
- Create nested directory structures using brace expansion.
- Create directories using absolute or relative paths.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkdir

> Create directories and set their permissions.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html>.

- Create specific directories:

`mkdir {{path/to/directory1 path/to/directory2 ...}}`

- Create specific directories and their parents if needed:

`mkdir {{[-p|--parents]}} {{path/to/directory1 path/to/directory2 ...}}`

- Create directories with specific permissions:

`mkdir {{[-m|--mode]}} {{rwxrw-r--}} {{path/to/directory1 path/to/directory2 ...}}`

- Create multiple nested directories recursively:

`mkdir {{[-p|--parents]}} {{path/to/{a,b}/{x,y,z}/{h,i,j}}}`
