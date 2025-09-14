---
title: "Open File Descriptor - Manage File Access | Free DevTools"
name: less-than-more-than
path: /freedevtools/tldr/less/less-than-more-than
canonical: "https://hexmos.com/freedevtools/tldr/less/less-than-more-than/"
description: "Open file descriptors for read and write with this command. Manage file access and network connections directly from the command line. Free online tool, no registration required."
category: common
keywords:
- file descriptor management
- open file descriptor
- bash file manipulation
- shell file access
- linux file operations
- command line file I/O
- tcp connection management
- remote connection file descriptor
- file descriptor redirection
- bash file descriptor tutorial
features:
- Open file descriptors for reading and writing
- Connect to remote TCP ports via file descriptors
- Close existing file descriptors
- Redirect standard input/output using file descriptors
- Manage file access using file descriptors in shell scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# <>

> Open a file descriptor for read and write.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#Opening-File-Descriptors-for-Reading-and-Writing>.

- Open a file in a file descriptor for read an write:

`exec {{3}}<>{{path/to/file}}`

- Open a file descriptor to a remote connection:

`exec {{3}}<>/dev/{{tcp}}/{{remote_host}}/{{port_number}}`

- Close a file descriptor:

`exec {{3}}<>-`
