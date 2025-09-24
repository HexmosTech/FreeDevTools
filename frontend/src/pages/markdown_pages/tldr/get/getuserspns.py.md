---
title: "Generate Kerberos SPNs - Extract User SPNs | Online Free DevTools by Hexmos"
name: getuserspns.py
path: /freedevtools/tldr/get/getuserspns.py
canonical: "https://hexmos.com/freedevtools/tldr/get/getuserspns.py/"
description: "Generate Kerberos SPNs with GetUserSPNs.py, retrieve SPNs associated with Active Directory users and request Kerberos TGS tickets. Free online tool, no registration required."
category: common
keywords:
- Kerberos SPN generator
- Active Directory SPN retrieval
- User SPN extractor
- Kerberos TGS ticket request
- impacket getuserspns.py
- Active Directory enumeration
- Windows SPN tool
- Domain SPN finder
- Service Principal Name audit
- Pass-the-hash authentication
features:
- Enumerate user accounts with associated SPNs
- Request Kerberos TGS tickets for identified SPNs
- Authenticate using pass-the-hash method
- Save the retrieved SPNs to a file
- Target specific domain controllers for SPN retrieval
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# GetUserSPNs.py

> Retrieve Service Principal Names (SPNs) associated with Active Directory user accounts.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Enumerate user accounts with an SPN and request their Kerberos TGS tickets:

`GetUserSPNs.py {{domain}}/{{username}}:{{password}} -dc-ip {{domain_controller_ip}}`

- Use pass-the-hash authentication:

`GetUserSPNs.py {{domain}}/{{username}} -hashes {{LM_Hash}}:{{NT_Hash}} -dc-ip {{domain_controller_ip}}`

- Save the output to a file:

`GetUserSPNs.py {{domain}}/{{username}}:{{password}} -dc-ip {{domain_controller_ip}} -outputfile {{path/to/output_file}}`

- Request only TGS tickets:

`GetUserSPNs.py {{domain}}/{{username}}:{{password}} -dc-ip {{domain_controller_ip}} -request`

- Request only TGS tickets using pass-the-hash authentication:

`GetUserSPNs.py {{domain}}/{{username}} -dc-ip {{domain_controller_ip}} -hashes {{LM_Hash}}:{{NT_Hash}} -request`
