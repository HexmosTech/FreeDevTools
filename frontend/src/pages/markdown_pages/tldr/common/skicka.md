---
title: "Manage Google Drive - Skicka File Transfer | Free DevTools"
name: skicka
path: /freedevtools/tldr/common/skicka
canonical: "https://hexmos.com/freedevtools/tldr/common/skicka/"
description: "Manage Google Drive files effortlessly with Skicka, a command-line file transfer tool. Upload, download, list, and manage your Google Drive data. Free online tool, no registration required."
category: common
keywords:
- Google Drive manager
- Skicka file transfer
- Command line Google Drive
- Google Drive CLI
- Cloud storage management
- File upload tool
- File download tool
- Skicka Linux
- Skicka MacOS
- Google Drive command
features:
- Upload files and folders to Google Drive
- Download files and folders from Google Drive
- List files and directories in Google Drive
- Show disk usage of Google Drive folders
- Delete files from Google Drive
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# skicka

> Manage your Google Drive.
> More information: <https://github.com/google/skicka#usage>.

- Upload a file/folder to Google Drive:

`skicka upload {{path/to/local}} {{path/to/remote}}`

- Download a file/folder from Google Drive:

`skicka download {{path/to/remote}} {{path/to/local}}`

- List files:

`skicka ls {{path/to/folder}}`

- Show amount of space used by children folders:

`skicka du {{path/to/parent/folder}}`

- Create a folder:

`skicka mkdir {{path/to/folder}}`

- Delete a file:

`skicka rm {{path/to/file}}`
