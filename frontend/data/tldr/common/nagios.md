---
title: "Nagios Monitoring - Control Network Services | Online Free DevTools by Hexmos"
name: nagios
path: "/freedevtools/tldr/common/nagios/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nagios/"
description: "Control network services with Nagios Monitoring. Schedule checks, verify configurations, and daemonize processes easily. Free online tool, no registration required."
category: common
keywords:
- nagios monitoring
- nagios network monitoring
- nagios service checks
- nagios configuration
- nagios daemon mode
- linux nagios
- network monitoring linux
- system monitoring
- nagios server
- nagios alerts
features:
- Start Nagios with a specified configuration file
- Run Nagios in daemon mode for background monitoring
- Schedule service checks and print information to standard output
- Verify Nagios configuration files for errors
- Control and monitor host, service, and network status
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nagios

> Legacy host/service/networking monitoring program.
> Largely deprecated by `nagios4`.
> See also: `nagios2`, `nagios3`, `nagios4`.
> More information: <https://manned.org/nagios>.

- Start `nagios`:

`nagios /etc/nagios/nagios.cfg`

- Start `nagios` in daemon mode:

`nagios -d`

- Start `nagios`, print service check scheduling information to `stdout`, then shutdown:

`nagios -s`

- Verify configuration file:

`nagios -v`
