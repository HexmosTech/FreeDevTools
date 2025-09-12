---
title: "RPC Client - Control Remote Windows Systems | Free DevTools"
name: rpcclient
path: /freedevtools/tldr/linux/rpcclient
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpcclient/"
description: "Control remote Windows systems with RPC Client, a powerful Samba tool. Manage users, execute commands, and query system information. Free online tool, no registration required."
category: linux
keywords:
- MS-RPC client
- samba rpcclient
- windows remote access
- linux windows management
- remote system control
- domain user management
- windows command execution
- samba suite tools
- network administration linux
- rpcclient commands
features:
- Connect to remote Windows systems using MS-RPC protocol
- Execute shell commands remotely on Windows hosts
- Manage domain users, including creating and querying users
- Enumerate domain privileges and system information
- Authenticate with usernames, passwords, or password hashes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rpcclient

> MS-RPC client tool (part of the samba suite).
> More information: <https://www.samba.org/samba/docs/current/man-html/rpcclient.1.html>.

- Connect to a remote host:

`rpcclient {{[-U|--user]}} {{domain}}\{{username}}%{{password}} {{ip}}`

- Connect to a remote host on a domain without a password:

`rpcclient {{[-U|--user]}} {{username}} {{[-W|--workgroup]}} {{domain}} {{[-N|--no-pass]}} {{ip}}`

- Connect to a remote host, passing the password hash:

`rpcclient {{[-U|--user]}} {{domain}}\{{username}} --pw-nt-hash {{ip}}`

- Execute shell commands on a remote host:

`rpcclient {{[-U|--user]}} {{domain}}\{{username}}%{{password}} {{[-c|--command]}} {{semicolon_separated_commands}} {{ip}}`

- Display domain users:

`rpcclient $> enumdomusers`

- Display privileges:

`rpcclient $> enumprivs`

- Display information about a specific user:

`rpcclient $> queryuser {{username|rid}}`

- Create a new user in the domain:

`rpcclient $> createdomuser {{username}}`
