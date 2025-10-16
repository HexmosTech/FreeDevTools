---
title: "Manage DNF Modules - Control Packages with dnf-module | Online Free DevTools by Hexmos"
name: dnf-module
path: "/freedevtools/tldr/linux/dnf-module/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnf-module/"
description: "Manage and control DNF modules with the dnf-module command.  Enable, disable, install, and list modules easily using the command line. Free online tool, no registration required."
category: linux
keywords:
  - dnf module management
  - linux package management
  - dnf module list
  - dnf module enable
  - dnf module install
  - linux dnf modules
  - command line package manager
  - dnf module version control
  - software package modularity
  - system package management
features:
  - List all installed DNF modules and their status.
  - Enable or disable specific DNF modules.
  - Install specific versions of DNF modules.
  - View the modularity of individual packages.
  - Manage dependencies of DNF modules effectively.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dnf module

> Manage package modularity.
> More information: <https://dnf.readthedocs.io/en/latest/command_ref.html#module-command>.

- View the modularity overview:

`dnf module list`

- View modularity of a specific program:

`dnf module list {{package_name}}`

- Set a package to be enabled:

`sudo dnf module enable {{package_name}}:{{stream}}`

- Enable and install a specific version:

`dnf module install {{package_name}}:{{stream}}`
