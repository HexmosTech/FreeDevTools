---
title: "Create Archive Files - Manage Files with patool | Online Free DevTools by Hexmos"
name: patool
path: /freedevtools/tldr/linux/patool
canonical: "https://hexmos.com/freedevtools/tldr/linux/patool/"
description: "Create archive files easily with patool on Linux. Manage various archive formats and manipulate files with this versatile command-line tool. Free online tool, no registration required."
category: linux
keywords:
- archive file manager
- linux archive tool
- patool extract
- patool create
- patool list archives
- patool search archives
- archive file comparison
- command-line archiver
- file compression linux
- archive manipulation
features:
- Extract files from various archive formats
- Create archives in multiple formats
- List the contents of an archive
- Compare the contents of two archives
- Search for specific strings within archives
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# patool

> Archive file manager.
> Various archive formats can be created, extracted, tested, listed, searched, repacked, and compared.
> More information: <https://github.com/wummel/patool>.

- Extract an archive:

`patool extract {{path/to/archive}}`

- Create an archive:

`patool create {{path/to/archive}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- List contents of an archive:

`patool list {{path/to/archive}}`

- Compare the contents of two archives and display the differences in the standard output:

`patool diff {{path/to/archive1}} {{path/to/archive2}}`

- Search for a string inside the contents of an archive:

`patool search {{path/to/archive}}`
