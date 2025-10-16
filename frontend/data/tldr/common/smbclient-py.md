---
title: "SMB Client - Interact with SMB Servers | Online Free DevTools by Hexmos"
name: smbclient.py
path: "/freedevtools/tldr/common/smbclient-py/"
canonical: "https://hexmos-com/freedevtools/tldr/common/smbclient-py/"
description: "Interact with SMB servers using SMB Client. Perform authentication, file transfer, and command execution. Free online tool, no registration required."
category: common
keywords:
- SMB client interaction
- SMB server communication
- Python SMB client
- Network file sharing
- Windows file access
- SMB authentication bypass
- SMB command execution
- Impacket SMB client
- Linux SMB client
- Command-line SMB client
features:
- Authenticate to SMB servers using username/password
- Utilize NTLM hashes for authentication
- Connect using Kerberos authentication protocol
- Specify a domain controller IP for targeted connections
- Execute commands from an input file within the SMB shell
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# smbclient.py

> A Python-based SMB client for interacting with SMB servers.
> More information: <https://github.com/fortra/impacket>.

- Connect to an SMB server with username and password:

`smbclient.py {{domain}}/{{username}}:{{password}}@{{target}}`

- Connect using NTLM hashes for authentication:

`smbclient.py -hashes {{LM_HASH}}:{{NT_HASH}} {{domain}}/{{username}}@{{target}}`

- Connect using Kerberos authentication:

`smbclient.py -k {{domain}}/{{username}}@{{target}}`

- Connect specifying a domain controller IP:

`smbclient.py -dc-ip {{domain_controller_ip}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Connect to a specific target IP instead of NetBIOS name:

`smbclient.py -target-ip {{target_ip}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Connect to a non-standard SMB port:

`smbclient.py -port {{port}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Execute commands from an input file in the SMB shell:

`smbclient.py -inputfile {{path/to/input_file}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Log SMB client commands to an output file:

`smbclient.py -outputfile {{path/to/output_file}} {{domain}}/{{username}}:{{password}}@{{target}}`
