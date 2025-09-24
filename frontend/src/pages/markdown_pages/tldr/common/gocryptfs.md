---
title: "Encrypt Filesystem - Manage Files with gocryptfs | Online Free DevTools by Hexmos"
name: gocryptfs
path: /freedevtools/tldr/common/gocryptfs
canonical: "https://hexmos.com/freedevtools/tldr/common/gocryptfs/"
description: "Encrypt filesystems with gocryptfs, a secure overlay filesystem. Manage encrypted data, create snapshots, and change passwords with ease. Free online tool, no registration required."
category: common
keywords:
- encrypted filesystem manager
- gocryptfs file encryption
- linux filesystem security
- encrypted overlay filesystem
- gocryptfs password manager
- gocryptfs snapshot tool
- data encryption tool
- command-line encryption utility
- file privacy manager
- secure file storage
features:
- Initialize an encrypted filesystem
- Mount an encrypted directory
- Change gocryptfs password securely
- Create encrypted snapshots of directories
- Utilize master key for mounting
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gocryptfs

> Encrypted overlay filesystem written in Go.
> More information: <https://github.com/rfjakob/gocryptfs#use>.

- Initialize an encrypted filesystem:

`gocryptfs -init {{path/to/cipher_dir}}`

- Mount an encrypted filesystem:

`gocryptfs {{path/to/cipher_dir}} {{path/to/mount_point}}`

- Mount with the explicit master key instead of password:

`gocryptfs --masterkey {{path/to/cipher_dir}} {{path/to/mount_point}}`

- Change the password:

`gocryptfs --passwd {{path/to/cipher_dir}}`

- Make an encrypted snapshot of a plain directory:

`gocryptfs --reverse {{path/to/plain_dir}} {{path/to/cipher_dir}}`
