---
title: "utmpdump - Dump & Load Accounting Files | Free DevTools"
name: utmpdump
path: /freedevtools/tldr/linux/utmpdump
canonical: "https://hexmos.com/freedevtools/tldr/linux/utmpdump/"
description: "Dump and load system accounting files with utmpdump.  Manage btmp, utmp, and wtmp files easily. Free online tool, no registration required."
category: linux
keywords:
  - utmpdump command
  - linux utmpdump
  - wtmp file analysis
  - btmp file viewer
  - utmp file management
  - system accounting dump
  - linux system logs
  - unix utmpdump
  - audit log analysis
  - account login tracking
features:
  - Dumps /var/log/wtmp to standard output
  - Loads previously dumped files back into /var/log/wtmp
  - Supports btmp, utmp, and wtmp file formats
  - Provides plain text output for easy analysis
  - Uses simple command-line interface for easy execution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# utmpdump

> Dump and load btmp, utmp and wtmp accounting files.
> More information: <https://manned.org/utmpdump>.

- Dump the `/var/log/wtmp` file to `stdout` as plain text:

`utmpdump {{/var/log/wtmp}}`

- Load a previously dumped file into `/var/log/wtmp`:

`utmpdump {{[-r|--reverse]}} {{dumpfile}} > {{/var/log/wtmp}}`
