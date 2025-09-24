---
title: "Create Empty File - Control File Size | Online Free DevTools by Hexmos"
name: mkfile
path: /freedevtools/tldr/common/mkfile
canonical: "https://hexmos.com/freedevtools/tldr/common/mkfile/"
description: "Create empty file with mkfile to control file size and pre-allocate disk space efficiently. Manage file storage with precision. Free online tool, no registration required."
category: common
keywords:
- empty file creator
- file size controller
- disk space pre-allocation
- linux file creation
- macos file creation
- posix file utility
- command line file manager
- file storage manager
- mkfile command
- empty file generator
features:
- Create empty files of specified sizes
- Support different units (bytes, KB, MB, GB)
- Pre-allocate disk space efficiently
- Create multiple files simultaneously
- Control file size with command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkfile

> Create empty files of any size.
> More information: <https://manned.org/mkfile>.

- Create an empty file of 15 kilobytes:

`mkfile -n {{15k}} {{path/to/file}}`

- Create a file of a given size and unit (bytes, KB, MB, GB):

`mkfile -n {{size}}{{b|k|m|g}} {{path/to/file}}`

- Create two files of 4 megabytes each:

`mkfile -n {{4m}} {{first_filename}} {{second_filename}}`
