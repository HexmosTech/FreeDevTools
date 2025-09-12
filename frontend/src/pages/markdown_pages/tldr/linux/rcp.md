---
title: "RCP - Copy Files Between Systems | Free DevTools"
name: rcp
path: /freedevtools/tldr/linux/rcp
canonical: "https://hexmos.com/freedevtools/tldr/linux/rcp/"
description: "Copy files seamlessly with RCP, the remote file copy command. Securely transfer files between local and remote Linux systems. Free online tool, no registration required."
category: linux
keywords:
- linux rcp
- remote file copy
- rcp command
- copy files between systems
- linux file transfer
- secure file transfer linux
- remote copy utility
- linux rcp command
- remote file copy command
- linux file system manipulation
features:
- Copy files to remote hosts
- Copy directories recursively
- Preserve file attributes during transfer
- Force copy without confirmation prompt
- Transfer files securely over a network
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rcp

> Copy files between local and remote systems.
> It mimics the behavior of the `cp` command but operates across different machines.
> More information: <https://www.gnu.org/software/inetutils/manual/inetutils.html#rcp-invocation>.

- Copy a file to a remote host:

`rcp {{path/to/local_file}} {{username}}@{{remote_host}}:/{{path/to/destination}}/`

- Copy a directory recursively:

`rcp {{[-r|--recursive]}} {{path/to/local_directory}} {{username}}@{{remote_host}}:/{{path/to/destination}}/`

- Preserve the file attributes:

`rcp {{[-p|--preserve]}} {{path/to/local_file}} {{username}}@{{remote_host}}:/{{path/to/destination}}/`

- Force copy without a confirmation:

`rcp {{[-f|--from]}} {{path/to/local_file}} {{username}}@{{remote_host}}:/{{path/to/destination}}/`
