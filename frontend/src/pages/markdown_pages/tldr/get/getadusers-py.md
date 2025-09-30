---
title: "Get AD Users - Extract Active Directory Users | Online Free DevTools by Hexmos"
name: getadusers.py
path: /freedevtools/tldr/get/getadusers-py
canonical: "https://hexmos-com/freedevtools/tldr/get/getadusers-py/"
description: "Extract Active Directory users with GetADUsers. Retrieve user attributes like last logon time, email, and more. Free online tool, no registration required."
category: common
keywords:
- active directory user enumeration
- ad user attribute retrieval
- windows active directory scanner
- ldap user information extraction
- active directory user details
- getadusers.py impacket
- impacket active directory
- windows domain user list
- user account auditing
- active directory reporting
features:
- Enumerate all Active Directory users
- Retrieve specific user attributes
- Support pass-the-hash authentication
- Output data to a file
- Target specific users for extraction
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# GetADUsers.py

> Retrieve a list of users from Active Directory, including attributes like last logon timestamp and email.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Enumerate all Active Directory users and their attributes:

`GetADUsers.py -all -dc-ip {{domain_controller_ip}} {{domain}}/{{username}}:{{password}}`

- Retrieve information only for a specific user:

`GetADUsers.py -user {{user}} -dc-ip {{domain_controller_ip}} {{domain}}/{{username}}:{{password}}`

- Extract user details using pass-the-hash authentication:

`GetADUsers.py -all -dc-ip {{domain_controller_ip}} -hashes {{LM_Hash}}:{{NT_Hash}} {{domain}}/{{username}}`

- Save output to a file:

`GetADUsers.py -all -dc-ip {{domain_controller_ip}} {{domain}}/{{username}}:{{password}} > {{path/to/output.txt}}`
