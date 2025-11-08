---
title: "Control Header - Keep File Header with Command | Online Free DevTools by Hexmos"
name: keep-header
path: "/freedevtools/tldr/common/keep-header/"
canonical: "https://hexmos.com/freedevtools/tldr/common/keep-header/"
description: "Control header lines with keep-header. Preserve the first line of files while running commands. Simplify data processing with header preservation. Free online tool, no registration required."
category: common
keywords:
- file header preservation
- command line header control
- tsv header manipulation
- csv header processing
- sort header retention
- grep header preservation
- linux header utility
- macos header utility
- stdin header processing
- file processing header
features:
- Preserve the first line of a file during command execution
- Pass the header line directly to stdout
- Process data while retaining header context
- Integrate with standard command-line utilities like sort and grep
- Handle input from stdin while preserving header
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# keep-header

> Keep first line untouched by a command, passing it directly to `stdout`.
> More information: <https://github.com/eBay/tsv-utils#keep-header>.

- Sort a file and keep the first line at the top:

`keep-header {{path/to/file}} -- sort`

- Output first line directly to `stdout`, passing the remainder of the file through the specified command:

`keep-header {{path/to/file}} -- {{command}}`

- Read from `stdin`, sorting all except the first line:

`cat {{path/to/file}} | keep-header -- {{command}}`

- Grep a file, keeping the first line regardless of the search pattern:

`keep-header {{path/to/file}} -- grep {{pattern}}`
