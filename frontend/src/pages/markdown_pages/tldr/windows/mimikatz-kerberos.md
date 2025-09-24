---
title: "Mimikatz Kerberos - Control Tickets | Online Free DevTools by Hexmos"
name: mimikatz-kerberos
path: /freedevtools/tldr/windows/mimikatz-kerberos
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-kerberos/"
description: "Control Kerberos tickets instantly with Mimikatz. Purge, list, and inject tickets from files for authentication testing. Free online tool, no registration required."
category: windows
keywords:
- kerberos tickets
- mimikatz kerberos
- windows kerberos tickets
- kerberos ticket manager
- kerberos authentication
- kerberos ptt
- windows authentication
- kerberos injection
- kerberos list
- kerberos purge
features:
- List current Kerberos tickets
- Purge all Kerberos tickets from the system
- Inject Kerberos tickets from a file
- Interact with Kerberos authentication protocols
- Manage Kerberos ticket lifetime
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mimikatz kerberos

> Interact with Kerberos tickets.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- List current Kerberos tickets:

`mimikatz "kerberos::list"`

- Purge all Kerberos tickets:

`mimikatz "kerberos::purge"`

- Inject a ticket from a `.kirbi` file:

`mimikatz "kerberos::ptt ticket.kirbi"`
