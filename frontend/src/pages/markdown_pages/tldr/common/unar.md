---
title: "Extract Archive - Extract Files from Archives | Online Free DevTools by Hexmos"
name: unar
path: /freedevtools/tldr/common/unar
canonical: "https://hexmos.com/freedevtools/tldr/common/unar/"
description: "Extract archive files quickly with unar. Manage and access the contents of compressed files with this command line utility. Free online tool, no registration required."
category: common
keywords:
- archive extractor
- unarchive files
- file decompression
- command line archive tool
- archive utility
- extract tar gz
- extract zip
- extract rar
- extract 7z
- linux unarchive
features:
- Extract contents from various archive formats
- Specify an output directory for extracted files
- Force overwrite existing files during extraction
- Force rename extracted files to avoid conflicts
- Skip extraction of existing files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# unar

> Extract contents from archive files.
> More information: <https://manned.org/unar>.

- Extract an archive to the current directory:

`unar {{path/to/archive}}`

- Extract an archive to the specified directory:

`unar {{[-o|-output-directory]}} {{path/to/directory}} {{path/to/archive}}`

- Force overwrite if files to be unpacked already exist:

`unar {{[-f|-force-overwrite]}} {{path/to/archive}}`

- Force rename if files to be unpacked already exist:

`unar {{[-r|-force-rename]}} {{path/to/archive}}`

- Force skip if files to be unpacked already exist:

`unar {{[-s|-force-skip]}} {{path/to/archive}}`
