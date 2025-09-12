---
title: "Create Shell Archive - Package Files | Free DevTools"
name: shar
path: /freedevtools/tldr/unknown/shar
canonical: "https://hexmos.com/freedevtools/tldr/unknown/shar/"
description: "Create shell archive with shar for easy file packaging. Compress archives and handle binary/text files efficiently. Free online tool, no registration required."
category: unknown
keywords:
- shell archive creation
- file packaging
- shell script archive
- shar archive utility
- archive compression
- uuencode files
- text file archiving
- binary file archiving
- shell archive extraction
- shar utils
features:
- Create self-extracting shell archives
- Compress files within the archive using specified compressors
- Treat all files as binary using uuencode
- Treat all files as text and disable uuencode
- Include a name and cut mark in the archive header
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# shar

> Create a shell archive.
> More information: <https://www.gnu.org/software/sharutils/manual/sharutils.html>.

- Create a shell script that when executed extracts the given files from itself:

`shar {{[-V|--vanilla-operation]}} {{path/to/file1 path/to/file2 ...}} > {{path/to/archive.sh}}`

- Compress the files in the archive:

`shar {{[-C|--compactor]}} {{xz}} {{path/to/file1 path/to/file2 ...}} > {{path/to/archive.sh}}`

- Treat all files as binary (i.e. `uuencode` everything):

`shar {{[-B|--uuencode]}} {{path/to/file1 path/to/file2 ...}} > {{path/to/archive.sh}}`

- Treat all files as text (i.e. `uuencode` nothing):

`shar {{[-T|--text-files]}} {{path/to/file1 path/to/file2 ...}} > {{path/to/archive.sh}}`

- Include a name and cut mark in the header comment of the archive:

`shar {{[-n|--archive-name]}} "{{My files}}" {{[-c|--cut-mark]}} {{path/to/file1 path/to/file2 ...}} > {{path/to/archive.sh}}`
