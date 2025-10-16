---
title: "Qt Version Control - Manage Qt Versions | Online Free DevTools by Hexmos"
name: qtchooser
path: "/freedevtools/tldr/linux/qtchooser/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qtchooser/"
description: "Control Qt versions with Qtchooser. Manage multiple Qt installations and select the active version for development. Free online tool, no registration required."
category: linux
keywords:
- Qt version control
- Qt environment manager
- Qt development linux
- Qt configuration linux
- Qt version selector
- Qt qmake path
- Qt binary versions
- Qt application development
- Qt install command
- Linux Qt chooser
features:
- List available Qt versions
- Print Qt environment information
- Run tools with specific Qt versions
- Add Qt version entries
- Display help information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qtchooser

> A wrapper used to select between Qt development binary versions.
> More information: <https://manned.org/qtchooser>.

- List available Qt versions from the configuration files:

`qtchooser --list-versions`

- Print environment information:

`qtchooser --print-env`

- Run the specified tool using the specified Qt version:

`qtchooser --run-tool={{tool}} --qt={{version_name}}`

- Add a Qt version entry to be able to choose from:

`qtchooser --install {{version_name}} {{path/to/qmake}}`

- Display help:

`qtchooser --help`
