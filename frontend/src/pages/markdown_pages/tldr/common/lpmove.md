---
title: "Control Printer Jobs - lpmove Command | Online Free DevTools by Hexmos"
name: lpmove
path: /freedevtools/tldr/common/lpmove
canonical: "https://hexmos.com/freedevtools/tldr/common/lpmove/"
description: "Control printer jobs with lpmove. Move print jobs between printers, manage print queues, and troubleshoot printing issues. Free online tool, no registration required."
category: common
keywords:
- printer job management
- lpmove command
- move print job
- linux printing
- cups printing system
- command line printing
- printer queue management
- print server administration
- lp command
- print job control
features:
- Move specific print jobs to different printers.
- Transfer all print jobs from one printer to another.
- Specify a print server to manage print jobs on a network.
- Move print jobs using job IDs.
- Redirect print jobs to specific printers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lpmove

> Move a job or all jobs to another printer.
> See also: `cancel`, `lp`, `lpr`, `lprm`.
> More information: <https://openprinting.github.io/cups/doc/man-lpmove.html>.

- Move a specific job to `new_printer`:

`lpmove {{job_id}} {{new_printer}}`

- Move a job from `old_printer` to `new_printer`:

`lpmove {{old_printer}}-{{job_id}} {{new_printer}}`

- Move all jobs from `old_printer` to `new_printer`:

`lpmove {{old_printer}} {{new_printer}}`

- Move a specific job to `new_printer` on a specific server:

`lpmove -h {{server}} {{job_id}} {{new_printer}}`
