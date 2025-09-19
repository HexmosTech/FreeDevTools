---
title: "Tee Command - Duplicate Standard Input Output | Online Free DevTools by Hexmos"
name: tee
path: /freedevtools/tldr/common/tee
canonical: "https://hexmos.com/freedevtools/tldr/common/tee/"
description: "Duplicate standard input and output with Tee command. Stream data to multiple files or commands. Free online tool, no registration required"
category: common
keywords:
- standard input duplication
- output redirection linux
- tee command usage
- command line tee
- pipe stdin to file
- linux tee append
- tee to multiple files
- tee command examples
- tee command stdout
- tee command tutorial
features:
- Duplicate standard input to multiple files simultaneously
- Append standard input to existing files
- Pipe standard input to another command
- Write standard input to the terminal and files
- Redirect output to different commands for processing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tee

> Read from `stdin` and write to `stdout` and files (or commands).
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/tee-invocation.html>.

- Copy `stdin` to each file, and also to `stdout`:

`echo "example" | tee {{path/to/file}}`

- Append to the given files, do not overwrite:

`echo "example" | tee {{[-a|--append]}} {{path/to/file}}`

- Print `stdin` to the terminal, and also pipe it into another program for further processing:

`echo "example" | tee {{/dev/tty}} | {{xargs printf "[%s]"}}`

- Create a directory called "example", count the number of characters in "example" and write "example" to the terminal:

`echo "example" | tee >(xargs mkdir) >(wc {{[-c|--bytes]}})`
