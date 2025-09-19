---
title: "Xcopy - Copy Files and Directories | Online Free DevTools by Hexmos"
name: xcopy
path: /freedevtools/tldr/windows/xcopy
canonical: "https://hexmos.com/freedevtools/tldr/windows/xcopy/"
description: "Copy files instantly with Xcopy, the Windows command-line tool for file and directory replication. Secure your data and simplify backups. Free online tool, no registration required."
category: windows
keywords:
- windows xcopy command
- file copy windows
- directory copy windows
- xcopy command line
- windows file transfer
- windows directory replication
- xcopy syntax
- xcopy examples
- xcopy backup
- xcopy archive
features:
- Copy files and directories to a specified destination
- Replicate directory structures without copying files
- Resume file transfers after network interruptions
- Include or exclude empty directories in the copy process
- Preserve Access Control Lists (ACLs) during file copies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xcopy

> Copy files and directory trees.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/xcopy>.

- Copy the file(s) to the specified destination:

`xcopy {{path\to\file_or_directory}} {{path\to\destination_directory}}`

- List files that will be copied before copying:

`xcopy {{path\to\file_or_directory}} {{path\to\destination_directory}} /p`

- Copy the directory structure only, excluding files:

`xcopy {{path\to\file_or_directory}} {{path\to\destination_directory}} /t`

- Include empty directories when copying:

`xcopy {{path\to\file_or_directory}} {{path\to\destination_directory}} /e`

- Keep the source ACL in the destination:

`xcopy {{path\to\file_or_directory}} {{path\to\destination_directory}} /o`

- Allow resuming when network connection is lost:

`xcopy {{path\to\file_or_directory}} {{path\to\destination_directory}} /z`

- Disable the prompt when the file exists in the destination:

`xcopy {{path\to\file_or_directory}} {{path\to\destination_directory}} /y`

- Display help:

`xcopy /?`
