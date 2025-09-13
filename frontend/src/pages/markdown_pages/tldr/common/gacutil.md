---
title: "Gacutil - Manage Assemblies | Free DevTools"
name: gacutil
path: /freedevtools/tldr/common/gacutil
canonical: "https://hexmos.com/freedevtools/tldr/common/gacutil/"
description: "Manage assemblies with Gacutil, the Global Assembly Cache utility. Install, uninstall and list assemblies in the GAC effortlessly. Free online tool, no registration required."
category: common
keywords:
- assembly manager
- gacutil utility
- .NET assembly
- global assembly cache
- assembly installer
- assembly uninstaller
- gacutil command
- gacutil .net
- .net framework assembly
- gacutil tool
features:
- Install assemblies into the Global Assembly Cache (GAC)
- Uninstall assemblies from the Global Assembly Cache (GAC)
- List the contents of the Global Assembly Cache (GAC)
- Manage .NET framework assemblies
- Deploy and manage shared assemblies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gacutil

> Global Assembly Cache (CAG) management utility.
> More information: <https://manned.org/gacutil>.

- Install the specified assembly into GAC:

`gacutil -i {{path/to/assembly.dll}}`

- Uninstall the specified assembly from GAC:

`gacutil -i {{assembly_display_name}}`

- Print the content of GAC:

`gacutil -l`
