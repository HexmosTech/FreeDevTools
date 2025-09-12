---
title: "FTP Exploitation - Pentest FTP Servers | Free DevTools"
name: nxc-ftp
path: /freedevtools/tldr/common/nxc-ftp
canonical: "https://hexmos.com/freedevtools/tldr/common/nxc-ftp/"
description: "Pentest FTP servers with nxc-ftp. Exploit vulnerabilities and gain access using credential brute-forcing and file manipulation. Free online tool, no registration required."
category: common
keywords:
- FTP pentesting
- FTP exploitation tool
- NXC FTP module
- Network exploitation framework
- FTP brute force attack
- FTP file download
- FTP file upload
- FTP server security
- Password cracking FTP
- Network penetration testing
features:
- Brute force FTP credentials using username and password lists.
- Perform directory listings on FTP servers.
- Download files from FTP servers using valid credentials.
- Upload files to FTP servers using valid credentials.
- Continue credential searching after a successful login.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nxc ftp

> Pentest and exploit FTP servers.
> More information: <https://www.netexec.wiki/ftp-protocol>.

- Search for valid credentials by trying out every combination in the specified lists of usernames and passwords:

`nxc ftp {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}}`

- Continue searching for valid credentials even after valid credentials have been found:

`nxc ftp {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}} --continue-on-success`

- Perform directory listings on each FTP server the supplied credentials are valid on:

`nxc ftp {{192.168.178.0/24}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --ls`

- Download the specified file from the target server:

`nxc ftp {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --get {{path/to/file}}`

- Upload the specified file to the target server at the specified location:

`nxc ftp {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --put {{path/to/local_file}} {{path/to/remote_location}}`
