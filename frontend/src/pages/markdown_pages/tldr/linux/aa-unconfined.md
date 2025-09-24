---
title: "AA-Unconfined - List Unconfined Linux Processes | Online Free DevTools by Hexmos"
name: aa-unconfined
path: /freedevtools/tldr/linux/aa-unconfined
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-unconfined/"
description: "List unconfined Linux processes instantly with AA-Unconfined. Identify processes lacking AppArmor profiles and enhance system security. Free online tool, no registration required."
category: linux
keywords:
- aa-unconfined processes
- list unconfined processes
- linux process security
- apparmor status
- unconfined socket detection
- tcp udp ports
- security profiling linux
- audit unconfined processes
- detect apparmor bypass
- linux security hardening
features:
- List processes without AppArmor profiles.
- Detect open TCP/UDP ports of unconfined processes.
- Utilize `ss` or `netstat` for network socket detection.
- Offer a paranoid mode for comprehensive process inspection.
- Display help information for command options.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aa-unconfined

> List processes with open TCP/UDP ports that do not have AppArmor profiles loaded.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-unconfined.8>.

- List unconfined processes using the `ss` command (default):

`sudo aa-unconfined`

- Use `netstat` instead of `ss` to detect open network sockets:

`sudo aa-unconfined --with-netstat`

- Show all processes from /proc with TCP/UDP ports and no AppArmor profiles (more detailed):

`sudo aa-unconfined --paranoid`

- Display help:

`aa-unconfined {{[-h|--help]}}`
