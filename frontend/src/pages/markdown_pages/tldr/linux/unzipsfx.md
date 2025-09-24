---
title: "Create Self-Extracting Zip - unzipsfx | Online Free DevTools by Hexmos"
name: unzipsfx
path: /freedevtools/tldr/linux/unzipsfx
canonical: "https://hexmos.com/freedevtools/tldr/linux/unzipsfx/"
description: "Create self-extracting Zip files with unzipsfx for easy file distribution on Linux. Securely compress and distribute your files. Free online tool, no registration required."
category: linux
keywords:
- self-extracting Zip creator
- self-extracting archive maker
- Zip archive compressor
- Linux self-extracting executable
- command-line Zip utility
- shell script archive
- Zip file extractor
- Linux archive creator
- compressed file distribution
- unzipsfx Linux
features:
- Create self-extracting binaries from Zip archives
- Test self-extracting binaries for integrity
- Extract files from self-extracting archives
- Display file content without extraction
- Print comments on Zip archives within binaries
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unzipsfx

> Create a self-extracting compressed binary file by prepending self-extracting stubs on a Zip file.
> More information: <https://manned.org/unzipsfx>.

- Create a self-extracting binary file of a Zip archive:

`cat unzipsfx {{path/to/archive.zip}} > {{filename}} && chmod 755 {{filename}}`

- Extract a self-extracting binary in the current directory:

`{{./path/to/binary}}`

- Test a self-extracting binary for errors:

`{{./path/to/binary}} -t`

- Print content of a file in the self-extracting binary without extraction:

`{{./path/to/binary}} -c {{path/to/filename}}`

- Print comments on Zip archive in the self-extracting binary:

`{{./path/to/binary}} -z`
