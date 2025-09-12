---
title: "Manage Default Apps - Control Application Settings | Free DevTools"
name: handlr
path: /freedevtools/tldr/linux/handlr
canonical: "https://hexmos.com/freedevtools/tldr/linux/handlr/"
description: "Manage default applications with handlr.  Set, get, and list default applications for different file types easily. Free online tool, no registration required."
category: linux
keywords:
  - application default manager
  - default app controller
  - file type association manager
  - linux command-line tool
  - desktop application management
  - set default programs linux
  - manage default apps command
  - default application setter
  - command line default app
  - application settings manager
features:
  - Open files with their associated default application.
  - Set default applications for specific file types.
  - List all currently configured default applications.
  - Retrieve the default application for a given file type.
  - Manage application associations via the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# handlr

> Manage your default applications.
> More information: <https://github.com/chmln/handlr>.

- Open a URL in the default application:

`handlr open {{https://example.com}}`

- Open a PDF in the default PDF viewer:

`handlr open {{path/to/file.pdf}}`

- Set `imv` as the default application for PNG files:

`handlr set {{.png}} {{imv.desktop}}`

- Set MPV as the default application for all audio files:

`handlr set {{'audio/*'}} {{mpv.desktop}}`

- List all default apps:

`handlr list`

- Print the default application for PNG files:

`handlr get {{.png}}`
