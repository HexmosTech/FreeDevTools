---
title: "Dump NTLM Hashes - Secretsdump.py Windows Credentials | Online Free DevTools by Hexmos"
name: secretsdump.py
path: "/freedevtools/tldr/common/secretsdump-py/"
canonical: "https://hexmos-com/freedevtools/tldr/common/secretsdump-py/"
description: "Dump NTLM hashes with secretsdump.py, extracting Windows credentials and Active Directory information. Free online tool, no registration required for credential recovery."
category: common
keywords:
- NTLM Hash Dumper
- Windows Credential Extraction
- Active Directory Dump
- SAM Database Extraction
- Pass-the-Hash Attack
- Windows Password Recovery
- Domain Credential Dump
- Credential Dumping Impacket
- secretsdump.py Usage
- Windows Security Tool
features:
- Extracts NTLM hashes from Windows systems remotely
- Dumps plaintext passwords from domain controllers
- Retrieves credentials from Active Directory's NTDS.dit file
- Extracts hashes from local SAM databases
- Supports pass-the-hash authentication
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# secretsdump.py

> Dump NTLM hashes, plaintext passwords, and domain credentials from remote Windows systems.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Dump credentials from a Windows machine using a username and password:

`secretsdump.py {{domain}}/{{username}}:{{password}}@{{target}}`

- Dump hashes from a machine using pass-the-hash authentication:

`secretsdump.py -hashes {{LM_Hash}}:{{NT_Hash}} {{domain}}/{{username}}@{{target}}`

- Dump credentials from Active Directory's NTDS.dit file:

`secretsdump.py -just-dc {{domain}}/{{username}}:{{password}}@{{target}}`

- Extract credentials from a local SAM database using registry hives:

`secretsdump.py -sam {{path/to/SAM}} -system {{path/to/SYSTEM}}`

- Dump hashes from a machine without providing a password (if a valid authentication session exists, e.g. via Kerberos or NTLM SSO):

`secretsdump.py -no-pass {{domain}}/{{username}}@{{target}}`
