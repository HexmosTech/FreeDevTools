---
title: "RAR Password Cracker - Recover RAR Passwords | Online Free DevTools by Hexmos"
name: rarcrack
path: /freedevtools/tldr/common/rarcrack
canonical: "https://hexmos.com/freedevtools/tldr/common/rarcrack/"
description: "Crack RAR passwords instantly with Rarcrack. Recover forgotten RAR, Zip, and 7z archive passwords using brute-force techniques. Free online tool, no registration required."
category: common
keywords:
- RAR password cracker
- ZIP password recovery
- 7z password unlocker
- Archive password remover
- Brute force password cracker
- Password recovery command-line tool
- RAR archive decryption
- ZIP file decryption
- 7z file decryption
- Linux password cracker
features:
- Crack passwords for RAR, ZIP, and 7z archives
- Specify the archive type for targeted cracking
- Utilize multiple threads for faster password recovery
- Brute-force password attempts on encrypted archives
- Decrypt password-protected archive files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rarcrack

> Password cracker for RAR, Zip and 7z archives.

- Brute force the password for an archive (tries to guess the archive type):

`rarcrack {{path/to/file.zip}}`

- Specify the archive type:

`rarcrack --type {{rar|zip|7z}} {{path/to/file.zip}}`

- Use multiple threads:

`rarcrack --threads {{6}} {{path/to/file.zip}}`
