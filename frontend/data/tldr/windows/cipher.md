---
title: "Cipher - Control File Encryption on Windows | Online Free DevTools by Hexmos"
name: cipher
path: "/freedevtools/tldr/windows/cipher/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/cipher/"
description: "Control file encryption with Cipher on Windows. Securely encrypt, decrypt, and wipe files and directories on NTFS volumes. Free online tool, no registration required."
category: windows
keywords:
- NTFS file encryption
- Windows encryption command
- Cipher file decryption
- Secure file deletion
- Windows command line cipher
- Encrypt directory windows
- Decrypt directory windows
- Wipe file windows
- Windows NTFS security
- Command line file security
features:
- Encrypt files and directories on NTFS volumes.
- Decrypt files and directories on NTFS volumes.
- Securely delete files and directories to prevent recovery.
- Display encryption information for files and directories.
- Recursively encrypt directories and new files added to them.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cipher

> Display or alter the encryption of directories and files on NTFS volumes.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/cipher>.

- Display information about a specific encrypted file or directory:

`cipher /c:{{path\to\file_or_directory}}`

- [e]ncrypt a file or directory (files added later to the directory are also encrypted as the directory is marked):

`cipher /e:{{path\to\file_or_directory}}`

- [d]ecrypt a file or directory:

`cipher /d:{{path\to\file_or_directory}}`

- Securely remove a file or directory:

`cipher /w:{{path\to\file_or_directory}}`
