---
title: "Expand - Uncompress Cabinet Files | Free DevTools"
name: expand
path: /freedevtools/tldr/windows/expand
canonical: "https://hexmos.com/freedevtools/tldr/windows/expand/"
description: "Uncompress Cabinet (CAB) files with Expand. Extract individual files, list contents, or unpack entire archives easily. Free online tool, no registration required."
category: windows
keywords:
  - cabinet file uncompress
  - cab file extractor
  - windows cab expand
  - extract cab contents
  - expand command windows
  - cab archive manager
  - cabinet file viewer
  - cab decompression tool
  - windows archive expand
  - cabinet file utility
features:
  - Uncompress single-file Cabinet archives
  - List the contents of a Cabinet file
  - Extract all files from a Cabinet archive
  - Extract specific files from a Cabinet archive
  - Ignore directory structure during uncompression
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# expand

> Uncompress Windows Cabinet files.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/expand>.

- Uncompress a single-file Cabinet file to the specified directory:

`expand {{path\to\file.cab}} {{path\to\directory}}`

- Display the list of files in a source Cabinet file:

`expand {{path\to\file.cab}} {{path\to\directory}} -d`

- Uncompress all files from the Cabinet file:

`expand {{path\to\file.cab}} {{path\to\directory}} -f:*`

- Uncompress a specific file from a Cabinet file:

`expand {{path\to\file.cab}} {{path\to\directory}} -f:{{path\to\file}}`

- Ignore the directory structure when uncompressing, and add them to a single directory:

`expand {{path\to\file.cab}} {{path\to\directory}} -i`
