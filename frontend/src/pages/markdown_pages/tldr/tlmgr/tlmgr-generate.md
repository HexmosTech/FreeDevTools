---
title: "Generate TeX Live Config - Remake TLMGR Settings | Free DevTools"
name: tlmgr-generate
path: "/freedevtools/tldr/tlmgr/tlmgr-generate"
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-generate/"
description: "Generate TeX Live configuration files with TLMGR, a powerful package manager. Remake settings and system files locally. Free online tool, no registration required."
category: common
keywords:
- TeX Live configuration
- TLMGR configuration
- TeX Live settings
- TLMGR settings
- TeX configuration generator
- Linux TeX configuration
- macOS TeX configuration
- Windows TeX configuration
- TLMGR config file
- TeX package manager config
features:
- Remake configuration files from local information
- Specify a custom output file for generated configuration
- Use a local configuration file as a basis
- Rebuild the system after configuration changes
- Update system configuration after changes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tlmgr generate

> Remake configuration files from information stored locally.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#generate>.

- Remake the configuration file storing into a specific location:

`tlmgr generate --dest {{output_file}}`

- Remake the configuration file using a local configuration file:

`tlmgr generate --localcfg {{local_configuration_file}}`

- Run necessary programs after rebuilding configuration files:

`tlmgr generate --rebuild-sys`
