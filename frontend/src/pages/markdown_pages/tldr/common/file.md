---
title: "File Type - Determine File Type with File Command | Online Free DevTools by Hexmos"
name: file
path: /freedevtools/tldr/common/file
canonical: "https://hexmos.com/freedevtools/tldr/common/file/"
description: "Determine file type with File command. Identify file format, examine compressed archives, and work with special files. Free online tool, no registration required."
category: common
keywords:
- file type identifier
- file format detection
- mime type lookup
- zip archive analysis
- special file identification
- device file type
- linux file command
- macos file command
- command line file type
- file encoding detection
features:
- Identifies file type based on content and metadata.
- Examines contents of compressed archives like ZIP files.
- Works with special and device files.
- Continues file type detection until the end of the file.
- Determines MIME encoding type of a file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# file

> Determine file type.
> More information: <https://manned.org/file>.

- Give a description of the type of the specified file:

`file {{path/to/file}}`

- Look inside a zipped file and determine the file type(s) inside:

`file {{[-z|--uncompress]}} {{path/to/file.zip}}`

- Allow `file` to work with special or device files:

`file {{[-s|--special-files]}} {{path/to/file}}`

- Don't stop at first file type match; keep going until the end of the file:

`file {{[-k|--keep-going]}} {{path/to/file}}`

- Determine the MIME encoding type of a file:

`file {{[-i|--mime]}} {{path/to/file}}`
