---
title: share
name: share
path: /freedevtools/tldr/sunos/share
canonical: "https://hexmos.com/freedevtools/tldr/sunos/share/"
description: Make local resources/filesystems available for mounting by remote systems.
category: sunos
keywords:
- network file sharing
- making directories accessible
- remote filesystem access
- configuring NFS shares
- sharing resources over network
- controlling access to filesystems
- setting share permissions
- persistent filesystem sharing
- system administration tasks
- managing shared resources
features:
- share directories with read/write access
- share directories with read-only access
- configure share options like root access
- list currently shared file systems
- make sharing persistent across reboots
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# share

> Make local resource/filesystem available for mounting by remote systems.
> More information: <https://docs.oracle.com/cd/E36784_01/html/E36825/gntjt.html>.

- List all currently shared file systems:

`share`

- Share a directory with read/write access:

`share -F nfs -o rw /{{path/to/directory}}`

- Share a directory with read-only access:

`share -F nfs -o ro /{{path/to/directory}}`

- Share a directory with specific options (e.g., allow root access from a specific host):

`share -F nfs -o rw,root={{hostname}} /{{path/to/directory}}`

- Make sharing persistent by adding entries to `/etc/dfs/dfstab`:

`echo "share -F nfs -o rw /{{path/to/directory}}" >> /etc/dfs/dfstab`
