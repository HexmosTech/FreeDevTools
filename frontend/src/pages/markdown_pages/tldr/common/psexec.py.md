---
title: "PsExec Execute - Control Remote Windows Processes | Online Free DevTools by Hexmos"
name: psexec.py
path: /freedevtools/tldr/common/psexec.py
canonical: "https://hexmos.com/freedevtools/tldr/common/psexec.py/"
description: "Execute remote commands with PsExec, a powerful tool to manage Windows processes remotely using RemComSvc. Free online tool, no registration required."
category: common
keywords:
- Windows remote execution
- PsExec remote commands
- RemComSvc command execution
- SMB remote access
- Windows pass-the-hash
- Kerberos authentication Windows
- Impacket psexec command
- Windows lateral movement
- Domain controller command execution
- Windows system administration
features:
- Execute commands on remote Windows systems
- Spawn interactive shells remotely
- Support pass-the-hash authentication
- Utilize Kerberos authentication for secure access
- Specify a remote execution path
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# psexec.py

> Execute commands on a remote Windows machine using `RemComSvc`, providing PsExec-like functionality.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Spawn an interactive shell on a remote target:

`psexec.py {{domain}}/{{username}}:{{password}}@{{target}}`

- Execute a specific command on a remote target:

`psexec.py {{domain}}/{{username}}:{{password}}@{{target}} {{command}}`

- Copy the filename for later execution, arguments are passed in the command:

`psexec.py -c {{filename}} {{domain}}/{{username}}:{{password}}@{{target}} {{command}}`

- Execute a command from a specific path on a remote target:

`psexec.py -path {{path}} {{domain}}/{{username}}:{{password}}@{{target}} {{command}}`

- Authenticate using pass-the-hash authentication instead of a password:

`psexec.py -hashes {{LM_Hash}}:{{NT_Hash}} {{domain}}/{{username}}@{{target}}`

- Use Kerberos authentication for the target:

`psexec.py -k -no-pass {{domain}}/{{username}}@{{target}}`

- Specify the IP address of the domain controller:

`psexec.py -dc-ip {{domain_controller_ip}} {{domain}}/{{username}}:{{password}}@{{target}}`
