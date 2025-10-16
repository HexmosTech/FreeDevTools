---
title: "Wine Executable Runner - Run Windows Apps on Linux | Online Free DevTools by Hexmos"
name: wine
path: "/freedevtools/tldr/linux/wine/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/wine/"
description: "Run Windows executables seamlessly with Wine. Execute .exe files, install MSI packages, and utilize common Windows applications directly on Linux systems. Free online tool, no registration required."
category: linux
keywords:
  - wine linux
  - windows executable runner linux
  - run windows apps linux
  - wine msi installer
  - wine command line
  - execute exe linux
  - wine notepad
  - wine regedit
  - wine explorer
  - wine applications
features:
  - Run Windows applications on Linux systems.
  - Execute .exe files directly.
  - Install and uninstall MSI packages.
  - Access common Windows utilities like Notepad and Registry Editor.
  - Manage Windows processes from the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wine

> Run Windows executables on Unix-based systems.
> More information: <https://gitlab.winehq.org/wine/wine/-/wikis/Commands>.

- Run a specific program inside the `wine` environment:

`wine {{command}}`

- Run a specific program in background:

`wine start {{command}}`

- Install/uninstall an MSI package:

`wine msiexec /{{i|x}} {{path/to/package.msi}}`

- Run `File Explorer`, `Notepad`, or `WordPad`:

`wine {{explorer|notepad|write}}`

- Run `Registry Editor`, `Control Panel`, or `Task Manager`:

`wine {{regedit|control|taskmgr}}`

- Run the configuration tool:

`wine winecfg`
