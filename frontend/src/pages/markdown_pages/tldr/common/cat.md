---
title: "Cat Command - Print Files | Online Free DevTools by Hexmos"
name: cat
path: /freedevtools/tldr/common/cat
canonical: "https://hexmos.com/freedevtools/tldr/common/cat/"
description: "Print files easily with Cat Command. Concatenate and display file contents directly in your terminal. Free online tool, no registration required."
category: common
keywords:
- file concatenation
- print file content
- linux cat command
- macos cat command
- unix cat command
- display text file
- file append command
- command line file viewer
- text file utility
- stream file output
features:
- Display contents of a single file
- Concatenate multiple files into a single stream
- Append file content to an existing file
- Copy file content without buffering
- Write standard input to a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cat

> Print and concatenate files.
> More information: <https://manned.org/cat.1posix>.

- Print the contents of a file to `stdout`:

`cat {{path/to/file}}`

- Concatenate several files into an output file:

`cat {{path/to/file1 path/to/file2 ...}} > {{path/to/output_file}}`

- Append several files to an output file:

`cat {{path/to/file1 path/to/file2 ...}} >> {{path/to/output_file}}`

- Copy the contents of a file into an output file without buffering:

`cat -u {{/dev/tty12}} > {{/dev/tty13}}`

- Write `stdin` to a file:

`cat - > {{path/to/file}}`
