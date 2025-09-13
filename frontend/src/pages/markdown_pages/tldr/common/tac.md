---
title: "Reverse File Order - Tac Command | Free DevTools"
name: tac
path: /freedevtools/tldr/common/tac
canonical: "https://hexmos.com/freedevtools/tldr/common/tac/"
description: "Reverse file order instantly with Tac command. Concatenate files and display lines in reversed sequence on Linux & macOS. Free online tool, no registration required."
category: common
keywords:
- reverse file order
- tac command linux
- tac command macos
- concatenate reversed files
- linux command line tools
- reverse text order
- display reversed lines
- gnu coreutils tac
- file manipulation tools
- text processing utilities
features:
- Reverse the order of lines in files
- Concatenate multiple files in reversed line order
- Display standard input in reversed order
- Specify a custom separator between lines
- Reverse the order of files before concatenation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tac

> Display and concatenate files with lines in reversed order.
> See also: `cat`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/tac-invocation.html>.

- Concatenate specific files in reversed order:

`tac {{path/to/file1 path/to/file2 ...}}`

- Display `stdin` in reversed order:

`{{cat path/to/file}} | tac`

- Use a specific separator:

`tac {{[-s|--separator]}} {{separator}} {{path/to/file1 path/to/file2 ...}}`

- Use a specific `regex` as a separator:

`tac {{[-r|--regex]}} {{[-s|--separator]}} {{separator}} {{path/to/file1 path/to/file2 ...}}`

- Use a separator before each file:

`tac {{[-b|--before]}} {{path/to/file1 path/to/file2 ...}}`
