---
title: "Control SSH Servers - nxc-ssh Exploitation | Online Free DevTools by Hexmos"
name: nxc-ssh
path: "/freedevtools/tldr/nxc/nxc-ssh/"
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxc-ssh/"
description: "Control SSH servers with nxc-ssh, a pentesting exploitation tool. Automate password spraying, credential searching, and privilege escalation. Free online tool, no registration required."
category: common
keywords:
- ssh exploitation
- ssh pentesting
- nxc-ssh automation
- password spraying linux
- credential search macos
- ssh bruteforce common
- linux privilege escalation
- ssh key authentication
- network reconnaissance
- penetration testing tools
features:
- Automate password spraying attacks against SSH servers.
- Search for valid SSH credentials using username and password lists.
- Authenticate using private keys with password passphrase support.
- Test SSH credentials across a range of target IP addresses.
- Check for sudo privileges after successful SSH login.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nxc ssh

> Pentest and exploit SSH servers.
> See also: `hydra`.
> More information: <https://www.netexec.wiki/ssh-protocol>.

- Spray the specified password against a list of usernames on the specified target:

`nxc ssh {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{password}}`

- Search for valid credentials by trying out every combination in the specified lists of usernames and passwords:

`nxc ssh {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}}`

- Use the specified private key for authentication, using the supplied password as the key's passphrase:

`nxc ssh {{192.186.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{password}} --key-file {{path/to/id_rsa}}`

- Try a combination of username and password on a number of targets:

`nxc ssh {{192.168.178.0/24}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}}`

- Check for `sudo` privileges on a successful login:

`nxc ssh {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{path/to/passwords.txt}} --sudo-check`
