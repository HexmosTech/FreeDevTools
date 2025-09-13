---
title: "Retrieve File Attributes - getfattr | Free DevTools"
name: getfattr
path: /freedevtools/tldr/linux/getfattr
canonical: "https://hexmos.com/freedevtools/tldr/linux/getfattr/"
description: "Retrieve file attributes with getfattr. Inspect extended attributes, filenames, and file metadata efficiently. Free online tool, no registration required."
category: linux
keywords:
  - extended attributes retrieval
  - getfattr command linux
  - file attribute viewer
  - linux file metadata
  - getfattr examples
  - file system inspector
  - command line file attributes
  - linux extended attributes
  - display file names
  - getfattr usage
features:
  - Display all extended attributes of a file
  - Retrieve specific extended attributes by name
  - Dump file attribute information in a detailed format
  - Inspect file metadata via command line
  - View file names and their associated attributes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# getfattr

> Display file names and extended attributes.
> More information: <https://manned.org/getfattr>.

- Retrieve all extended attributes of a file and display them in a detailed format:

`getfattr {{[-d|--dump]}} {{path/to/file}}`

- Get a specific attribute of a file:

`getfattr {{[-n|--name]}} user.{{attribute_name}} {{path/to/file}}`
