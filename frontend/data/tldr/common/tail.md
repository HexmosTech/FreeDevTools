---
title: "Tail File - Display Last Lines | Online Free DevTools by Hexmos"
name: tail
path: "/freedevtools/tldr/common/tail/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tail/"
description: "Display last lines with Tail File. Monitor file changes in real-time and extract relevant data easily using command-line options. Free online tool, no registration required."
category: common
keywords:
- tail file
- tail log file
- tail command
- linux tail command
- unix tail command
- macos tail command
- display last lines
- monitor log file
- real-time file monitoring
- extract file data
features:
- Display the last 'n' lines of a file
- Continuously monitor a file for new lines
- Display a specific number of bytes from the end of a file
- Begin display from a specific line number
- Re-attempt file access when the file becomes inaccessible
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tail

> Display the last part of a file.
> See also: `head`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html>.

- Show last 'count' lines in file:

`tail {{[-n|--lines]}} {{count}} {{path/to/file}}`

- Print a file from a specific line number:

`tail {{[-n|--lines]}} +{{count}} {{path/to/file}}`

- Print a specific count of bytes from the end of a given file:

`tail {{[-c|--bytes]}} {{count}} {{path/to/file}}`

- Print the last lines of a given file and keep reading it until `<Ctrl c>`:

`tail {{[-f|--follow]}} {{path/to/file}}`

- Keep reading file until `<Ctrl c>`, even if the file is inaccessible:

`tail {{[-F|--retry --follow]}} {{path/to/file}}`

- Show last 'num' lines in 'file' and refresh every 'n' seconds:

`tail {{[-n|--lines]}} {{count}} {{[-s|--sleep-interval]}} {{seconds}} {{[-f|--follow]}} {{path/to/file}}`
