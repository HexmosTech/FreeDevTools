---
title: "Create Archive - Manage Files with pax Utility | Online Free DevTools by Hexmos"
name: pax
path: /freedevtools/tldr/common/pax
canonical: "https://hexmos.com/freedevtools/tldr/common/pax/"
description: "Create archives with pax, a powerful archiving utility. Easily manage files, extract data, and copy directories while preserving metadata. Free online tool, no registration required."
category: common
keywords:
- pax archive creator
- pax file archiver
- tar archive manager
- gzip archive extractor
- linux archive utility
- unix pax command
- archive compression tool
- file backup pax
- directory copier pax
- posix archive format
features:
- Create tar archives from files and directories
- Extract files and directories from tar archives
- Copy directory structures while preserving metadata
- List the contents of various archive formats (tar, gzip)
- Utilize output redirection for archive creation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pax

> Archiving and copying utility.
> More information: <https://manned.org/pax.1p>.

- List the contents of an archive:

`pax -f {{archive.tar}}`

- List the contents of a `gzip` archive:

`pax -zf {{archive.tar.gz}}`

- Create an archive from files:

`pax -wf {{target.tar}} {{path/to/file1 path/to/file2 ...}}`

- Create an archive from files, using output redirection:

`pax -w {{path/to/file1 path/to/file2 ...}} > {{target.tar}}`

- Extract an archive into the current directory:

`pax -rf {{source.tar}}`

- Copy to a directory, while keeping the original metadata; `target/` must exist:

`pax -rw {{path/to/file1}} {{path/to/directory1 path/to/directory2 ...}} {{target/}}`
