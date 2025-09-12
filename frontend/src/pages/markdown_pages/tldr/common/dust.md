---
title: "Analyze Disk Usage - Instantly View Directories with Dust | Free DevTools"
name: dust
path: /freedevtools/tldr/common/dust
canonical: "https://hexmos.com/freedevtools/tldr/common/dust/"
description: "Analyze disk usage instantly with Dust. Discover directory sizes and reclaim wasted space on Linux and macOS systems. Free online tool, no registration required."
category: common
keywords:
- disk space analyzer
- directory size viewer
- disk usage statistics
- command line disk usage
- linux disk usage
- macos disk usage
- terminal disk analyzer
- disk space management
- file system analysis
- dust command
features:
- Display directory sizes in a visually appealing format
- Analyze disk usage from the command line
- Sort directories by size for easy identification of largest consumers
- Filter directories to ignore specific files or paths
- Control depth of directory traversal for detailed or summary views
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dust

> Give an instant overview of which directories are using disk space.
> See also: `du`, `ncdu`.
> More information: <https://github.com/bootandy/dust#usage>.

- Display information for the current directory:

`dust`

- Display information about one or more directories:

`dust {{path/to/directory1 path/to/directory2 ...}}`

- Display 30 directories (defaults to 21):

`dust {{[-n|--number-of-lines]}} 30`

- Display information for the current directory, up to 3 levels deep:

`dust {{[-d|--depth]}} 3`

- Display the largest directories at the top in descending order:

`dust {{[-r|--reverse]}}`

- Ignore a file or directory:

`dust {{[-X|--ignore-directory]}} {{path/to/file_or_directory}}`

- Do not display percent bars and percentages:

`dust {{[-b|--no-percent-bars]}}`
