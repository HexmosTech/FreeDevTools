---
title: "Create Encrypted Filesystems - with encfs | Online Free DevTools by Hexmos"
name: encfs
path: /freedevtools/tldr/common/encfs
canonical: "https://hexmos.com/freedevtools/tldr/common/encfs/"
description: "Create encrypted filesystems with encfs. Secure your data with ease using this command line tool for creating and mounting virtual encrypted storage. Free online tool, no registration required."
category: common
keywords:
- encrypted filesystem creator
- secure data storage
- virtual encrypted volume
- encfs encryption
- fuse filesystem mount
- command line encryption tool
- linux encryption
- macos encryption
- cross-platform encryption
- data privacy tool
features:
- Mount encrypted virtual filesystems
- Create new encrypted storage containers
- Manage reverse-encrypted snapshots of directories
- Operate in foreground for debugging
- Utilize standard configuration options for encryption
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# encfs

> Mount or create encrypted virtual filesystems.
> See also: `fusermount` which can unmount filesystems mounted by this command.
> More information: <https://github.com/vgough/encfs>.

- Initialize or mount an encrypted filesystem:

`encfs /{{path/to/cipher_dir}} /{{path/to/mount_point}}`

- Initialize an encrypted filesystem with standard settings:

`encfs --standard /{{path/to/cipher_dir}} /{{path/to/mount_point}}`

- Run encfs in the foreground instead of spawning a daemon:

`encfs -f /{{path/to/cipher_dir}} /{{path/to/mount_point}}`

- Mount an encrypted snapshot of a plain directory:

`encfs --reverse {{path/to/plain_dir}} {{path/to/cipher_dir}}`
