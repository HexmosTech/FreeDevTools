---
title: "Control VNC Servers - Pentest with NXC VNC | Online Free DevTools by Hexmos"
name: nxc-vnc
path: "/freedevtools/tldr/nxc/nxc-vnc/"
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxc-vnc/"
description: "Pentest VNC servers easily with NXC VNC. Exploit vulnerabilities and assess security using credential brute-forcing. Free online tool, no registration required."
category: common
keywords:
- VNC pentesting
- VNC exploit
- network hacking
- password cracking
- credential brute-forcing
- security auditing
- vulnerability scanning
- remote access testing
- penetration testing
- common
features:
- Brute-force VNC credentials using username and password lists
- Avoid rate limiting by implementing VNC sleep delays
- Capture screenshots of remote VNC sessions
- Customize screenshot delays
- Perform targeted pentesting of VNC servers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nxc vnc

> Pentest and exploit VNC servers.
> More information: <https://www.netexec.wiki/getting-started/selecting-and-using-a-protocol>.

- Search for valid credentials by trying out every combination in the specified lists of usernames and passwords:

`nxc vnc {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}}`

- Avoid rate limiting through VNC-sleep:

`nxc vnc {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}} --vnc-sleep {{10}}`

- Take a screenshot on the remote system after waiting the specified amount of time:

`nxc vnc {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --screenshot --screentime {{10}}`
