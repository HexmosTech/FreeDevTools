---
title: "Strip Nondeterminism - Remove Timestamps | Online Free DevTools by Hexmos"
name: strip-nondeterminism
path: /freedevtools/tldr/st/strip-nondeterminism
canonical: "https://hexmos.com/freedevtools/tldr/st/strip-nondeterminism/"
description: "Remove nondeterministic data with Strip Nondeterminism. Eliminate timestamps from files, ensuring reproducible builds. Free online tool, no registration required."
category: common
keywords:
- file timestamp removal
- reproducible builds tool
- deterministic build process
- nondeterministic data remover
- strip timestamps command
- linux timestamp cleaner
- macos timestamp cleaner
- debian reproducible builds
- file metadata editor
- unix timestamp manipulation
features:
- Removes non-deterministic file information
- Eliminates timestamps from files
- Sets timestamps to a specific UNIX timestamp
- Supports manual filetype specification
- Ensures reproducible build environments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# strip-nondeterminism

> Remove non-deterministic information (e.g. timestamps) from files.
> More information: <https://salsa.debian.org/reproducible-builds/strip-nondeterminism>.

- Strip nondeterministic information from a file:

`strip-nondeterminism {{path/to/file}}`

- Strip nondeterministic information from a file manually specifying the filetype:

`strip-nondeterminism --type {{filetype}} {{path/to/file}}`

- Strip nondeterministic information from a file; instead of removing timestamps set them to the specified UNIX timestamp:

`strip-nondeterminism --timestamp {{unix_timestamp}} {{path/to/file}}`
