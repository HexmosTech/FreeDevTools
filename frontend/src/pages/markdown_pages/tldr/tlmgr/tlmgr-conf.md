---
title: "TeX Live Manager - Control TeX Configuration | Online Free DevTools by Hexmos"
name: tlmgr-conf
path: /freedevtools/tldr/tlmgr/tlmgr-conf
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-conf/"
description: "Control TeX Live configuration with TeX Live Manager (tlmgr). Customize texmf trees, updmap settings, and manage shell escapes effortlessly. Free online tool, no registration required."
category: common
keywords:
- tex live configuration
- tlmgr configuration
- texmf configuration
- updmap configuration
- tex live manager
- command line latex
- latex configuration
- tex system management
- tex configuration settings
- tex live command line
features:
- Show current TeX Live configuration
- Set specific configuration options
- Delete configuration options
- Manage texmf trees
- Disable system calls via \write18
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr conf

> Manage the TeX Live configuration.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#conf>.

- Show the current TeX Live configuration:

`tlmgr conf`

- Show the current `texmf`, `tlmgr`, or `updmap` configuration:

`tlmgr conf {{texmf|tlmgr|updmap}}`

- Show only a specific configuration option:

`tlmgr conf {{texmf|tlmgr|updmap}} {{configuration_key}}`

- Set a specific configuration option:

`tlmgr conf {{texmf|tlmgr|updmap}} {{configuration_key}} {{value}}`

- Delete a specific configuration option:

`tlmgr conf {{texmf|tlmgr|updmap}} --delete {{configuration_key}}`

- Disable the execution of system calls via `\write18`:

`tlmgr conf texmf {{shell_escape}} {{0}}`

- Show all additional `texmf` trees:

`tlmgr conf auxtrees show`
