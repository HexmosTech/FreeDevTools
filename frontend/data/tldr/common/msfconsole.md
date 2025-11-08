---
title: "Metasploit Console - Exploit Systems | Online Free DevTools by Hexmos"
name: msfconsole
path: "/freedevtools/tldr/common/msfconsole/"
canonical: "https://hexmos.com/freedevtools/tldr/common/msfconsole/"
description: "Exploit systems with Metasploit Console, a powerful penetration testing framework. Conduct vulnerability assessments and security audits efficiently. Free online tool, no registration required."
category: common
keywords:
- Metasploit Console exploitation
- Penetration testing framework
- Security auditing tool
- Vulnerability assessment scanner
- Exploit development platform
- Msfconsole command line
- Reverse engineering tool
- Network security analysis
- Exploit execution tool
- Penetration testing Kali Linux
features:
- Launch the Metasploit console
- Execute commands within the console
- Disable database support
- Run quietly without banner output
- Display version and help information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# msfconsole

> Console for the Metasploit Framework.
> More information: <https://docs.rapid7.com/metasploit/msf-overview>.

- Launch the console:

`msfconsole`

- Launch the console quietly without any banner:

`msfconsole {{[-q|--quiet]}}`

- Do not enable database support:

`msfconsole {{[-n|--no-database]}}`

- Execute console commands (Note: Use `;` for passing multiple commands):

`msfconsole {{[-x|--execute-command]}} "{{use auxiliary/server/capture/ftp; set SRVHOST 0.0.0.0; set SRVPORT 21; run}}"`

- Display help:

`msfconsole {{[-h|--help]}}`

- Display version:

`msfconsole {{[-v|--version]}}`
