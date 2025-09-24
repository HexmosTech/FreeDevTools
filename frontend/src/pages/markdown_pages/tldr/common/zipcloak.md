---
title: "Encrypt Zip Archives - Secure Files with Zipcloak | Online Free DevTools by Hexmos"
name: zipcloak
path: /freedevtools/tldr/common/zipcloak
canonical: "https://hexmos.com/freedevtools/tldr/common/zipcloak/"
description: "Encrypt Zip archives quickly with Zipcloak, a powerful command-line tool. Secure sensitive data and manage encrypted files efficiently. Free online tool, no registration required."
category: common
keywords:
- Zip archive encryption
- Encrypt zip file
- Zip password protection
- Command-line zip encryption
- Secure zip archives
- Zipcloak linux
- Zipcloak macos
- Zipcloak command
- Archive encryption tool
- Password protect zip
features:
- Encrypt existing Zip archives
- Decrypt previously encrypted Zip archives
- Output encrypted contents to a new Zip file
- Secure Zip files with password protection
- Command-line interface for efficient encryption
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zipcloak

> Encrypt the contents within a Zip archive.
> More information: <https://manned.org/zipcloak>.

- Encrypt the contents of a Zip archive:

`zipcloak {{path/to/archive.zip}}`

- Decrypt the contents of a Zip archive:

`zipcloak {{[-d|--decrypt]}} {{path/to/archive.zip}}`

- Output the encrypted contents into a new Zip archive:

`zipcloak {{path/to/archive.zip}} {{[-O|--output-file]}} {{path/to/encrypted.zip}}`
