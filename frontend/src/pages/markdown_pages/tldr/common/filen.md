---
title: "Filen - Control Cloud Storage | Free DevTools"
name: filen
path: /freedevtools/tldr/common/filen
canonical: "https://hexmos.com/freedevtools/tldr/common/filen/"
description: "Control cloud storage with Filen. Securely upload, download, and manage your files with end-to-end encryption. Free online tool, no registration required."
category: common
keywords:
- filen cloud storage control
- encrypted file manager
- filen command line interface
- cloud file synchronization
- filen data management
- remote file access
- filen backup utility
- filen file deletion
- filen trash recovery
- filen remote folder management
features:
- Upload local files to remote folders
- Download files and folders by ID
- List contents of remote directories
- Delete remote files and recover from trash
- Synchronize local and remote folders
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# filen

> Interface with Filen, an end-to-end encrypted cloud storage service.
> More information: <https://github.com/FilenCloudDienste/filen-cli>.

- Enter interactive mode:

`filen`

- Upload a local file to a specific remote folder:

`filen upload {{path/to/local_file}} {{remote_folder_id}}`

- Download a file or folder using its remote ID:

`filen download {{remote_id}} {{path/to/local_destination}}`

- List files and folders inside a remote folder:

`filen ls {{remote_folder}}`

- Delete a remote file or folder (move it to trash):

`filen rm {{remote_id}}`

- Restore a trashed item:

`filen trash restore {{remote_id}}`

- Synchronize a local folder with a remote folder (two-way sync):

`filen sync {{path/to/local_folder}}:/{{remote_folder}} --continuous`

- Download changes from the cloud to a local folder (one-way sync):

`filen sync {{path/to/local_folder}}:ctl:/{{remote_folder}}`
