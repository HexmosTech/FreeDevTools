---
title: "Collectd System Stats - Monitor System Metrics | Free DevTools"
name: collectd
path: /freedevtools/tldr/linux/collectd
canonical: "https://hexmos.com/freedevtools/tldr/linux/collectd/"
description: "Monitor system metrics efficiently with Collectd.  Collect and analyze system performance data for proactive maintenance. Free online tool, no registration required."
category: linux
keywords:
  - system metrics monitoring
  - collectd daemon
  - system statistics collection
  - linux system monitoring
  - collectd configuration
  - performance data analysis
  - system resource monitoring
  - collectd plugins
  - real-time system monitoring
  - collectd troubleshooting
features:
  - Collects various system metrics like CPU usage, memory, disk I/O, and network traffic.
  - Allows configuration of data collection through plugins.
  - Provides real-time monitoring of system performance.
  - Supports various output methods for data visualization and analysis.
  - Enables proactive system maintenance through early identification of performance bottlenecks.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# collectd

> System statistics collection daemon.
> More information: <https://manned.org/collectd>.

- Test the configuration file and then exit:

`collectd -t`

- Test plugin data collection functionality and then exit:

`collectd -T`

- Start `collectd`:

`collectd`

- Specify a custom configuration file location:

`collectd -C {{path/to/file}}`

- Specify a custom PID file location:

`collectd -P {{path/to/file}}`

- Don't fork into the background:

`collectd -f`

- Display help and version:

`collectd -h`
