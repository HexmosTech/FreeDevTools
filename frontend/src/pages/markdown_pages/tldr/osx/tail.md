---
title: "Tail - Display Last Lines of Files | Free DevTools"
name: tail
path: /freedevtools/tldr/osx/tail
canonical: "https://hexmos.com/freedevtools/tldr/osx/tail/"
description: "Display last part of files with Tail. Analyze log files, monitor changes, and extract specific data from end of text. Free online tool, no registration required."
category: osx
keywords:
  - tail file viewer
  - tail log analysis
  - tail command linux
  - tail command macos
  - tail print last lines
  - tail monitor file changes
  - tail extract data
  - tail command usage
  - tail command examples
  - tail follow file
features:
  - Display the last N lines of a file
  - Monitor a file for changes in real-time
  - Print a file from a specific line number
  - Print a specific number of bytes from the end of a file
  - Re-attempt access to a file even if inaccessible
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tail

> Display the last part of a file.
> See also: `head`.
> More information: <https://keith.github.io/xcode-man-pages/tail.1.html>.

- Show last 'count' lines in file:

`tail -n {{8}} {{path/to/file}}`

- Print a file from a specific line number:

`tail -n +{{8}} {{path/to/file}}`

- Print a specific count of bytes from the end of a given file:

`tail -c {{8}} {{path/to/file}}`

- Print the last lines of a given file and keep reading it until `<Ctrl c>`:

`tail -f {{path/to/file}}`

- Keep reading file until `<Ctrl c>`, even if the file is inaccessible:

`tail -F {{path/to/file}}`

- Show last 'count' lines in 'file' and refresh every 'seconds' seconds:

`tail -n {{8}} -s {{10}} -f {{path/to/file}}`
