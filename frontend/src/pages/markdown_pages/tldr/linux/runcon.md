---
title: "Runcon - Control SELinux Context | Free DevTools"
name: runcon
path: /freedevtools/tldr/linux/runcon
canonical: "https://hexmos.com/freedevtools/tldr/linux/runcon/"
description: "Control SELinux security contexts with Runcon. Execute programs in different security contexts for enhanced system security. Free online tool, no registration required."
category: linux
keywords:
- linux runcon
- runcon command
- selinux context
- security context control
- linux security
- selinux domain
- run command as user
- run command with role
- change selinux context
- linux command line
features:
- Execute commands in a specified SELinux domain
- Run programs with a defined SELinux role
- Specify the full SELinux security context for command execution
- Override the default security context for specific applications
- Isolate program execution environments using SELinux policies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# runcon

> Run a program in a different SELinux security context.
> See also: `secon`.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/runcon-invocation.html>.

- Print the security context of the current execution context:

`runcon`

- Specify the domain to run a command in:

`runcon {{[-t|--type]}} {{domain}}_t {{command}}`

- Specify the context role to run a command with:

`runcon {{[-r|--role]}} {{role}}_r {{command}}`

- Specify the full context to run a command with:

`runcon {{user}}_u:{{role}}_r:{{domain}}_t {{command}}`
