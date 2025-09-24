---
title: "Compress Executable - Reduce File Size | Online Free DevTools by Hexmos"
name: gzexe
path: /freedevtools/tldr/linux/gzexe
canonical: "https://hexmos.com/freedevtools/tldr/linux/gzexe/"
description: "Compress executable files with gzexe to save disk space using efficient algorithms. Reduce file size and keep executables functional. Free online tool, no registration required."
category: linux
keywords:
- linux executable compression
- compress executable linux
- gzexe file compression
- compress binary file linux
- executable size reduction
- linux file compression tool
- gzexe compress binary
- linux executable compression tool
- compress executable script
- decompress executable linux
features:
- Compress executable files in-place
- Decompress compressed executables
- Back up original executables
- Create self-extracting executable scripts
- Reduce disk space usage with compressed executables
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gzexe

> Compress executable files while keeping them executable.
> Back up the original file, appending `~` to its name and create a shell script that uncompresses and executes the binary inside it.
> More information: <https://manned.org/gzexe.1>.

- Compress an executable file in-place:

`gzexe {{path/to/executable}}`

- [d]ecompress a compressed executable in-place (i.e. convert the shell script back to an uncompressed binary):

`gzexe -d {{path/to/compressed_executable}}`
