---
title: "Enum4linux - Enumerate Windows & Samba | Online Free DevTools by Hexmos"
name: enum4linux
path: "/freedevtools/tldr/linux/enum4linux/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/enum4linux/"
description: "Enumerate Windows and Samba information with Enum4linux.  Discover usernames, shares, and OS information remotely. Free online tool, no registration required."
category: linux
keywords:
  - windows enumeration
  - samba enumeration
  - network enumeration
  - enum4linux command
  - remote system information
  - linux security audit
  - system information gathering
  - network security assessment
  - windows server enumeration
  - samba share discovery
features:
  - Enumerate all available information from a remote host.
  - List usernames on a target system.
  - Discover available shares on a remote system.
  - Retrieve OS information from a remote host.
  - Perform enumeration using provided login credentials.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# enum4linux

> Enumerate Windows and Samba information from remote systems.
> More information: <https://labs.portcullis.co.uk/tools/enum4linux/>.

- Try to enumerate using all methods:

`enum4linux -a {{remote_host}}`

- Enumerate using given login credentials:

`enum4linux -u {{user_name}} -p {{password}} {{remote_host}}`

- List usernames from a given host:

`enum4linux -U {{remote_host}}`

- List shares:

`enum4linux -S {{remote_host}}`

- Get OS information:

`enum4linux -o {{remote_host}}`
