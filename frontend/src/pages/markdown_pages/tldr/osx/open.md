---
title: "Open Files - Launch Applications | Free DevTools"
name: open
path: /freedevtools/tldr/osx/open
canonical: "https://hexmos.com/freedevtools/tldr/osx/open/"
description: "Launch applications and files directly with Open command. Easily access directories and reveal files in Finder. Free online tool, no registration required."
category: osx
keywords:
  - file launcher
  - application opener
  - directory navigator
  - macOS application launcher
  - Finder integration
  - bundle identifier lookup
  - command line file opener
  - open file extension
  - reveal file in finder
  - new instance application
features:
  - Open files with associated applications
  - Launch macOS applications by name
  - Launch macOS applications by bundle identifier
  - Open current directory in Finder
  - Reveal files in Finder
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# open

> Open files, directories and applications.
> More information: <https://keith.github.io/xcode-man-pages/open.1.html>.

- Open a file with the associated application:

`open {{file.ext}}`

- Run a graphical macOS [a]pplication:

`open -a "{{Application}}"`

- Run a graphical macOS app based on the [b]undle identifier (refer to `osascript` for an easy way to get this):

`open -b {{com.domain.application}}`

- Open the current directory in Finder:

`open .`

- [R]eveal a file in Finder:

`open -R {{path/to/file}}`

- Open all the files of a given extension in the current directory with the associated application:

`open {{*.ext}}`

- Open a [n]ew instance of an application specified via [b]undle identifier:

`open -n -b {{com.domain.application}}`
