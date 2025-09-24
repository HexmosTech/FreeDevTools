---
title: "Robocopy - Control File and Folder Copy | Online Free DevTools by Hexmos"
name: robocopy
path: /freedevtools/tldr/windows/robocopy
canonical: "https://hexmos.com/freedevtools/tldr/windows/robocopy/"
description: "Control file and folder copying with Robocopy. Perform robust file transfers with advanced options for syncing and mirroring directories. Free online tool, no registration required."
category: windows
keywords:
- windows robocopy copy files
- windows robocopy sync folders
- robocopy directory mirroring
- robocopy file transfer automation
- robocopy command line file copy
- robocopy network file copy
- robocopy resume interrupted copy
- robocopy exclude older files
- robocopy copy with permissions
- robocopy skip existing files
features:
- Copy files and folders recursively.
- Mirror directories, deleting files in the destination.
- Resume interrupted file transfers over network.
- Exclude files based on age.
- Copy file attributes and permissions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# robocopy

> Robust File and Folder Copy.
> By default files will only be copied if the source and destination have different time stamps or different file sizes.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/robocopy>.

- Copy all `.jpg` and `.bmp` files from one directory to another:

`robocopy {{path\to\source_directory}} {{path\to\destination_directory}} {{*.jpg}} {{*.bmp}}`

- Copy all files and subdirectories, including empty ones:

`robocopy {{path\to\source_directory}} {{path\to\destination_directory}} /E`

- Mirror/Sync a directory, deleting anything not in source and include all attributes and permissions:

`robocopy {{path\to\source_directory}} {{path\to\destination_directory}} /MIR /COPYALL`

- Copy all files and subdirectories, excluding source files that are older than destination files:

`robocopy {{path\to\source_directory}} {{path\to\destination_directory}} /E /XO`

- List all files 50 MB or larger instead of copying them:

`robocopy {{path\to\source_directory}} {{path\to\destination_directory}} /MIN:{{52428800}} /L`

- Allow resuming if network connection is lost and limit retries to 5 and wait time to 15 sec:

`robocopy {{path\to\source_directory}} {{path\to\destination_directory}} /Z /R:5 /W:15`

- Display help:

`robocopy /?`
