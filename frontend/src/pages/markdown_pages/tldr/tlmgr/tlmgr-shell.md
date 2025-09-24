---
title: "TeX Live Manager - Control TeX Live with tlmgr | Online Free DevTools by Hexmos"
name: tlmgr-shell
path: /freedevtools/tldr/tlmgr/tlmgr-shell
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-shell/"
description: "Control TeX Live installations instantly with TeX Live Manager (tlmgr). Manage packages, update configurations, and troubleshoot installations effortlessly. Free online tool, no registration required."
category: common
keywords:
- TeX Live manager control
- tlmgr command line
- TeX package management
- TeX Live configuration
- tlmgr interactive shell
- TeX Live update
- tlmgr variables
- TeX package installer
- TeX Live command
- TeX package manager
features:
- Launch an interactive tlmgr shell for direct command execution
- Execute any tlmgr subcommand within the interactive shell
- Manage and modify TeX Live variables dynamically
- Restart the tlmgr shell environment as needed
- Display the current protocol version in use
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr shell

> Start an interactive shell of the native TeX Live manager.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#shell>.

- Start an interactive shell of `tlmgr`:

`tlmgr shell`

- Run any `tlmgr` subcommand in the interactive shell:

`{{subcommand}} {{arguments}}`

- Quit the interactive shell:

`quit`

- List all TeX Live variables:

`get`

- Get the value of a TeX Live variable:

`get {{variable}}`

- Set the value of a TeX Live variable:

`set {{variable}} {{value}}`

- Restart the interactive shell:

`restart`

- Display the version of the current protocol:

`protocol`
