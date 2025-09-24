---
title: "TeX Live Manager - Control TeX Settings | Online Free DevTools by Hexmos"
name: tlmgr-option
path: /freedevtools/tldr/tlmgr/tlmgr-option
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-option/"
description: "Control TeX Live settings easily with TeX Live Manager. Configure repositories, update packages, and manage installations through the command line. Free online tool, no registration required."
category: common
keywords:
- tex live manager control
- tex live settings manager
- tex live package manager
- tlmgr configuration linux
- tlmgr repository management
- tex distribution manager
- latex package configuration
- texlive update settings
- tex live install options
- command line tex control
features:
- Display all available TeX Live options
- Show currently set configuration values
- Output settings in JSON format
- Modify the value of a specific option
- Configure the update repository for TeX Live
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr option

> TeX Live settings manager.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#option>.

- List all TeX Live settings:

`tlmgr option showall`

- List all currently set Tex Live settings:

`tlmgr option show`

- Print all TeX Live settings in JSON format:

`tlmgr option showall --json`

- Show the value of a specific TeX Live setting:

`tlmgr option {{setting}}`

- Modify the value of a specific TeX Live setting:

`tlmgr option {{setting}} {{value}}`

- Set TeX Live to get future updates from the internet after installing from DVD:

`tlmgr option {{repository}} {{https://mirror.ctan.org/systems/texlive/tlnet}}`
