---
title: "SMB Client - Access SMB/CIFS Shares | Online Free DevTools by Hexmos"
name: smbclient
path: /freedevtools/tldr/linux/smbclient
canonical: "https://hexmos.com/freedevtools/tldr/linux/smbclient/"
description: "Access SMB/CIFS shares easily with smbclient.  Manage files, connect to servers, and control network resources. Free online tool, no registration required."
category: linux
keywords:
  - smbclient commands
  - smb share access
  - cifs file transfer
  - network file sharing
  - smb server connection
  - smbclient file upload
  - smbclient file download
  - linux smbclient
  - windows smbclient
  - smbclient tutorial
features:
  - Connect to SMB/CIFS shares with username and password authentication.
  - Upload and download files to and from remote servers.
  - List available shares anonymously or with credentials.
  - Specify workgroup for connection to domain-joined servers.
  - Execute commands directly on the server via the smbclient interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# smbclient

> FTP-like client to access SMB/CIFS resources on servers.
> More information: <https://manned.org/smbclient>.

- Connect to a share (user will be prompted for password; `exit` to quit the session):

`smbclient {{//server/share}}`

- Connect with a different username:

`smbclient {{//server/share}} --user {{username}}`

- Connect with a different workgroup:

`smbclient {{//server/share}} --workgroup {{domain}} --user {{username}}`

- Connect with a username and password:

`smbclient {{//server/share}} --user {{username%password}}`

- Download a file from the server:

`smbclient {{//server/share}} --directory {{path/to/directory}} --command "get {{file.txt}}"`

- Upload a file to the server:

`smbclient {{//server/share}} --directory {{path/to/directory}} --command "put {{file.txt}}"`

- List the shares from a server anonymously:

`smbclient --list={{server}} --no-pass`
