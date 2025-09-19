---
title: "A2query - Retrieve Apache Configuration | Online Free DevTools by Hexmos"
name: a2query
path: /freedevtools/tldr/linux/a2query
canonical: "https://hexmos.com/freedevtools/tldr/linux/a2query/"
description: "Retrieve Apache configuration details with A2query. Inspect modules, virtual hosts, and versions for efficient server management. Free online tool, no registration required."
category: linux
keywords:
- apache configuration retrieve
- a2query apache modules
- linux apache version
- debian apache vhosts
- apache server configuration
- a2query module status
- linux a2query command
- apache runtime configuration
- a2query apache mpm
- apache configuration details
features:
- List enabled Apache modules
- Check module installation status
- List enabled virtual hosts
- Display the active MPM (Multi Processing Module)
- Display Apache version information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# a2query

> Retrieve runtime configuration from Apache on Debian-based OSes.
> More information: <https://manned.org/a2query>.

- List enabled Apache modules:

`sudo a2query -m`

- Check if a specific module is installed:

`sudo a2query -m {{module_name}}`

- List enabled virtual hosts:

`sudo a2query -s`

- Display the currently enabled Multi Processing Module:

`sudo a2query -M`

- Display Apache version:

`sudo a2query -v`
