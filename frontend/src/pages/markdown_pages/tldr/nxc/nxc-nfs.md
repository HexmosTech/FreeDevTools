---
title: "NFS Pentesting - Exploit NFS Servers | Online Free DevTools by Hexmos"
name: nxc-nfs
path: /freedevtools/tldr/nxc/nxc-nfs
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxc-nfs/"
description: "Exploit NFS servers with NXC NFS. Pentest network file systems, enumerate shares, and transfer files securely. Free online tool, no registration required."
category: common
keywords:
- NFS pentesting
- Network file system exploitation
- NFS share enumeration
- NXC NFS tool
- Linux NFS server security
- NFS anonymous access exploit
- Network security auditing
- Penetration testing NFS
- NFS file transfer
- Command-line NFS analysis
features:
- Detect the version of a remote NFS server
- List available NFS shares on a target
- Enumerate exposed shares recursively to a specified depth
- Download specified remote files from an NFS share
- Upload specified local files to a remote NFS share
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nxc nfs

> Pentest and exploit NFS servers. Currently supports anonymous mode only.
> More information: <https://www.netexec.wiki/nfs-protocol>.

- Detect the version of a remote NFS server:

`nxc nfs {{192.168.178.0/24}}`

- List the available NFS shares:

`nxc nfs {{192.168.178.2}} --shares`

- Enumerate the exposed shares recursively to the specified depth:

`nxc nfs {{192.168.178.2}} --enum-shares {{5}}`

- Download the specified remote file:

`nxc nfs {{192.168.178.2}} --get-file {{path/to/remote_file}} {{path/to/local_file}}`

- Upload the specified local file to the remote share:

`nxc nfs {{192.168.178.2}} --put-file {{path/to/local_file}} {{path/to/remote_file}}`
