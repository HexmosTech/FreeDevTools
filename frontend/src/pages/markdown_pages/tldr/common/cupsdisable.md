---
title: "CUPS Disable - Stop Printers & Classes | Free DevTools"
name: cupsdisable
path: /freedevtools/tldr/common/cupsdisable
canonical: "https://hexmos.com/freedevtools/tldr/common/cupsdisable/"
description: "Disable CUPS printers with CUPS Disable. Quickly stop printers and classes via the command line. Free online tool, no registration required."
category: common
keywords:
- CUPS printer disable
- printer class disable
- CUPS command line
- printer control
- CUPS management
- Linux printer disable
- macOS printer disable
- printer queue disable
- CUPS job cancel
- disable printer jobs
features:
- Stop one or more specified CUPS destinations.
- Cancel all jobs for designated printers.
- Disable printing for a specific class of printers.
- Manage printer availability from the command line.
- Prevent printing to specific destinations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cupsdisable

> Stop printers and classes.
> Note: Destination is referred as a printer or a class of printers.
> See also: `cupsenable`, `cupsaccept`, `cupsreject`, `lpstat`.
> More information: <https://openprinting.github.io/cups/doc/man-cupsenable.html>.

- Stop one or more destination(s):

`cupsdisable {{destination1 destination2 ...}}`

- Cancel all jobs of the specified destination(s):

`cupsdisable -c {{destination1 destination2 ...}}`
