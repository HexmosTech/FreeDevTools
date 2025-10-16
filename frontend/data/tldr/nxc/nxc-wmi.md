---
title: "WMI Pentesting - Exploit WMI with NXC | Online Free DevTools by Hexmos"
name: nxc-wmi
path: "/freedevtools/tldr/nxc/nxc-wmi/"
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxc-wmi/"
description: "Exploit WMI with NXC using powerful penetration testing techniques. Access and control Windows systems remotely. Free online tool, no registration required."
category: common
keywords:
- WMI penetration testing
- NXC WMI exploitation
- Windows management instrumentation
- Remote command execution
- Password brute forcing
- Local authentication bypass
- Network credential scanner
- Security vulnerability analysis
- WMI query executor
- Lateral movement tool
features:
- Enumerate and validate credentials via WMI
- Execute arbitrary commands on remote Windows hosts
- Perform WMI queries for data retrieval
- Authenticate using local accounts without domain credentials
- Automate exploitation of WMI vulnerabilities
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nxc wmi

> Pentest and exploit the Windows Management Instrumentation (WMI).
> More information: <https://www.netexec.wiki/wmi-protocol>.

- Search for valid credentials by trying out every combination in the specified lists of usernames and passwords:

`nxc wmi {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}}`

- Authenticate via local authentication (as opposed to authenticating to the domain):

`nxc wmi {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --local-auth`

- Issue the specified WMI query:

`nxc wmi {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --wmi {{wmi_query}}`

- Execute the specified command on the targeted host:

`nxc wmi {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} -x {{command}}`
