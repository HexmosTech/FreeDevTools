---
title: "Systemd Password Query - Ask System Passwords | Online Free DevTools by Hexmos"
name: systemd-ask-password
path: /freedevtools/tldr/linux/systemd-ask-password
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-ask-password/"
description: "Query system passwords with systemd-ask-password. Configure timeout, specify identifiers, and use kernel keyring for caching. Free online tool, no registration required."
category: linux
keywords:
- systemd password query
- linux password prompt
- systemd ask password
- kernel keyring password
- command line password tool
- linux systemd tool
- secure password prompt
- system password management
- systemd configuration
- tty password query
features:
- Query passwords with a specific prompt
- Use kernel keyring as password cache
- Set a custom timeout for password queries
- Pass asked password to another program
- Store passwords securely in kernel keyring
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-ask-password

> Query the user for a system password.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-ask-password.html>.

- Query a system password with a specific prompt:

`systemd-ask-password "{{prompt}}"`

- Specify an identifier for the password query:

`systemd-ask-password --id {{identifier}} "{{prompt}}"`

- Use a kernel keyring key name as a cache for the password:

`systemd-ask-password --keyname {{key_name}} "{{prompt}}"`

- Set a custom timeout for the password query:

`systemd-ask-password --timeout {{seconds}} "{{prompt}}"`

- Force the use of an agent system and never ask on current TTY:

`systemd-ask-password --no-tty "{{prompt}}"`

- Store a password in the kernel keyring without displaying it:

`systemd-ask-password --no-output --keyname {{key_name}} "{{prompt}}"`

- Pass the asked password to another program:

`systemd-ask-password | {{command}}`

- Display help:

`systemd-ask-password {{[-h|--help]}}`
