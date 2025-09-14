---
title: "Encrypt Files - Create GPG Archive with gpg-zip | Free DevTools"
name: gpg-zip
path: /freedevtools/tldr/gpg/gpg-zip
canonical: "https://hexmos.com/freedevtools/tldr/gpg/gpg-zip/"
description: "Encrypt files with gpg-zip and create secure GPG archives. Protect sensitive data using encryption and decryption. Free online tool, no registration required."
category: common
keywords:
- GPG archive encryption
- File encryption command
- GPG file decryption
- Symmetric encryption archive
- Linux GPG command
- MacOS GPG command
- Command line encryption tool
- Archive password protection
- Encrypted directory archive
- GPG archive list contents
features:
- Encrypt files into a GPG archive
- Decrypt existing GPG archives
- List the contents of a GPG archive
- Use passphrase-based symmetric encryption
- Specify output filename for encrypted archive
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gpg-zip

> Encrypt files and directories in an archive using GPG.
> More information: <https://www.gnupg.org/documentation/manuals/gnupg/gpg_002dzip.html>.

- Encrypt a directory into `archive.gpg` using a passphrase:

`gpg-zip {{[-c|--symmetric]}} {{[-o|--output]}} {{archive.gpg}} {{path/to/directory}}`

- Decrypt `archive.gpg` into a directory of the same name:

`gpg-zip {{[-d|--decrypt]}} {{path/to/archive.gpg}}`

- List the contents of the encrypted `archive.gpg`:

`gpg-zip --list-archive {{path/to/archive.gpg}}`
