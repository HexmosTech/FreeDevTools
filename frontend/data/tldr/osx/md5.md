---
title: "MD5 Checksum - Generate File Hashes | Online Free DevTools by Hexmos"
name: md5
path: "/freedevtools/tldr/osx/md5/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/md5/"
description: "Generate MD5 checksums with MD5. Quickly verify file integrity using cryptographic hashes on macOS. Free online tool, no registration required."
category: osx
keywords:
- md5 checksum
- file hash generator
- osx md5
- macos md5 checksum
- cryptographic hash
- file integrity check
- string md5 hash
- md5 command line
- md5 file verification
- md5 hash algorithm
features:
- Calculate MD5 checksums for files
- Generate MD5 hash of strings
- Verify file integrity using MD5
- Output checksum without filename
- Support multiple file inputs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# md5

> Calculate MD5 cryptographic checksums.
> More information: <https://keith.github.io/xcode-man-pages/md5.1.html>.

- Calculate the MD5 checksum for a file:

`md5 {{path/to/file}}`

- Calculate MD5 checksums for multiple files:

`md5 {{path/to/file1 path/to/file2 ...}}`

- Output only the md5 checksum (no filename):

`md5 -q {{path/to/file}}`

- Print a checksum of the given string:

`md5 -s "{{string}}"`
