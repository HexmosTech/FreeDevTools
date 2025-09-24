---
title: "Unopkg - Manage LibreOffice Extensions | Online Free DevTools by Hexmos"
name: unopkg
path: /freedevtools/tldr/linux/unopkg
canonical: "https://hexmos.com/freedevtools/tldr/linux/unopkg/"
description: "Manage LibreOffice extensions effectively with Unopkg. Add, remove, and list extensions for enhanced functionality. Free online tool, no registration required."
category: linux
keywords:
- libreoffice extension manager
- linux libreoffice extensions
- unopkg command
- install libreoffice extension
- remove libreoffice extension
- list libreoffice extensions
- libreoffice extension deployment
- libreoffice package manager
- extension manager linux
- unopkg linux
features:
- Add and deploy LibreOffice extensions via command line
- Remove specific LibreOffice extensions by ID
- Display a list of installed LibreOffice extensions
- Launch the LibreOffice extensions GUI
- Reinstall all deployed LibreOffice extensions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unopkg

> LibreOffice extensions manager.
> Download extensions from <https://extensions.libreoffice.org>.
> See also: `libreoffice`.
> More information: <https://manned.org/unopkg>.

- Add and deploy given extension:

`unopkg add {{path/to/extension}}`

- Remove extension:

`unopkg remove {{extensions_id}}`

- Display information about deployed extensions:

`unopkg list`

- Raise extensions dialog (GUI):

`unopkg gui`

- Reinstall all deployed extensions:

`unopkg reinstall`

- Display help:

`unopkg {{[-h|--help]}}`
