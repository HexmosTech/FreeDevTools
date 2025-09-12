---
title: "Mimikatz Token - Control Security Tokens | Free DevTools"
name: mimikatz-token
path: /freedevtools/tldr/windows/mimikatz-token
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-token/"
description: "Control security tokens with Mimikatz Token. Elevate privileges, list tokens, and revert to original tokens. Free online tool, no registration required."
category: windows
keywords:
- security token manager
- mimikatz token manipulation
- windows token enumeration
- token impersonation windows
- windows privilege escalation
- mimikatz elevate privileges
- mimikatz revert token
- security token list
- windows credential theft
- windows security tools
features:
- List available security tokens
- Impersonate a security token for privilege escalation
- Revert to the original security token
- Manage security token access
- Elevate user privileges
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mimikatz token

> List and manipulate security tokens.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- List tokens:

`mimikatz "token::list"`

- Elevate privileges by impersonating a token:

`mimikatz "token::elevate"`

- Revert to original token:

`mimikatz "token::revert"`
