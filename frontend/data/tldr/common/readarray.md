---
title: "Read Array - Populate Arrays from Input | Online Free DevTools by Hexmos"
name: readarray
path: "/freedevtools/tldr/common/readarray/"
canonical: "https://hexmos.com/freedevtools/tldr/common/readarray/"
description: "Read array data from stdin with Readarray, a command-line tool for populating arrays. Efficiently manage data input and streamline scripting. Free online tool, no registration required."
category: common
keywords:
- bash array reader
- readarray command
- populate array from stdin
- bash scripting array
- command line array tool
- gnu bash array
- linux array input
- shell script array
- read lines to array
- array data input
features:
- Read lines from standard input into an array
- Read lines from a file into an array
- Remove trailing delimiters when reading into an array
- Limit the number of lines read into an array
- Populate arrays directly from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# readarray

> Read lines from `stdin` into an array.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-readarray>.

- Interactively input lines into an array:

`readarray {{array_name}}`

- Read lines from a file and insert them in an array:

`readarray {{array_name}} < {{path/to/file.txt}}`

- Remove trailing deliminators (newline by default):

`readarray -t {{array_name}} < {{path/to/file.txt}}`

- Copy at most `n` lines:

`readarray -n {{n}} {{array_name}} < {{path/to/file.txt}}`

- Display help:

`help mapfile`
