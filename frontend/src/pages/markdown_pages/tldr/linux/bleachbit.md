---
title: "BleachBit - Clean Junk Files | Free DevTools"
name: bleachbit
path: /freedevtools/tldr/linux/bleachbit
canonical: "https://hexmos.com/freedevtools/tldr/linux/bleachbit/"
description: "Clean junk files with BleachBit, a powerful disk cleanup tool.  Shred files securely and preview changes before deleting. Free online tool, no registration required."
category: linux
keywords:
  - file cleanup tool
  - disk cleanup utility
  - junk file remover
  - shred files securely
  - system cleanup
  - bleachbit command line
  - data deletion
  - privacy enhancement
  - file shredder
  - secure deletion
features:
  - Securely shreds files to prevent recovery.
  - Cleans temporary files and cache data.
  - Previews changes before performing cleanup.
  - Supports custom cleaner presets.
  - Offers a graphical user interface (GUI).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bleachbit

> Clean junk files on the filesystem.
> More information: <https://docs.bleachbit.org/doc/command-line-interface.html>.

- Start the graphical user interface (GUI) version of Bleachbit:

`bleachbit --gui`

- Shred a file:

`bleachbit {{[-s|--shred]}} {{path/to/file}}`

- List available cleaner options:

`bleachbit {{[-l|--list-cleaners]}}`

- Preview the files that will be deleted and other changes that will be made before actually performing the clean-up operation:

`bleachbit {{[-p|--preview]}} --preset {{cleaner1.option1 cleaner2.option2 ...}}`

- Perform the clean-up operation and delete files:

`bleachbit {{[-c|--clean]}} --preset {{cleaner1.option1 cleaner2.option2 ...}}`
