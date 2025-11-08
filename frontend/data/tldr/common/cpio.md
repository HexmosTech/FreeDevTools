---
title: "Cpio - Create Archive Files | Online Free DevTools by Hexmos"
name: cpio
path: "/freedevtools/tldr/common/cpio/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cpio/"
description: "Create archive files with cpio. Manage archives, extract files, and copy files in and out of archives using various formats. Free online tool, no registration required."
category: common
keywords:
- cpio archive
- cpio extract
- cpio create
- cpio command
- cpio linux
- cpio macos
- cpio archive manager
- archive file extractor
- cpio file archiving
- posix tar archive
features:
- Create cpio archives from lists of files or directories.
- Extract files from existing cpio archives.
- Support various cpio archive formats.
- Verbose mode for detailed output during archive operations.
- Create directories automatically when extracting archives.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cpio

> Copy files in and out of archives.
> Supports the following archive formats: cpio's custom binary, old ASCII, new ASCII, crc, HPUX binary, HPUX old ASCII, old tar, and POSIX.1 tar.
> More information: <https://www.gnu.org/software/cpio/manual/cpio.html#Invoking-cpio>.

- Take a list of file names from `stdin` and add them onto an archive (copy-[o]ut) in cpio's binary forma:

`echo "{{path/to/file1 path/to/file2 ...}}" | cpio {{[-o|--create]}} > {{archive.cpio}}`

- Copy all files and directories in a directory and add them onto an archive (copy-[o]ut), in verbose mode:

`find {{path/to/directory}} | cpio {{[-ov|--create --verbose]}} > {{archive.cpio}}`

- Pick all files from an archive (copy-[i]n), generating directories where needed, in verbose mode:

`cpio {{[-idv|--extract --make-directories --verbose]}} < {{archive.cpio}}`
