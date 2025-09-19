---
title: "Ark Archiver - Manage Archives Efficiently | Online Free DevTools by Hexmos"
name: ark
path: /freedevtools/tldr/linux/ark
canonical: "https://hexmos.com/freedevtools/tldr/linux/ark/"
description: "Manage archives efficiently with Ark Archiver. Extract, create, and add files to archives using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - archive manager linux
  - archive extraction linux
  - ark command linux
  - archive creation linux
  - kde archive tool
  - file archiving linux
  - batch archive processing
  - linux file compression
  - archive manipulation
  - extract archive contents
features:
  - Extract archive contents to a specified directory.
  - Batch extract multiple archives simultaneously.
  - Create new archives with specific files.
  - Add files to existing archives.
  - Manage archive metadata (potentially, depending on archive format).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ark

> KDE's archiving tool.
> More information: <https://docs.kde.org/stable5/en/ark/ark/>.

- Extract a specific archive into the current directory:

`ark {{[-b|--batch]}} {{path/to/archive}}`

- Extract an archive into a specific directory:

`ark {{[-b|--batch]}} {{[-o|--destination]}} {{path/to/directory}} {{path/to/archive}}`

- Create an archive if it does not exist and add specific files to it:

`ark {{[-t|--add-to]}} {{path/to/archive}} {{path/to/file1 path/to/file2 ...}}`
