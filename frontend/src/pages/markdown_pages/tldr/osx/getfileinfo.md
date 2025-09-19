---
title: "GetFileInfo - Display File Information on macOS | Online Free DevTools by Hexmos"
name: getfileinfo
path: /freedevtools/tldr/osx/getfileinfo
canonical: "https://hexmos.com/freedevtools/tldr/osx/getfileinfo/"
description: "Display file information with GetFileInfo on macOS. Retrieve creation date, modification date, and creator information using this command-line tool. Free online tool, no registration required."
category: osx
keywords:
- macOS file metadata
- HFS+ file information
- GetFileInfo command-line
- OSX file attributes
- File creation date mac
- File modification date osx
- File creator identifier
- Apple file system info
- Command-line file reader
- macOS developer tool
features:
- Display file creation timestamp
- Display file modification timestamp
- Retrieve file creator ID
- Access HFS+ file metadata
- Get file information on macOS
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# GetFileInfo

> Get information about a file in an HFS+ directory.
> More information: <https://keith.github.io/xcode-man-pages/GetFileInfo.1.html>.

- Display information about a given file:

`GetFileInfo {{path/to/file}}`

- Display the [d]ate and time a given file was created:

`GetFileInfo -d {{path/to/file}}`

- Display the date and time a given file was last [m]odified:

`GetFileInfo -m {{path/to/file}}`

- Display the [c]reator of a given file:

`GetFileInfo -c {{path/to/file}}`
