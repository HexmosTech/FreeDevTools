---
title: "Control System Paths - Query Paths with systemd-path | Online Free DevTools by Hexmos"
name: systemd-path
path: "/freedevtools/tldr/linux/systemd-path/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-path/"
description: "Control system paths efficiently with systemd-path. Query, list, and manage system and user paths on Linux systems. Free online tool, no registration required."
category: linux
keywords:
  - systemd path management
  - linux path utility
  - query system paths
  - systemd-path command
  - list user paths
  - linux system configuration
  - systemd tools
  - path environment variables
  - systemd configuration files
  - linux system administration
features:
  - Display a list of all known system paths.
  - Query the value of a specific system path.
  - Customize output with a suffix string.
  - Quickly print the version of systemd-path.
  - Simplify system path management on Linux.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-path

> List and query system and user paths.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-path.html>.

- Display a list of known paths and their current values:

`systemd-path`

- Query the specified path and display its value:

`systemd-path "{{path_name}}"`

- Suffix printed paths with `suffix_string`:

`systemd-path --suffix {{suffix_string}}`

- Print a short version string and then exit:

`systemd-path --version`
