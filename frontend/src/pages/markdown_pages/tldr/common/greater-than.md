---
title: "Redirect Output - Control File Output with '>' | Online Free DevTools by Hexmos"
name: greater-than
path: /freedevtools/tldr/common/greater-than
canonical: "https://hexmos.com/freedevtools/tldr/common/greater-than/"
description: "Control file output with Redirect Output ('>'). Manage stdout, stderr, and file descriptors using the command line. Free online tool, no registration required."
category: common
keywords:
- file output redirection
- stdout redirection
- stderr redirection
- file descriptor manipulation
- bash redirection
- command line redirection
- append to file
- redirect output linux
- redirect output macos
- redirect output common
features:
- Redirect standard output to a file
- Append standard output to an existing file
- Redirect both standard output and standard error
- Suppress error messages by redirecting to /dev/null
- Create or clear file contents
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# >

> Redirect output.
> More information: <https://gnu.org/software/bash/manual/bash.html#Redirecting-Output>.

- Redirect `stdout` to a file:

`{{command}} > {{path/to/file}}`

- Append to a file:

`{{command}} >> {{path/to/file}}`

- Redirect both `stdout` and `stderr` to a file:

`{{command}} &> {{path/to/file}}`

- Redirect `stderr` to `/dev/null` to keep the terminal output clean:

`{{command}} 2> /dev/null`

- Clear the file contents or create a new empty file:

`> {{path/to/file}}`

- Redirect `stderr` to `stdout` for piping them together:

`{{command1}} 2>&1 | {{command2}}`

- Open a persistent file descriptor:

`exec {{3}}>{{path/to/file}}`

- Write to a custom file descriptor:

`{{echo text}} >&{{3}}`
