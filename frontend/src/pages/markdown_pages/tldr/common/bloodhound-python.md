---
title: "BloodHound Ingestor - Enumerate AD Relationships | Online Free DevTools by Hexmos"
name: bloodhound-python
path: /freedevtools/tldr/common/bloodhound-python
canonical: "https://hexmos.com/freedevtools/tldr/common/bloodhound-python/"
description: "Enumerate Active Directory relationships with BloodHound Ingestor. Collect group memberships, sessions, and trusts for comprehensive security assessments. Free online tool, no registration required."
category: common
keywords:
- Active Directory Enumeration
- BloodHound AD Ingestor
- BloodHound Python
- AD Relationship Analyzer
- Domain Security Assessment
- Network Vulnerability Scanner
- Active Directory Attack Path
- Group Membership Enumeration
- Session Data Collector
- Trust Relationship Mapping
features:
- Collect Active Directory group memberships
- Enumerate Active Directory sessions
- Map Active Directory trust relationships
- Authenticate using Kerberos
- Authenticate using NTLM hashes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bloodhound-python

> A Python ingestor for BloodHound, used to enumerate Active Directory relationships.
> More information: <https://github.com/dirkjanm/BloodHound.py>.

- Collect all data using default collection methods (includes groups, sessions, and trusts):

`bloodhound-python --username {{username}} --password {{password}} --domain {{domain}}`

- Collect data using Kerberos authentication without requiring a plaintext password:

`bloodhound-python --collectionmethod {{All}} --kerberos --domain {{domain}}`

- Authenticate using NTLM hashes instead of a password:

`bloodhound-python --collectionmethod {{All}} --username {{username}} --hashes {{LM:NTLM}} --domain {{domain}}`

- Specify a custom name server for DNS queries:

`bloodhound-python --collectionmethod {{All}} --username {{username}} --password {{password}} --domain {{domain}} --nameserver {{nameserver}}`

- Save the output files as a compressed ZIP archive:

`bloodhound-python --collectionmethod {{All}} --username {{username}} --password {{password}} --domain {{domain}} --zip`
