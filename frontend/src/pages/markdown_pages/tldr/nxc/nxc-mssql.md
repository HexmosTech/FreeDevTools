---
title: "Nxc MSSQL Exploit - Pentest MSSQL Servers | Online Free DevTools by Hexmos"
name: nxc-mssql
path: /freedevtools/tldr/nxc/nxc-mssql
canonical: "https://hexmos.com/freedevtools/tldr/nxc/nxc-mssql/"
description: "Pentest MSSQL servers with nxc MSSQL. Find credentials, execute queries, and run commands with this network exploitation tool. Free online tool, no registration required."
category: common
keywords:
- mssql exploit
- mssql pentesting
- mssql penetration testing
- mssql command execution
- mssql query execution
- mssql credential search
- network exploitation
- nxc mssql commands
- nxc mssql exploit
- sql server pentest
features:
- Brute force MSSQL credentials using username and password lists
- Execute arbitrary SQL queries on MSSQL servers
- Execute shell commands via MSSQL
- Upload and download files to/from MSSQL servers
- Execute PowerShell commands without output on MSSQL servers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nxc mssql

> Pentest and exploit Microsoft SQL servers.
> More information: <https://www.netexec.wiki/mssql-protocol>.

- Search for valid credentials by trying out every combination in the specified lists of usernames and passwords:

`nxc mssql {{192.168.178.2}} {{[-u|--username]}} {{path/to/usernames.txt}} {{[-p|--password]}} {{path/to/passwords.txt}}`

- Execute the specified SQL query on the target server:

`nxc mssql {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} {{[-q|--query]}} '{{SELECT * FROM sys.databases;}}'`

- Execute the specified shell command on the target server through MSSQL:

`nxc mssql {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} -x {{whoami}}`

- Execute the specified PowerShell command on the target server through MSSQL without retrieving output:

`nxc mssql {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} -X {{whoami}} --no-output`

- Download a remote file from the target server and store it in the specified location:

`nxc mssql {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --get-file {{C:\path\to\remote_file}} {{path/to/local_file}}`

- Upload a local file to the specified location on the target server:

`nxc mssql {{192.168.178.2}} {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} --put-file {{path/to/local_file}} {{C:\path\to\remote_file}}`
