---
title: "Bleachbit - Clean Junk Files | Free DevTools"
name: bleachbit_console
path: /freedevtools/tldr/windows/bleachbit_console
canonical: "https://hexmos.com/freedevtools/tldr/windows/bleachbit_console/"
description: "Clean junk files with Bleachbit, a powerful system cleaner. Securely shred files and preview cleanup operations for privacy. Free online tool, no registration required."
category: windows
keywords:
- system cleaner windows
- file shredder windows
- disk cleanup tool
- privacy cleaner windows
- bleachbit command line
- secure file deletion
- junk file remover
- windows cleaner
- system maintenance
- temporary file cleaner
features:
- Shred files securely to prevent recovery
- Preview files to be deleted before cleanup
- List available cleaning options and customize cleanup process
- Clean specific system areas and applications
- Automate cleanup tasks with command-line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bleachbit_console

> Clean junk files on the filesystem.
> More information: <https://docs.bleachbit.org/doc/command-line-interface.html>.

- Start the graphical user interface (GUI) version of Bleachbit:

`bleachbit_console.exe --gui`

- Shred a file:

`bleachbit_console.exe --shred {{path/to/file}}`

- List available cleaner options:

`bleachbit_console.exe --list-cleaners`

- Preview the files that will be deleted and other changes that will be made before actually performing the clean-up operation:

`bleachbit_console.exe --preview {{--preset|cleaner1.option1 cleaner2.* ...}}`

- Perform the clean-up operation and delete files:

`bleachbit_console.exe --clean {{--preset|cleaner1.option1 cleaner2.* ...}}`
