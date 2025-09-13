---
title: "Generate Permuted Index - ptx Command | Free DevTools"
name: ptx
path: /freedevtools/tldr/linux/ptx
canonical: "https://hexmos.com/freedevtools/tldr/linux/ptx/"
description: "Generate a permuted index with ptx. Extract keywords and create context-aware indexes from text files with ease. Free online tool, no registration required."
category: linux
keywords:
  - permuted index generator
  - text indexing command
  - ptx linux
  - keyword extraction tool
  - coreutils ptx
  - file indexing utility
  - text analysis command
  - permuted index creation
  - linux command line tools
  - text processing ptx
features:
  - Generate permuted indexes from text files.
  - Create indexes with custom width formatting.
  - Filter words to refine index generation.
  - Add automatically generated index references.
  - Supports SYSV-style behaviors.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ptx

> Generate a permuted index of words from text files.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/ptx-invocation.html>.

- Generate a permuted index where the first field of each line is an index reference:

`ptx {{[-r|--references]}} {{path/to/file}}`

- Generate a permuted index with automatically generated index references:

`ptx {{[-A|--auto-reference]}} {{path/to/file}}`

- Generate a permuted index with a fixed width:

`ptx {{[-w|--width]}} {{width_in_columns}} {{path/to/file}}`

- Generate a permuted index with a list of filtered words:

`ptx {{[-o|--only-file]}} {{path/to/filter}} {{path/to/file}}`

- Generate a permuted index with SYSV-style behaviors:

`ptx {{[-G|--traditional]}} {{path/to/file}}`
