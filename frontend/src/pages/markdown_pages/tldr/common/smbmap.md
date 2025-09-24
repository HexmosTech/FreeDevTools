---
title: "Enumerate Samba Shares - Scan SMB Drives | Online Free DevTools by Hexmos"
name: smbmap
path: /freedevtools/tldr/common/smbmap
canonical: "https://hexmos.com/freedevtools/tldr/common/smbmap/"
description: "Scan Samba shares with smbmap. Enumerate SMB drives, identify open shares, and check file permissions across networks. Free online tool, no registration required."
category: common
keywords:
- samba share enumeration
- smb network scanner
- windows share scanner
- smb file permission checker
- smb share discovery
- enumerate windows shares
- smbmap command line
- smb enumeration tool
- network share auditing
- samba security scanning
features:
- Enumerate hosts with NULL sessions enabled
- Display SMB shares and permissions with password prompt
- Execute shell commands on remote systems via SMB
- Recursively locate and download files from SMB shares
- Upload files to SMB shares using credentials
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# smbmap

> Enumerate samba share drives across an entire domain.
> More information: <https://github.com/ShawnDEvans/smbmap>.

- Enumerate hosts with NULL sessions enabled and open shares:

`smbmap --host-file {{path/to/file}}`

- Display SMB shares and permissions on a host, prompting for user's password or NTLM hash:

`smbmap {{[-u|--username]}} {{username}} --prompt -H {{ip}}`

- Execute a shell command on a remote system:

`smbmap {{[-u|--username]}} {{username}} --prompt -H {{ip}} -x {{command}}`

- Enumerate hosts and check SMB file permissions:

`smbmap --host-file {{path/to/file}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} -q`

- Connect to an ip or hostname through smb using a username and password:

`smbmap {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} -d {{domain}} -H {{ip_or_hostname}}`

- Locate and download files [R]ecursively up to N levels depth, searching for filename pattern (`regex`), and excluding certain shares:

`smbmap --host-file {{path/to/file}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} -q -R --depth {{number}} --exclude {{sharename}} -A {{filepattern}}`

- Upload file through smb using username and password:

`smbmap {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} -d {{domain}} -H {{ip_or_hostname}} --upload {{path/to/file}} '{{/share_name/remote_filename}}'`

- Display SMB shares and recursively list directories and files, searching for file content matching a `regex`:

`smbmap {{[-u|--username]}} {{username}} --prompt -H {{ip}} -R -F {{pattern}}`
