---
title: "Pacdiff - Manage Pacman Configuration Files | Online Free DevTools by Hexmos"
name: pacdiff
path: /freedevtools/tldr/linux/pacdiff
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacdiff/"
description: "Manage pacman configuration files with Pacdiff. Review, merge, and backup `.pacorig`, `.pacnew`, and `.pacsave` files efficiently. Free online tool, no registration required."
category: linux
keywords:
- pacman configuration files
- pacnew merge
- pacorig resolve
- pacsave management
- linux configuration management
- pacdiff editor
- pacman update
- configuration backup
- file comparison linux
- locate pacman configs
features:
- Review configuration files needing maintenance in interactive mode.
- Remove and merge configuration files using sudo.
- Create backups of original configuration files before overwriting.
- Utilize a specific editor for viewing and merging configurations.
- Scan for configuration files using locate instead of the pacman database.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pacdiff

> Maintenance utility for `.pacorig`, `.pacnew` and `.pacsave` files created by `pacman`.
> More information: <https://manned.org/pacdiff>.

- Review files that need maintenance in interactive mode:

`pacdiff`

- Use sudo and sudoedit to remove and merge files:

`pacdiff {{[-s|--sudo]}}`

- Review files needing maintenance, creating `.bak`ups of the original if you `(O)verwrite`:

`pacdiff {{[-s|--sudo]}} {{[-b|--backup]}}`

- Use a specific editor to view and merge configuration files (default is `vim -d`):

`DIFFPROG={{editor}} pacdiff`

- Scan for configuration files with `locate` instead of using `pacman` database:

`pacdiff {{[-l|--locate]}}`

- Display help:

`pacdiff {{[-h|--help]}}`
