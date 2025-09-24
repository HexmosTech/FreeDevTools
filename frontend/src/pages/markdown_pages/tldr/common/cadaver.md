---
title: "Control WebDAV - Manage Web Files with Cadaver | Online Free DevTools by Hexmos"
name: cadaver
path: /freedevtools/tldr/common/cadaver
canonical: "https://hexmos.com/freedevtools/tldr/common/cadaver/"
description: "Control WebDAV file management with Cadaver, a command-line client. Access, upload, and manage web resources using this versatile tool. Free online tool, no registration required."
category: common
keywords:
- webdav client
- webdav command line
- cadaver webdav
- unix webdav client
- linux webdav client
- dav file manager
- web file transfer
- webdav remote access
- webdav upload
- webdav download
features:
- Connect to WebDAV servers from the command line
- Browse and navigate WebDAV collections
- Upload and download files to/from WebDAV servers
- Support SSL/TLS connections for secure access
- Manage WebDAV resources on Unix-like systems
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cadaver

> WebDAV client for Unix.
> More information: <https://manned.org/cadaver>.

- Connect to the server <dav.example.com>, open the root collection:

`cadaver {{http://dav.example.com/}}`

- Connect to a server using a specific port and open the collection `/foo/bar/`:

`cadaver {{http://dav.example.com:8022/foo/bar/}}`

- Connect to a server using SSL:

`cadaver {{https://davs.example.com/}}`
