---
title: "Concatenate Files - Print Files with Cat | Free DevTools"
name: cat
path: /freedevtools/tldr/linux/cat
canonical: "https://hexmos.com/freedevtools/tldr/linux/cat/"
description: "Print files with Cat, a command-line tool to display file content. Quickly concatenate multiple files into one with Cat. Free online tool, no registration required."
category: linux
keywords:
  - file concatenation
  - print file content
  - concatenate files linux
  - cat command tutorial
  - display file content online
  - linux cat command
  - command line file printing
  - text file display
  - file merge tool
  - unix cat utility
features:
  - Print file contents to standard output
  - Concatenate multiple files into one
  - Append files to an existing file
  - Write standard input to a file
  - Number all output lines of a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cat

> Print and concatenate files.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html>.

- Print the contents of a file to `stdout`:

`cat {{path/to/file}}`

- Concatenate several files into an output file:

`cat {{path/to/file1 path/to/file2 ...}} > {{path/to/output_file}}`

- Append several files to an output file:

`cat {{path/to/file1 path/to/file2 ...}} >> {{path/to/output_file}}`

- Write `stdin` to a file:

`cat - > {{path/to/file}}`

- Number all output lines:

`cat {{[-n|--number]}} {{path/to/file}}`

- Display non-printable and whitespace characters (with `M-` prefix if non-ASCII):

`cat {{[-vte|--show-nonprinting -t -e]}} {{path/to/file}}`
