---
title: "Mount CIFS - Access Network Shares on Linux | Free DevTools"
name: mount.cifs
path: /freedevtools/tldr/linux/mount.cifs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mount.cifs/"
description: "Mount CIFS shares with mount.cifs on Linux for easy network access. Configure user credentials and permissions seamlessly. Free online tool, no registration required."
category: linux
keywords:
- CIFS mount
- SMB mount
- Linux mount CIFS
- Network share mount
- Samba share mount
- CIFS client Linux
- mount.cifs options
- Linux file sharing
- Command line CIFS mount
- SMB client Linux
features:
- Mount SMB/CIFS shares from a server
- Authenticate with username and password
- Connect as a guest user without credentials
- Set user and group ownership for mounted directories
- Mount network shares with specified user ID and group ID
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mount.cifs

> Mount SMB (Server Message Block) or CIFS (Common Internet File System) shares.
> Note: You can also do the same thing by passing the `-t cifs` option to `mount`.
> More information: <https://manned.org/mount.cifs>.

- Connect using the specified username or `$USER` by default (you will be prompted for a password):

`mount.cifs -o user={{username}} //{{server}}/{{share_name}} {{mountpoint}}`

- Connect as the guest user (without a password):

`mount.cifs -o guest //{{server}}/{{share_name}} {{mountpoint}}`

- Set ownership information for the mounted directory:

`mount.cifs -o uid={{user_id|username}},gid={{group_id|groupname}} //{{server}}/{{share_name}} {{mountpoint}}`
