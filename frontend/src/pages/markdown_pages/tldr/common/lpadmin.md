---
title: "LPAdmin - Configure CUPS Printers | Online Free DevTools by Hexmos"
name: lpadmin
path: /freedevtools/tldr/common/lpadmin
canonical: "https://hexmos.com/freedevtools/tldr/common/lpadmin/"
description: "Configure CUPS printers with LPAdmin. Manage printers, classes, and default configurations efficiently with this command line tool. Free online tool, no registration required."
category: common
keywords:
- CUPS printer configuration
- LPAdmin command line
- printer management linux
- CUPS class management
- default printer setting
- printer deletion CUPS
- printer class addition
- printer class removal
- CUPS printer configuration command
- linux printing management
features:
- Set the default CUPS printer
- Delete specific printers or classes
- Add printers to a CUPS class
- Remove printers from a CUPS class
- Manage CUPS printing configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lpadmin

> Configure CUPS printers and classes.
> See also: `lpoptions`.
> More information: <https://openprinting.github.io/cups/doc/man-lpadmin.html>.

- Set the default printer:

`lpadmin -d {{printer}}`

- Delete a specific printer or class:

`lpadmin -x {{printer|class}}`

- Add a printer to a class:

`lpadmin -p {{printer}} -c {{class}}`

- Remove a printer from a class:

`lpadmin -p {{printer}} -r {{class}}`
