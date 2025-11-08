---
title: "Control Nagios2 - Legacy Monitoring with Config Check | Online Free DevTools by Hexmos"
name: nagios2
path: "/freedevtools/tldr/common/nagios2/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nagios2/"
description: "Control Nagios2 monitoring service with this tool. Verify configurations and manage legacy networking. Free online tool, no registration required."
category: common
keywords:
- Nagios2 monitoring
- Nagios2 configuration
- Legacy monitoring
- Network monitoring
- Service monitoring
- Nagios2 command line
- Linux monitoring
- Nagios2 config check
- Host monitoring
- Nagios2 daemon
features:
- Start Nagios2 service
- Run Nagios2 in daemon mode
- Verify Nagios2 configuration
- Print service check scheduling information
- Control legacy network monitoring
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nagios2

> Legacy host/service/networking monitoring program.
> Largely deprecated by `nagios4`.
> See also: `nagios`, `nagios3`, `nagios4`.
> More information: <https://manned.org/nagios>.

- Start `nagios2`:

`nagios2 /etc/nagios2/nagios.cfg`

- Start `nagios2` in daemon mode:

`nagios2 -d`

- Start `nagios2`, print service check scheduling information to `stdout`, then shutdown:

`nagios2 -s`

- Verify configuration file:

`nagios2 -v`
