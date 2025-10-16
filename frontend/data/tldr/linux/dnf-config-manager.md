---
title: "DNF Config Manager - Control Repositories on Linux | Online Free DevTools by Hexmos"
name: dnf-config-manager
path: "/freedevtools/tldr/linux/dnf-config-manager/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnf-config-manager/"
description: "Control DNF repositories on Linux with DNF Config Manager. Manage, add, enable, and disable repositories easily. Free online tool, no registration required."
category: linux
keywords:
- dnf repository manager
- linux dnf configuration
- fedora repository control
- dnf config management
- yum repository configuration
- rpm repository editor
- dnf repository enable
- dnf repository disable
- dnf repository add
- dnf repository setopt
features:
- Add and enable DNF repositories from a URL
- Print current configuration values
- Enable specific DNF repositories
- Disable specified DNF repositories
- Set configuration options for a repository
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dnf config-manager

> Manage DNF configuration options and repositories on Fedora-based systems.
> Not default to `dnf` but supported via `dnf-plugins-core`.
> See also: `dnf`.
> More information: <https://dnf-plugins-core.readthedocs.io/en/latest/config_manager.html>.

- Add (and enable) a repository from a URL:

`dnf config-manager --add-repo={{repository_url}}`

- Print current configuration values:

`dnf config-manager --dump`

- Enable a specific repository:

`dnf config-manager {{[--enable|--set-enabled]}} {{repository_id}}`

- Disable specified repositories:

`dnf config-manager {{[--disable|--set-disabled]}} {{repository_id1 repository_id2 ...}}`

- Set a configuration option for a repository:

`dnf config-manager --setopt={{option}}={{value}}`

- Display help:

`dnf config-manager --help-cmd`
