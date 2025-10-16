---
title: "RDP Exploitation - Pentest RDP Servers | Online Free DevTools by Hexmos"
name: nxc-rdp
path: "/freedevtools/tldr/nxc/nxc-rdp/"
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxc-rdp/"
description: "Pentest RDP servers with nxc-rdp. Exploit remote desktop protocol for security audits and vulnerability assessment. Free online tool, no registration required."
category: common
keywords:
- RDP exploitation tool
- RDP pentesting command
- Network credential brute forcing
- Remote desktop screenshot capture
- Windows RDP security audit
- NXC RDP module
- RDP login prompt screenshot
- Network Level Authentication bypass
- Penetration testing RDP
- Security scanning RDP servers
features:
- Brute-force RDP credentials using username and password lists.
- Capture screenshots of RDP sessions with custom delay.
- Specify resolution for RDP session screenshots.
- Capture screenshot of RDP login prompt even if NLA is disabled.
- Automate RDP vulnerability assessment and exploit checks.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nxc rdp

> Pentest and exploit RDP servers.
> More information: <https://www.netexec.wiki/rdp-protocol>.

- Search for valid credentials by trying out every combination in the specified lists of usernames and passwords:

`nxc rdp {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}}`

- Take a screenshot after waiting the for specified number of seconds:

`nxc rdp {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --screenshot --screentime {{10}}`

- Take a screenshot in the specified resolution:

`nxc rdp {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --screenshot --res {{1024x768}}`

- Take a screenshot of the RDP login prompt if Network Level Authentication is disabled:

`nxc rdp {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --nla-screenshot`
