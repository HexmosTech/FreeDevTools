---
title: "Control WinRM - Pentest Windows Remote Management | Online Free DevTools by Hexmos"
name: nxc-winrm
path: /freedevtools/tldr/nxc/nxc-winrm
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxc-winrm/"
description: "Control Windows Remote Management with nxc-winrm, a powerful penetration testing tool.  Exploit winrm vulnerabilities and manage remote systems securely. Free online tool, no registration required."
category: common
keywords:
- winrm exploitation
- windows remote management attack
- nxc winrm pentest
- windows credential brute force
- remote command execution
- laps exploitation
- active directory pentesting
- windows privilege escalation
- powershell command execution
- windows network security
features:
- Brute-force WinRM credentials using username and password lists
- Authenticate to a specific domain to bypass initial SMB connection
- Execute arbitrary commands on a target Windows host
- Execute PowerShell commands as administrator leveraging LAPS
- Perform penetration tests against Windows Remote Management services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nxc winrm

> Pentest and exploit Windows Remote Management (winrm).
> More information: <https://www.netexec.wiki/winrm-protocol>.

- Search for valid credentials by trying out every combination in the specified lists of usernames and passwords:

`nxc winrm {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}}`

- Specify the domain to authenticate to (avoids an initial SMB connection):

`nxc winrm {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} -d {{domain_name}}`

- Execute the specified command on the host:

`nxc winrm {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} -x {{whoami}}`

- Execute the specified PowerShell command on the host as administrator using LAPS:

`nxc winrm {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --laps -X {{whoami}}`
