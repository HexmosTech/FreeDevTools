---
title: "PO File Updater - Update PO Files | Online Free DevTools by Hexmos"
name: po4a-updatepo
path: "/freedevtools/tldr/linux/po4a-updatepo/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/po4a-updatepo/"
description: "Update PO files efficiently with po4a-updatepo.  Synchronize your translation files with source changes quickly and easily. Free online tool, no registration required."
category: linux
keywords:
  - po file updater
  - po file synchronization
  - translation file management
  - gettext update
  - po4a command
  - po file editor
  - localization update
  - internationalization tool
  - po file converter
  - command-line translation
features:
  - Updates PO files based on changes in source files.
  - Supports multiple PO file updates simultaneously.
  - Offers different formatting options for output.
  - Provides a command-line interface for easy integration.
  - Uses the po4a library for efficient translation management.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# po4a-updatepo

> Update the translation (in PO format) of a documentation.
> More information: <https://po4a.org/man/man1/po4a-updatepo.1.php>.

- Update a PO file according to the modification of its origin file:

`po4a-updatepo --format {{text}} --master {{path/to/master.txt}} --po {{path/to/result.po}}`

- List available formats:

`po4a-updatepo --help-format`

- Update several PO files according to the modification of their origin file:

`po4a-updatepo --format {{text}} --master {{path/to/master.txt}} --po {{path/to/po1.po}} --po {{path/to/po2.po}}`
