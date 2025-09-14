---
title: "NetExec NXC - Enumerate Network Services | Free DevTools"
name: nxc
path: /freedevtools/tldr/nxc/nxc
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxc/"
description: "Enumerate network services with NetExec NXC. Discover vulnerabilities and exploit target systems through various protocols. Free online tool, no registration required."
category: common
keywords:
- Network service enumeration
- Network exploitation tool
- Vulnerability scanning
- Penetration testing
- SMB enumeration
- SSH enumeration
- Windows network scanning
- Linux network scanning
- NXC modules
- Network reconnaissance
features:
- Enumerate network services across multiple protocols
- List available modules for specific protocols
- Display available options for specific modules
- Configure module options directly from the command line
- Identify potential network vulnerabilities
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nxc

> Network service enumeration and exploitation tool.
> Some subcommands such as `smb` have their own usage documentation.
> More information: <https://www.netexec.wiki/getting-started/selecting-and-using-a-protocol>.

- List available modules for the specified protocol:

`nxc {{smb|ssh|ldap|ftp|wmi|winrm|rdp|vnc|mssql}} {{[-L|--list-modules]}}`

- List the options available for the specified module:

`nxc {{smb|ssh|ldap|ftp|wmi|winrm|rdp|vnc|mssql}} {{[-M|--module]}} {{module_name}} --options`

- Specify an [o]ption for a module:

`nxc {{smb|ssh|ldap|ftp|wmi|winrm|rdp|vnc|mssql}} {{[-M|--module]}} {{module_name}} -o {{OPTION_NAME}}={{option_value}}`

- View the options available for the specified protocol:

`nxc {{smb|ssh|ldap|ftp|wmi|winrm|rdp|vnc|mssql}} {{[-h|--help]}}`
