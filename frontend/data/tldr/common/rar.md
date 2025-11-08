---
title: "RAR Archiver - Create and Manage Archives | Online Free DevTools by Hexmos"
name: rar
path: "/freedevtools/tldr/common/rar/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rar/"
description: "Create RAR archives efficiently with RAR Archiver. Compress files, split volumes, and password-protect archives easily. Free online tool, no registration required."
category: common
keywords:
- RAR archive creator
- RAR archive manager
- RAR file compressor
- RAR password protection
- RAR volume splitter
- command line archive
- rar linux
- rar macos
- rar windows
- archive compression tool
features:
- Create RAR archives from files and directories
- Split archives into multiple volumes
- Password protect RAR archives
- Encrypt file data and headers
- Specify the compression level for RAR archives
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rar

> The RAR archiver. Supports multi-volume archives that can be optionally self-extracting.
> More information: <https://manned.org/rar>.

- Archive 1 or more files:

`rar a {{path/to/archive_name.rar}} {{path/to/file1 path/to/file2 path/to/file3 ...}}`

- Archive a directory:

`rar a {{path/to/archive_name.rar}} {{path/to/directory}}`

- Split the archive into parts of equal size (50M):

`rar a -v{{50M}} -R {{path/to/archive_name.rar}} {{path/to/file_or_directory}}`

- Password protect the resulting archive:

`rar a -p{{password}} {{path/to/archive_name.rar}} {{path/to/file_or_directory}}`

- Encrypt file data and headers with password:

`rar a -hp{{password}} {{path/to/archive_name.rar}} {{path/to/file_or_directory}}`

- Use a specific compression level (0-5):

`rar a -m{{compression_level}} {{path/to/archive_name.rar}} {{path/to/file_or_directory}}`
