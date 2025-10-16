---
title: "Find Overridden systemd Files - systemd-delta Control | Online Free DevTools by Hexmos"
name: systemd-delta
path: "/freedevtools/tldr/linux/systemd-delta/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-delta/"
description: "Find and manage overridden systemd configuration files with systemd-delta. Identify masked, equivalent, redirected, and overridden files easily. Free online tool, no registration required."
category: linux
keywords:
  - systemd configuration files
  - systemd-delta command
  - linux systemd override
  - systemd file finder
  - find systemd files
  - systemd configuration management
  - systemd file analysis
  - linux system administration
  - systemd delta tool
  - overridden systemd detection
features:
  - Identify all overridden systemd configuration files.
  - Filter results by specific configuration file types (masked, equivalent, redirected, overridden, extended, unchanged).
  - Search for files based on path prefixes.
  - Refine searches using path suffixes in combination with prefixes.
  - Quickly locate and manage conflicting systemd configurations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemd-delta

> Find overridden systemd-related configuration files.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-delta.html>.

- Show all overridden configuration files:

`systemd-delta`

- Show only files of specific types (comma-separated list):

`systemd-delta {{[-t|--type]}} {{masked|equivalent|redirected|overridden|extended|unchanged}}`

- Show only files whose path starts with the specified prefix (Note: A prefix is a directory containing subdirectories with systemd configuration files):

`systemd-delta {{/etc|/run|/usr/lib|...}}`

- Further restrict the search path by adding a suffix (the prefix is optional):

`systemd-delta {{prefix}}/{{tmpfiles.d|sysctl.d|systemd/system|...}}`
