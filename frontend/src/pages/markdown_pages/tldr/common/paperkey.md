---
title: "Generate OpenPGP Key Archive - Paperkey | Online Free DevTools by Hexmos"
name: paperkey
path: /freedevtools/tldr/common/paperkey
canonical: "https://hexmos.com/freedevtools/tldr/common/paperkey/"
description: "Generate OpenPGP key archives with Paperkey. Securely export and reconstruct secret keys for backup and recovery. Free online tool, no registration required."
category: common
keywords:
- OpenPGP key archive
- Secret key backup
- Key reconstruction tool
- GPG key export
- OpenPGP data recovery
- Secret key management
- Command line key archiver
- Paperkey archive generator
- Linux key backup
- GPG secret key text format
features:
- Generate a text file containing OpenPGP secret key data
- Reconstruct a secret key from text data and a public key
- Export a secret key from GPG and archive it to a text file
- Securely store OpenPGP key data in a human-readable format
- Backup and recover OpenPGP keys using text-based archives
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# paperkey

> An OpenPGP key archiver.
> More information: <https://www.jabberwocky.com/software/paperkey/>.

- Take a specific secret key and generate a text file with the secret data:

`paperkey --secret-key {{path/to/secret_key.gpg}} --output {{path/to/secret_data.txt}}`

- Take the secret key data in `secret_data.txt` and combine it with the public key to reconstruct the secret key:

`paperkey --pubring {{path/to/public_key.gpg}} --secrets {{path/to/secret_data.txt}} --output {{secret_key.gpg}}`

- Export a specific secret key and generate a text file with the secret data:

`gpg --export-secret-key {{key}} | paperkey --output {{path/to/secret_data.txt}}`
