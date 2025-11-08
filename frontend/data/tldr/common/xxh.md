---
title: "Control SSH Shell - Xxh | Online Free DevTools by Hexmos"
name: xxh
path: "/freedevtools/tldr/common/xxh/"
canonical: "https://hexmos.com/freedevtools/tldr/common/xxh/"
description: "Control SSH shells with Xxh. Securely manage and customize your shell environment across SSH sessions. Free online tool, no registration required."
category: common
keywords:
- ssh shell manager
- remote shell customization
- xxh ssh configuration
- portable shell environment
- secure ssh session
- linux shell management
- macos ssh control
- cross platform shell
- ssh session persistence
- remote command execution
features:
- Securely connect to remote hosts with shell customizations
- Install custom shell environments on target machines
- Execute commands within customized SSH sessions
- Manage shell configurations across multiple hosts
- Set environment variables for remote shell processes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xxh

> Bring your shell with all of your customizations through SSH sessions.
> Note: `xxh` does not install anything into system directories on the target machine; removing `~/.xxh` will clear all traces of xxh on the target machine.
> More information: <https://github.com/xxh/xxh#usage>.

- Connect to a host and run the current shell:

`xxh "{{host}}"`

- Install the current shell into the target machine without prompting:

`xxh "{{host}}" ++install`

- Run the specified shell on the target machine:

`xxh "{{host}}" ++shell {{xonsh|zsh|fish|bash|osquery}}`

- Use a specific xxh configuration directory on the target machine:

`xxh "{{host}}" ++host-xxh-home {{~/.xxh}}`

- Use the specified configuration file on the host machine:

`xxh "{{host}}" ++xxh-config {{~/.config/xxh/config.xxhc}}`

- Specify a password to use for the SSH connection:

`xxh "{{host}}" ++password "{{password}}"`

- Install an xxh package on the target machine:

`xxh "{{host}}" ++install-xxh-packages {{package}}`

- Set an environment variable for the shell process on the target machine:

`xxh "{{host}}" ++env {{name}}={{value}}`
