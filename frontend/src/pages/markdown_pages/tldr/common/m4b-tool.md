---
title: "Create Audiobook Files - m4b-tool | Online Free DevTools by Hexmos"
name: m4b-tool
path: /freedevtools/tldr/common/m4b-tool
canonical: "https://hexmos.com/freedevtools/tldr/common/m4b-tool/"
description: "Create audiobook files with m4b-tool. Merge, split, and add chapters to audio files. Free online tool, no registration required."
category: common
keywords:
- m4b audiobook creator
- audiobook file merger
- m4b chapter editor
- audio file splitter
- m4b conversion tool
- audiobook management
- audio file manipulation
- m4b file utility
- command line audiobook tools
- audio chapter generation
features:
- Merge multiple audio files into a single m4b audiobook
- Split large audiobook files into smaller parts
- Create chapters automatically based on filenames
- Add or edit chapters within m4b audiobook files
- Manage audiobook files from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# m4b-tool

> Merge, split, and manipulate audiobook files with chapters.
> More information: <https://github.com/sandreas/m4b-tool>.

- Create an audiobook with the audio files in the input directory:

`m4b-tool merge {{path/to/input_directory}} --output-file={{path/to/merged.m4b}}`

- Make chapters using the input files' names:

`m4b-tool merge {{path/to/input_directory}} --output-file={{path/to/merged.m4b}} --use-filenames-as-chapters`
