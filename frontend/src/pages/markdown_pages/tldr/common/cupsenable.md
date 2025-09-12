---
title: "CUPS Enable - Start Printers and Classes | Free DevTools"
name: cupsenable
path: /freedevtools/tldr/common/cupsenable
canonical: "https://hexmos.com/freedevtools/tldr/common/cupsenable/"
description: "Start printers and classes with CUPS Enable. Quickly enable printing destinations on Linux and manage print queues. Free online tool, no registration required."
category: common
keywords:
- CUPS printer enable
- CUPS class enable
- Linux printer management
- CUPS printer control
- Command line printing Linux
- CUPS destination control
- CUPS printer resume
- Linux CUPS administration
- Print queue management
- CUPS job cancellation
features:
- Enable specified CUPS printers or classes
- Resume printing of held CUPS print jobs
- Cancel all pending jobs for a CUPS destination
- Control printer availability via command line
- Manage CUPS print queues and destinations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cupsenable

> Start printers and classes.
> Note: Destination is referred as a printer or a class of printers.
> See also: `cupsdisable`, `cupsaccept`, `cupsreject`, `lpstat`.
> More information: <https://www.cups.org/doc/man-cupsenable.html>.

- Start one or more destination(s):

`cupsenable {{destination1 destination2 ...}}`

- Resume printing of pending jobs of a destination (use after `cupsdisable` with `--hold`):

`cupsenable --release {{destination}}`

- Cancel all jobs of the specified destination(s):

`cupsenable -c {{destination1 destination2 ...}}`
