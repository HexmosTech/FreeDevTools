---
title: "Locate Files - Find Commands with whereis | Online Free DevTools by Hexmos"
name: whereis
path: /freedevtools/tldr/linux/whereis
canonical: "https://hexmos.com/freedevtools/tldr/linux/whereis/"
description: "Locate binary, source, and manual page files quickly with whereis.  Find command locations easily and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - find command location
  - locate binary files
  - locate source code
  - locate man pages
  - whereis command linux
  - whereis command usage
  - find program files
  - locate executable files
  - unix file locator
  - linux file finding
features:
  - Locates binary files for commands.
  - Locates source code files for commands.
  - Locates manual pages for commands.
  - Supports specifying file types (-b, -s, -m).
  - Allows searching within specific directories (-B).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# whereis

> Locate the binary, source, and manual page files for a command.
> More information: <https://manned.org/whereis>.

- Locate binary, source and man pages for SSH:

`whereis {{ssh}}`

- Locate [b]inary and [m]an pages for ls:

`whereis -bm {{ls}}`

- Locate [s]ource of gcc and [m]an pages for Git:

`whereis -s {{gcc}} -m {{git}}`

- Locate [b]inaries for gcc in `/usr/bin/` only:

`whereis -b -B {{/usr/bin/}} -f {{gcc}}`

- Locate [u]nusual binaries (those that have more or less than one binary on the system):

`whereis -u *`

- Locate binaries that have [u]nusual [m]anual entries (binaries that have more or less than one manual installed):

`whereis -u -m *`
