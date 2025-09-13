---
title: "LFTP File Transfer - Manage Remote Files | Free DevTools"
name: lftp
path: /freedevtools/tldr/linux/lftp
canonical: "https://hexmos.com/freedevtools/tldr/linux/lftp/"
description: "Manage remote files easily with LFTP File Transfer, a command-line file transfer program. Securely transfer files, update directories and rename files. Free online tool, no registration required."
category: linux
keywords:
- linux file transfer
- lftp command line
- remote file management
- ftp client linux
- secure file transfer
- lftp mirror directory
- command line ftp
- lftp multiple files
- lftp scripting
- lftp automation
features:
- Connect to FTP servers securely.
- Download multiple files using glob expressions.
- Upload multiple files using glob expressions.
- Mirror and synchronize entire directories.
- Rename files on remote servers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lftp

> Sophisticated file transfer program.
> More information: <https://lftp.yar.ru/lftp-man.html>.

- Connect to an FTP server:

`lftp {{[-u|--user]}} {{username}} {{ftp.example.com}}`

- Download multiple files (glob expression):

`mget {{path/to/*.png}}`

- Upload multiple files (glob expression):

`mput {{path/to/*.zip}}`

- Delete multiple files on the remote server:

`mrm {{path/to/*.txt}}`

- Rename a file on the remote server:

`mv {{original_filename}} {{new_filename}}`

- Download or update an entire directory:

`mirror {{path/to/remote_dir}} {{path/to/local_output_dir}}`

- Upload or update an entire directory:

`mirror {{[-R|--reverse]}} {{path/to/local_dir}} {{path/to/remote_output_dir}}`
