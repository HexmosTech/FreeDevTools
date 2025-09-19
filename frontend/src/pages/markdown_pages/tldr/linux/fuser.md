---
title: "fuser Command - Identify Process File Usage | Online Free DevTools by Hexmos"
name: fuser
path: /freedevtools/tldr/linux/fuser
canonical: "https://hexmos.com/freedevtools/tldr/linux/fuser/"
description: "Identify process file usage with the fuser command.  Find and kill processes accessing files, directories, or sockets. Free online tool, no registration required."
category: linux
keywords:
  - process file identifier
  - linux process finder
  - file usage monitor
  - socket process viewer
  - process killer command
  - fuser command linux
  - identify process by file
  - find process by port
  - command line process tool
  - system process management
features:
  - Identify processes using files or directories.
  - Display detailed process information (PID, USER, etc.).
  - Locate processes using TCP or UDP sockets by port.
  - Forcefully terminate processes using the SIGKILL signal.
  - Detect processes accessing specific mount points.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fuser

> Display process IDs currently using files or sockets.
> More information: <https://manned.org/fuser>.

- Find which processes are accessing a file or directory:

`fuser {{path/to/file_or_directory}}`

- Show more fields (`USER`, `PID`, `ACCESS` and `COMMAND`):

`fuser {{[-v|--verbose]}} {{path/to/file_or_directory}}`

- Identify processes using a TCP socket:

`fuser {{[-n|--namespace]}} tcp {{port}}`

- Kill all processes accessing a file or directory (sends the `SIGKILL` signal):

`fuser {{[-k|--kill]}} {{path/to/file_or_directory}}`

- Find which processes are accessing the filesystem containing a specific file or directory:

`fuser {{[-m|--mount]}} {{path/to/file_or_directory}}`

- Kill all processes with a TCP connection on a specific port:

`fuser {{[-k|--kill]}} {{port}}/tcp`
