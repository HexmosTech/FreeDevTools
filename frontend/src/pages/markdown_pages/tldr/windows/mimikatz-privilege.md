---
title: "Mimikatz Privilege - Control Security Privileges | Online Free DevTools by Hexmos"
name: mimikatz-privilege
path: /freedevtools/tldr/windows/mimikatz-privilege
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-privilege/"
description: "Control security privileges with Mimikatz privilege module on Windows. Enable debug privileges and check current user permissions easily. Free online tool, no registration required."
category: windows
keywords:
- Windows security privilege
- Mimikatz privilege control
- Token manipulation Windows
- Windows debug privilege
- Password cracking Windows
- Credential dumping Windows
- Security auditing Windows
- Authentication bypass Windows
- LSA secrets extraction
- Kerberos ticket retrieval
features:
- Enable debug privileges for Mimikatz operations
- Check current user privilege status
- Manipulate security tokens on Windows
- Elevate user privileges within Mimikatz
- Manage LSA secrets using Mimikatz
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mimikatz privilege

> Manage privileges for mimikatz operations.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- Enable debug privilege (required for many modules):

`mimikatz "privilege::debug"`

- Check current privilege state:

`mimikatz "privilege::whoami"`
