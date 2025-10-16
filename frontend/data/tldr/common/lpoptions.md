---
title: "Control Printer Options - Manage Printing with lpoptions | Online Free DevTools by Hexmos"
name: lpoptions
path: "/freedevtools/tldr/common/lpoptions/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lpoptions/"
description: "Control printer options with lpoptions. Manage default printers, configure printer-specific settings, and remove unwanted options using command line. Free online tool, no registration required."
category: common
keywords:
- printer options management
- lpoptions command line
- cups printer configuration
- default printer settings
- printer instance control
- linux printing options
- macos printing options
- configure printer drivers
- printing system administration
- command line printer setup
features:
- Set the default printer for a user or system.
- List available printer-specific options.
- Add or modify printer options.
- Remove specific options from a printer configuration.
- Manage print queues via command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lpoptions

> Display or set printer options and defaults.
> See also: `lpadmin`.
> More information: <https://openprinting.github.io/cups/doc/man-lpoptions.html>.

- Set the default printer:

`lpoptions -d {{printer}}/{{instance}}`

- List printer-specific options of a specific printer:

`lpoptions -d {{printer}} -l`

- Set a new option on a specific printer:

`lpoptions -d {{printer}} -o {{option}}`

- Remove the options of a specific printer:

`lpoptions -d {{printer}} -x`
