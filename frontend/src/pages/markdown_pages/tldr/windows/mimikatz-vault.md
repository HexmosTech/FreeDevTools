---
title: "Mimikatz Vault - Extract Credentials | Online Free DevTools by Hexmos"
name: mimikatz-vault
path: /freedevtools/tldr/windows/mimikatz-vault
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-vault/"
description: "Extract Windows credentials with Mimikatz Vault, a powerful security auditing tool. Retrieve vault passwords and enhance your penetration testing. Free online tool, no registration required."
category: windows
keywords:
- windows credentials extraction
- mimikatz vault extraction
- windows vault passwords
- security auditing tool
- credential dumping windows
- password recovery windows
- mimikatz windows command
- windows authentication bypass
- windows security testing
- vault credential manager
features:
- List stored vault credentials
- Dump all vault credentials at once
- Extract user passwords from vault
- Audit windows security settings
- Enumerate credential manager data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mimikatz vault

> Extract credentials stored in the Windows Credential Vault.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- List vault credentials:

`mimikatz "vault::list"`

- Dump all vault credentials:

`mimikatz "vault::cred"`
