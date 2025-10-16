---
title: "Evil-WinRM Control - PowerShell Remote Access | Online Free DevTools by Hexmos"
name: evil-winrm
path: "/freedevtools/tldr/common/evil-winrm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/evil-winrm/"
description: "Control remote Windows machines with Evil-WinRM, a powerful PowerShell remote access tool. Gain shell access and manage systems effectively. Free online tool, no registration required."
category: common
keywords:
- WinRM remote access
- PowerShell remote shell
- Windows remote management
- Evil-WinRM penetration testing
- pentesting WinRM
- remote system control
- Windows command line
- pass-the-hash authentication
- remote file upload
- WinRM script execution
features:
- Establish remote PowerShell sessions on Windows systems
- Execute commands and scripts remotely
- Upload and download files to remote hosts
- Utilize pass-the-hash authentication for secure access
- Manage remote systems using a command-line interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# evil-winrm

> Windows Remote Management (WinRM) shell for pentesting.
> Once connected, we get a PowerShell prompt on the target host.
> More information: <https://github.com/Hackplayers/evil-winrm>.

- Connect to a host:

`evil-winrm {{[-i|--ip]}} {{ip}} {{[-u|--user]}} {{user}} {{[-p|--password]}} {{password}}`

- Connect to a host using pass-the-hash authentication instead of a password:

`evil-winrm {{[-i|--ip]}} {{ip}} {{[-u|--user]}} {{user}} {{[-H|--hash]}} {{nt_hash}}`

- Connect to a host, specifying directories for PowerShell scripts and executables:

`evil-winrm {{[-i|--ip]}} {{ip}} {{[-u|--user]}} {{user}} {{[-p|--password]}} {{password}} {{[-s|--scripts]}} {{path/to/scripts}} {{[-e|--executables]}} {{path/to/executables}}`

- Connect to a host, using SSL:

`evil-winrm {{[-i|--ip]}} {{ip}} {{[-u|--user]}} {{user}} {{[-p|--password]}} {{password}} {{[-S|--ssl]}} {{[-c|--pub-key]}} {{path/to/pubkey}} {{[-k|--priv-key]}} {{path/to/privkey}}`

- Upload a file to the host:

`PS > upload {{path/to/local/file}} {{path/to/remote/file}}`

- List all loaded PowerShell functions:

`PS > menu`

- Load a PowerShell script from the `--scripts` directory:

`PS > {{script.ps1}}`

- Invoke a binary on the host from the `--executables` directory:

`PS > Invoke-Binary {{binary.exe}}`
