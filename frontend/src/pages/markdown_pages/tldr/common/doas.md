---
title: "Execute Command as User - Control Privileges with doas | Free DevTools"
name: doas
path: /freedevtools/tldr/common/doas
canonical: "https://hexmos.com/freedevtools/tldr/common/doas/"
description: "Execute commands as user with doas. Control user privileges and manage system access with this versatile command. Free online tool, no registration required."
category: common
keywords:
- command execution as user
- doas privilege escalation
- execute command as root
- linux command execution
- openbsd doas command
- user privilege management
- doas configuration file parsing
- command line privilege control
- su alternative
- sudo alternative
features:
- Execute commands as root or another user.
- Launch the default shell with elevated privileges.
- Parse configuration files to check command execution permissions.
- Request password authentication for enhanced security.
- Manage user access with granular control.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doas

> Execute a command as another user.
> More information: <https://man.openbsd.org/doas>.

- Run a command as root:

`doas {{command}}`

- Run a command as another user:

`doas -u {{user}} {{command}}`

- Launch the default shell as root:

`doas -s`

- Parse a configuration file and check if the execution of a command as another user is allowed:

`doas -C {{path/to/config_file}} {{command}}`

- Make `doas` request a password even after it was supplied earlier:

`doas -L`
