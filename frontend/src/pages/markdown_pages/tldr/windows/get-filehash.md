---
title: "Get File Hash - Generate File Hashes | Online Free DevTools by Hexmos"
name: get-filehash
path: /freedevtools/tldr/windows/get-filehash
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-filehash/"
description: "Generate file hashes with Get-FileHash. Quickly verify file integrity and authenticity using various algorithms. Free online tool, no registration required."
category: windows
keywords:
- file hash generator
- windows file hash
- SHA256 hash generator
- file integrity check
- powershell get-filehash
- checksum generator
- file verification
- cryptographic hash
- windows file integrity
- get-filehash command
features:
- Calculate SHA256 hashes for files
- Support multiple hash algorithms (SHA1, SHA384, SHA512, MD5)
- Verify file integrity using cryptographic hashes
- Automate file hash generation in PowerShell scripts
- Generate checksums for file authentication
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Get-FileHash

> Calculate a hash for a file.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/get-filehash>.

- Calculate a hash for a specified file using the SHA256 algorithm:

`Get-FileHash {{path\to\file}}`

- Calculate a hash for a specified file using a specified algorithm:

`Get-FileHash {{path\to\file}} -Algorithm {{SHA1|SHA384|SHA256|SHA512|MD5}}`
