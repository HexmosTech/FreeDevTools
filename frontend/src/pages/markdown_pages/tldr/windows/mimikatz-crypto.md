---
title: "Mimikatz Crypto - Manipulate Certificates | Online Free DevTools by Hexmos"
name: mimikatz-crypto
path: /freedevtools/tldr/windows/mimikatz-crypto
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-crypto/"
description: "Manipulate Windows cryptographic services with Mimikatz Crypto. Export certificates, list providers and keys. Free online tool, no registration required."
category: windows
keywords:
- Windows crypto manipulation
- Certificate export
- Mimikatz crypto commands
- Windows cryptographic services
- CAPI key listing
- Crypto provider enumeration
- Windows security tools
- Certificate management Windows
- Mimikatz Windows tool
- Windows security command
features:
- List available cryptographic providers
- Enumerate keys within a cryptographic provider
- Export certificates with associated keys
- Manipulate Windows crypto services
- Manage Windows certificates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mimikatz crypto

> Manipulate Windows cryptographic services and certificates.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- List cryptographic providers:

`mimikatz "crypto::providers"`

- List keys in a cryptographic provider:

`mimikatz "crypto::capi"`

- Export certificates and keys:

`mimikatz "crypto::certificates /export"`
