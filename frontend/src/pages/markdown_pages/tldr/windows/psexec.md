---
title: "Execute Remote Commands - Control PCs with PsExec | Free DevTools"
name: psexec
path: "/freedevtools/tldr/windows/psexec"
canonical: "https://hexmos.com/freedevtools/tldr/windows/psexec/"
description: "Execute remote commands with PsExec. Control remote Windows PCs, manage processes, and access network resources securely. Free online tool, no registration required."
category: windows
keywords:
- psexec windows command
- windows remote execution
- remote process control
- psexec command line
- windows sysinternals psexec
- remote command execution
- windows remote administration
- network process management
- remote system control
- windows remote shell
features:
- Execute commands on remote Windows systems.
- Authenticate with user credentials for secure access.
- Redirect output to files for logging and analysis.
- Interact with users via remotely executed programs.
- Display remote system configuration information.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# psexec

> Execute a command-line process on a remote machine.
> This is an advanced command and it might potentially be dangerous.
> More information: <https://learn.microsoft.com/sysinternals/downloads/psexec>.

- Execute a command using `cmd` in a remote shell:

`psexec \\{{remote_host}} cmd`

- Execute a command on a remote host (pre-authenticated):

`psexec \\{{remote_host}} -u {{user_name}} -p {{password}}`

- Execute a command remotely and output the result to a file:

`psexec \\{{remote_host}} cmd /c {{command}} -an ^>{{path\to\file.txt}}`

- Execute a program to interact with users:

`psexec \\{{remote_host}} -d -i {{program_name}}`

- Display the IP configuration of the remote host:

`psexec \\{{remote_host}} ipconfig /all`
