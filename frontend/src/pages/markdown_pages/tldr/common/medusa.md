---
title: "Medusa Brute-forcer - Control Login Attempts | Online Free DevTools by Hexmos"
name: medusa
path: /freedevtools/tldr/common/medusa
canonical: "https://hexmos.com/freedevtools/tldr/common/medusa/"
description: "Control login attempts with Medusa, a modular brute-force tool. Efficiently crack passwords for various protocols. Free online tool, no registration required."
category: common
keywords:
- login brute-forcer
- password cracking tool
- network security
- penetration testing
- medusa brute force
- ftp brute force
- ssh brute force
- http brute force
- mysql brute force
- smb brute force
features:
- Brute-force passwords against various protocols
- Utilize username and password lists
- Support for module-based attacks
- Target single hosts or lists of hosts
- Leverage pwdump files for SMB cracking
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# medusa

> A modular and parallel login brute-forcer for a variety of protocols.
> More information: <https://manned.org/medusa>.

- List all installed modules:

`medusa -d`

- Show usage example of a specific module (use `medusa -d` for listing all installed modules):

`medusa -M {{ssh|http|web-form|postgres|ftp|mysql|...}} -q`

- Execute brute force against an FTP server using a file containing usernames and a file containing passwords:

`medusa -M ftp -h host -U {{path/to/username_file}} -P {{path/to/password_file}}`

- Execute a login attempt against an HTTP server using the username, password and user-agent specified:

`medusa -M HTTP -h host -u {{username}} -p {{password}} -m USER-AGENT:"{{Agent}}"`

- Execute a brute force against a MySQL server using a file containing usernames and a hash:

`medusa -M mysql -h host -U {{path/to/username_file}} -p {{hash}} -m PASS:HASH`

- Execute a brute force against a list of SMB servers using a username and a pwdump file:

`medusa -M smbnt -H {{path/to/hosts_file}} -C {{path/to/pwdump_file}} -u {{username}} -m PASS:HASH`
