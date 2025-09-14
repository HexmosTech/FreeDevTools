---
title: "Cat - Print and Concatenate Files | Free DevTools"
name: cat
path: /freedevtools/tldr/osx/cat
canonical: "https://hexmos.com/freedevtools/tldr/osx/cat/"
description: "Print and concatenate files with Cat. Process text and data efficiently using command line. Free online tool, no registration required."
category: osx
keywords:
  - cat command
  - file concatenation
  - print file contents
  - text processing
  - stdin to file
  - stdout redirection
  - command line utilities
  - file manipulation
  - data stream processing
  - linux cat command
features:
  - Print file contents to standard output
  - Concatenate multiple files into one
  - Append files to an existing file
  - Display non-printable characters visibly
  - Number all output lines for readability
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cat

> Print and concatenate files.
> More information: <https://keith.github.io/xcode-man-pages/cat.1.html>.

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

- Number all output lines:

`cat -n {{path/to/file}}`

- Display non-printable and whitespace characters (with `M-` prefix if non-ASCII):

`cat -v -t -e {{path/to/file}}`
