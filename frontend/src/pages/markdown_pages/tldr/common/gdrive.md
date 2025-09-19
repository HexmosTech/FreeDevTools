---
title: "GDrive Manager - Control Google Drive Files | Online Free DevTools by Hexmos"
name: gdrive
path: /freedevtools/tldr/common/gdrive
canonical: "https://hexmos.com/freedevtools/tldr/common/gdrive/"
description: "Manage Google Drive files effortlessly with GDrive Manager. Upload, download, and update files directly from the command line. Free online tool, no registration required."
category: common
keywords:
- Google Drive Manager
- Google Drive command line
- GDrive upload files
- GDrive download files
- GDrive update files
- Google Drive Linux
- Google Drive MacOS
- Google Drive Windows
- Google Drive CLI tool
- Google Drive automation
features:
- Upload files and folders to Google Drive
- Download files and folders from Google Drive
- Update existing Google Drive files
- Specify parent folder for uploads using ID
- Automate Google Drive file management
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gdrive

> Interact with Google Drive.
> Folder/file ID can be obtained from the Google Drive folder or ID URL.
> More information: <https://github.com/gdrive-org/gdrive>.

- Upload a local path to the parent folder with the specified ID:

`gdrive upload {{[-p|--parent]}} {{id}} {{path/to/file_or_folder}}`

- Download file or directory by ID to current directory:

`gdrive download {{id}}`

- Download to a given local path by its ID:

`gdrive download --path {{path/to/folder}} {{id}}`

- Create a new revision of an ID using a given file or folder:

`gdrive update {{id}} {{path/to/file_or_folder}}`
