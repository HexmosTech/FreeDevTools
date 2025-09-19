---
title: "Install - Copy Files & Set Attributes | Online Free DevTools by Hexmos"
name: install
path: /freedevtools/tldr/install/install
canonical: "https://hexmos.com/freedevtools/tldr/install/install/"
description: "Copy files efficiently with Install command. Set file ownership, permissions, and timestamps. Free online tool, no registration required."
category: common
keywords:
- file installer
- copy file attributes
- set file permissions
- install file ownership
- linux install command
- macos install command
- unix install utility
- file copy tool
- preserve file timestamps
- create directories install
features:
- Copy files to specified destinations
- Set file ownership and group
- Modify file permissions (mode)
- Preserve source file timestamps
- Create destination directories as needed
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# install

> Copy files and set attributes.
> Copy files (often executable) to a system location like `/usr/local/bin`, give them the appropriate permissions/ownership.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/install-invocation.html>.

- Copy files to the destination:

`install {{path/to/source_file1 path/to/source_file2 ...}} {{path/to/destination}}`

- Copy files to the destination, setting their ownership:

`install {{[-o|--owner]}} {{user}} {{path/to/source_file1 path/to/source_file2 ...}} {{path/to/destination}}`

- Copy files to the destination, setting their group ownership:

`install {{[-g|--group]}} {{user}} {{path/to/source_file1 path/to/source_file2 ...}} {{path/to/destination}}`

- Copy files to the destination, setting their `mode`:

`install {{[-m|--mode]}} {{+x}} {{path/to/source_file1 path/to/source_file2 ...}} {{path/to/destination}}`

- Copy files and apply access/modification times of source to the destination:

`install {{[-p|--preserve-timestamps]}} {{path/to/source_file1 path/to/source_file2 ...}} {{path/to/destination}}`

- Copy files and create the directories at the destination if they don't exist:

`install -D {{path/to/source_file1 path/to/source_file2 ...}} {{path/to/destination}}`
