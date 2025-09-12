---
title: "LDAP Dump - Extract Domain Info | Free DevTools"
name: ldapdomaindump
path: /freedevtools/tldr/linux/ldapdomaindump
canonical: "https://hexmos.com/freedevtools/tldr/linux/ldapdomaindump/"
description: "Extract LDAP domain information with ldapdomaindump. Gather users, computers, groups, and OS details for security audits and network analysis. Free online tool, no registration required."
category: linux
keywords:
- LDAP domain dump
- Active Directory dump
- Domain information extraction
- LDAP enumeration
- Windows domain audit
- Linux LDAP tools
- User account extraction
- Group membership analysis
- Computer details extraction
- LDAP security assessment
features:
- Dump user account details from LDAP.
- Extract computer information from Active Directory.
- Gather group membership information from LDAP.
- Export data in HTML, JSON, and greppable formats.
- Resolve computer hostnames using DNS.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ldapdomaindump

> Dump users, computers, groups, OS and membership information via LDAP to HTML, JSON and greppable output.
> See also: `ldapsearch`.
> More information: <https://github.com/dirkjanm/ldapdomaindump#usage>.

- Dump all information using the given LDAP account:

`ldapdomaindump {{[-u|--user]}} {{domain}}\{{username}} {{[-p|--password]}} {{password|ntlm_hash}} {{hostname|ip}}`

- Dump all information, resolving computer hostnames:

`ldapdomaindump {{[-r|--resolve]}} {{[-u|--user]}} {{domain}}\{{username}} {{[-p|--password]}}{{password}} {{hostname|ip}}`

- Dump all information, resolving computer hostnames with the selected DNS server:

`ldapdomaindump {{[-r|--resolve]}} {{[-n|--dns-server]}} {{domain_controller_ip}} {{[-u|--user]}} {{domain}}\{{username}} {{[-p|--password]}}{{password}} {{hostname|ip}}`

- Dump all information to the given directory without JSON output:

`ldapdomaindump --no-json {{[-o|--outdir]}} {{path/to/directory}} {{[-u|--user]}} {{domain}}\{{username}} {{[-p|--password]}}{{password}} {{hostname|ip}}`
