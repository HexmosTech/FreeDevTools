---
title: "Mimikatz Process - Manage Tokens & Privileges | Online Free DevTools by Hexmos"
name: mimikatz-process
path: "/freedevtools/tldr/windows/mimikatz-process/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-process/"
description: "Manage process tokens with Mimikatz Process tool. Elevate privileges, and list processes with associated tokens for Windows security. Free online tool, no registration required."
category: windows
keywords:
- windows process token manager
- mimikatz privilege escalation
- windows credential harvesting
- windows security auditing
- token manipulation windows
- process injection mimikatz
- windows system process takeover
- mimikatz security tool
- windows authentication bypass
- process token impersonation
features:
- List all processes and their associated tokens
- Elevate process privileges to SYSTEM authority
- Impersonate user tokens for privilege escalation
- Manage process access tokens on Windows
- View and modify security descriptors for processes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mimikatz process

> Manage process privileges and tokens.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- List processes with their tokens:

`mimikatz "process::list"`

- Elevate mimikatz to a SYSTEM process:

`mimikatz "process::token /user:NT AUTHORITY\SYSTEM"`
