---
title: "Create Patches - Apply IPS/BPS Files | Online Free DevTools by Hexmos"
name: flips
path: /freedevtools/tldr/common/flips
canonical: "https://hexmos.com/freedevtools/tldr/common/flips/"
description: "Create patches with Flips, apply IPS and BPS patch formats to ROM files for modifying and distributing game hacks. Free online tool, no registration required."
category: common
keywords:
- bps patch creator
- ips patch creator
- rom patcher
- flips patch tool
- create rom patch
- apply bps patch
- apply ips patch
- rom hacking tool
- game patch utility
- smc patch generator
features:
- Create IPS patches from two ROM files
- Create BPS patches from two ROM files
- Apply IPS patches to ROM files
- Apply BPS patches to ROM files
- Create modified ROM files from patches
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flips

> Create and apply patches for IPS and BPS files.
> More information: <https://github.com/Alcaro/Flips>.

- Start Flips to create and apply patches interactively:

`flips`

- Apply a patch and create a new ROM file:

`flips --apply {{patch.bps}} {{rom.smc}} {{hack.smc}}`

- Create a patch from two ROMs:

`flips --create {{rom.smc}} {{hack.smc}} {{patch.bps}}`
