---
title: "Mimikatz DPAPI - Decrypt Windows Data | Online Free DevTools by Hexmos"
name: mimikatz-dpapi
path: /freedevtools/tldr/windows/mimikatz-dpapi
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-dpapi/"
description: "Decrypt Windows data with Mimikatz DPAPI. Securely manage and extract sensitive information using DPAPI. Free online tool, no registration required."
category: windows
keywords:
- windows dpapi decryption
- mimikatz dpapi extraction
- data protection api windows
- credential recovery windows
- master key retrieval windows
- dpapi blob decryption
- chrome password extraction
- windows security auditing
- dpapi key management
- mimikatz windows commands
features:
- List and manage DPAPI master keys
- Decrypt DPAPI blobs from files
- Retrieve Chrome credentials via DPAPI
- Interact directly with the Windows Data Protection API
- Automate credential extraction and decryption
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mimikatz dpapi

> Interact with the Windows Data Protection API (DPAPI).
> More information: <https://github.com/gentilkiwi/mimikatz>.

- List master keys:

`mimikatz "dpapi::masterkey /list"`

- Decrypt a DPAPI blob:

`mimikatz "dpapi::blob /in:blob_file.bin"`

- Retrieve Chrome credentials using DPAPI:

`mimikatz "dpapi::chrome /in:Login Data"`
