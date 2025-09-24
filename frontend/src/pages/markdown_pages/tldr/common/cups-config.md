---
title: "CUPS Config - Show CUPS Configuration | Online Free DevTools by Hexmos"
name: cups-config
path: /freedevtools/tldr/common/cups-config
canonical: "https://hexmos.com/freedevtools/tldr/common/cups-config/"
description: "Show CUPS configuration instantly with CUPS Config. Display server paths, data directories, and versions. Free online tool, no registration required."
category: common
keywords:
- cups config information
- cups server configuration
- cups datadir location
- cups serverroot location
- cups serverbin path
- cups version display
- cups command line tool
- linux cups config
- printing configuration linux
- cups printing server
features:
- Display the CUPS server binary path
- Show the CUPS server root directory
- Reveal the CUPS data directory location
- Output CUPS version information
- Provide help documentation for cups-config
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cups-config

> Show technical information about your CUPS print server installation.
> More information: <https://openprinting.github.io/cups/doc/man-cups-config.html>.

- Show where CUPS is currently installed:

`cups-config --serverbin`

- Show the location of CUPS' configuration directory:

`cups-config --serverroot`

- Show the location of CUPS' data directory:

`cups-config --datadir`

- Display help:

`cups-config --help`

- Display CUPS version:

`cups-config --version`
