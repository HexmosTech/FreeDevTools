---
title: "Share Filesystem - Control Network Shares on SunOS | Online Free DevTools by Hexmos"
name: share
path: /freedevtools/tldr/sunos/share
canonical: "https://hexmos.com/freedevtools/tldr/sunos/share/"
description: "Control network shares on SunOS with Share command. Manage NFS exports, set permissions, and make resources available over the network. Free online tool, no registration required."
category: sunos
keywords:
  - network file sharing sunos
  - nfs share configuration
  - sunos filesystem sharing
  - remote filesystem management sunos
  - share command sunos
  - sunos nfs exports
  - controlling network shares sunos
  - persistent network sharing sunos
  - sunos system administration share
  - managing shared resources sunos
features:
  - share directories with read/write access on SunOS
  - share directories with read-only access on SunOS
  - configure share options for root access
  - list currently shared file systems on SunOS
  - make sharing persistent across reboots using dfstab
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
