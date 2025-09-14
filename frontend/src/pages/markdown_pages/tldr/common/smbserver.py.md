---
title: "SMB Server - Create Shares | Free DevTools"
name: smbserver.py
path: /freedevtools/tldr/common/smbserver.py
canonical: "https://hexmos.com/freedevtools/tldr/common/smbserver.py/"
description: "Create SMB shares easily with smbserver.py. Host files and folders on your network with advanced authentication options. Free online tool, no registration required."
category: common
keywords:
- SMB Share Creation
- Samba Server Tool
- Python SMB Server
- Windows File Sharing
- Network Share Creator
- smbserver.py Command
- Linux SMB Server
- SMB Authentication
- SMB2 Support
- File Sharing Utility
features:
- Host SMB shares with custom names
- Configure shares with username/password authentication
- Support NTLM hash authentication
- Enable SMB2 support for modern clients
- Log SMB commands to an output file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# smbserver.py

> A Python-based SMB server for hosting shares (requires root for port 445).
> More information: <https://github.com/fortra/impacket>.

- Set up a basic SMB share:

`smbserver.py {{sharename}} {{path/to/share}}`

- Set up a share with a custom comment:

`smbserver.py -comment {{my_share}} {{sharename}} {{path/to/share}}`

- Set up a share with username and password authentication:

`smbserver.py -username {{username}} -password {{password}} {{sharename}} {{path/to/share}}`

- Set up a share with NTLM hash authentication:

`smbserver.py -hashes {{LMHASH}}:{{NTHASH}} {{sharename}} {{path/to/share}}`

- Set up a share on a specific interface:

`smbserver.py {{[-ip|--interface-address]}} {{interface_ip_address}} {{sharename}} {{path/to/share}}`

- Set up a share on a non-standard SMB port:

`smbserver.py -port {{port}} {{sharename}} {{path/to/share}}`

- Set up a share with SMB2 support:

`smbserver.py -smb2support {{sharename}} {{path/to/share}}`

- Set up a share and log commands to an output file:

`smbserver.py -outputfile {{path/to/output_file}} {{sharename}} {{path/to/share}}`
