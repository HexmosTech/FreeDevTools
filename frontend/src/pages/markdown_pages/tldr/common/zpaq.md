---
title: "Create ZPAQ Archives - Incremental Backup | Online Free DevTools by Hexmos"
name: zpaq
path: /freedevtools/tldr/common/zpaq
canonical: "https://hexmos.com/freedevtools/tldr/common/zpaq/"
description: "Create ZPAQ archives with ZPAQ. Compress files incrementally, enabling efficient backups and storage. Free online tool, no registration required."
category: common
keywords:
- ZPAQ archiver
- incremental backup
- file compression
- archive creation
- ZPAQ command line
- data archiving
- backup utility
- file journaling
- archive management
- compressed archive
features:
- Create new ZPAQ archives or add files to existing ones
- Encrypt archives with password protection
- Extract files from ZPAQ archives
- List the contents of an archive
- Control compression level for optimized storage
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zpaq

> Incremental journaling backup utility and archiver.
> More information: <https://mattmahoney.net/dc/zpaqdoc.html>.

- Add a file or directory to a new or existing archive:

`zpaq {{[a|add]}} {{path/to/archive.zpaq}} {{path/to/file_or_directory}}`

- Create or add to an encrypted archive:

`zpaq {{[a|add]}} -k{{password}} {{path/to/archive.zpaq}} {{path/to/file_or_directory}}`

- Extract the most recent versions of files:

`zpaq {{[x|extract]}} {{path/to/archive.zpaq}}`

- List the archive contents:

`zpaq {{[l|list]}} {{path/to/archive.zpaq}}`

- Set the level of compression (higher means more compression but slower):

`zpaq {{[a|add]}} {{path/to/archive.zpaq}} -m{{1|2|3|4|5}} {{path/to/file_or_directory}}`

- Extract the specified files from the archive that are not newer than the specified date:

`zpaq {{[x|extract]}} {{path/to/archive.zpaq}} {{path/in/archive/to/extract}} -to {{path/to/output}} -until {{YYYY-MM-DD}}`
