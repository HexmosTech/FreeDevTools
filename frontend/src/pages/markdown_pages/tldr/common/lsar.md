---
title: "List Archive - View Archive Contents | Online Free DevTools by Hexmos"
name: lsar
path: /freedevtools/tldr/common/lsar
canonical: "https://hexmos.com/freedevtools/tldr/common/lsar/"
description: "List archive file contents with Lsar. Inspect, test integrity, and view archive contents in JSON. Free online tool, no registration required."
category: common
keywords:
- archive viewer
- lsar command
- archive contents list
- tar file viewer
- zip file viewer
- rar file viewer
- archive integrity check
- archive json output
- command line archive
- unix archive tool
features:
- List the contents of archive files
- Test archive file integrity
- Output archive contents in JSON format
- Support password-protected archives
- Display detailed information about archive files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lsar

> List an archive file's contents.
> See also: `unar`, `ar`.
> More information: <https://manned.org/lsar>.

- List an archive file's contents:

`lsar {{path/to/archive}}`

- List a password protected archive file's contents:

`lsar {{path/to/archive}} {{[-p|--password]}} {{password}}`

- Print all available information about each file in the archive (it's very long):

`lsar {{[-L|--verylong]}} {{path/to/archive}}`

- Test the integrity of the files in the archive (if possible):

`lsar {{[-t|--test]}} {{path/to/archive}}`

- List the archive file's contents in JSON format:

`lsar {{[-j|--json]}} {{path/to/archive}}`

- Display help:

`lsar {{[-h|--help]}}`
