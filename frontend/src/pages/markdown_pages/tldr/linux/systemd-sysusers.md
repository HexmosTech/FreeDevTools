---
title: "Create System Users - Manage User Accounts | Online Free DevTools by Hexmos"
name: systemd-sysusers
path: /freedevtools/tldr/linux/systemd-sysusers
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-sysusers/"
description: "Create system users with systemd-sysusers. Configure user accounts and groups efficiently using configuration files. Free online tool, no registration required."
category: linux
keywords:
  - systemd user creation
  - linux user management
  - systemd-sysusers configuration
  - create linux users
  - systemd group management
  - linux system administration
  - sysusers.d configuration
  - user account creation
  - linux user account control
  - systemd user tools
features:
  - Create users and groups from configuration files
  - Perform dry runs to preview changes
  - Print contents of configuration files
  - Manage system users using systemd
  - Automate user account creation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-sysusers

> Create system users and groups.
> If the config file is not specified, files in the `sysusers.d` directories are used.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-sysusers.html>.

- Create users and groups from a specific configuration file:

`systemd-sysusers {{path/to/file}}`

- Process configuration files and print what would be done without actually doing anything:

`systemd-sysusers --dry-run {{path/to/file}}`

- Print the contents of all configuration files (before each file, its name is printed as a comment):

`systemd-sysusers --cat-config`

- Create users based on files listed in the previous command:

`systemd-sysusers`
