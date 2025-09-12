---
title: "Set File Attributes - Control File Metadata on macOS | Free DevTools"
name: setfile
path: /freedevtools/tldr/osx/setfile
canonical: "https://hexmos.com/freedevtools/tldr/osx/setfile/"
description: "Control file attributes with SetFile, a macOS command-line tool for modifying file metadata such as creation and modification dates. Free online tool, no registration required."
category: osx
keywords:
- macOS file attributes
- HFS+ metadata editor
- Set file creation date
- Set file modification date
- macOS file timestamp
- Command line file utility
- File metadata manager
- macOS file properties
- HFS+ file system tools
- macOS setfile command
features:
- Set file creation date on macOS
- Modify file modification date on HFS+ volumes
- Change file attributes using command line
- Update timestamps of files and directories
- Alter metadata of files on macOS
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# setfile

> Set file attributes on files in an HFS+ directory.
> More information: <https://ss64.com/osx/setfile.html>.

- Set creation date for specific files:

`setfile -d "{{MM/DD/YYYY HH:MM:SS}}" {{path/to/file1 path/to/file2 ...}}`

- Set modification date for specific files:

`setfile -m "{{MM/DD/YYYY HH:MM:SS}}" {{path/to/file1 path/to/file2 ...}}`

- Set modification date for symlink file (not to linked file itself):

`setfile -P -m "{{MM/DD/YYYY HH:MM:SS}}" {{path/to/file1 path/to/file2 ...}}`
