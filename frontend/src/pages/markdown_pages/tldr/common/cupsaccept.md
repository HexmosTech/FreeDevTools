---
title: "Control CUPS Printers - Accept Print Jobs | Online Free DevTools by Hexmos"
name: cupsaccept
path: /freedevtools/tldr/common/cupsaccept
canonical: "https://hexmos.com/freedevtools/tldr/common/cupsaccept/"
description: "Accept print jobs with CUPS accept. Control CUPS printer queues and manage destination printers. Free online tool, no registration required."
category: common
keywords:
- CUPS printer accept
- CUPS accept command
- printer queue management
- CUPS print job control
- linux printer management
- cupsaccept linux
- command line printing
- destination printer control
- print server management
- cups printing system
features:
- Accept print jobs for specified printers
- Specify a different CUPS server to connect to
- Control print jobs for printer classes
- Manage printing destinations from the command line
- Enable print queue processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cupsaccept

> Accept jobs sent to destinations.
> Note: Destination is referred as a printer or a class of printers.
> See also: `cupsreject`, `cupsenable`, `cupsdisable`, `lpstat`.
> More information: <https://www.cups.org/doc/man-cupsaccept.html>.

- Accept print jobs to the specified destinations:

`cupsaccept {{destination1 destination2 ...}}`

- Specify a different server:

`cupsaccept -h {{server}} {{destination1 destination2 ...}}`
