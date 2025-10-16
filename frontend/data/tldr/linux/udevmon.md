---
title: "Monitor Input Devices - Intercept Events with udevmon | Online Free DevTools by Hexmos"
name: udevmon
path: "/freedevtools/tldr/linux/udevmon/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/udevmon/"
description: "Intercept and monitor input device events with udevmon.  Filter and modify events using YAML configuration files for customized actions. Free online tool, no registration required."
category: linux
keywords:
  - Linux input device monitor
  - udev event interception
  - YAML configuration monitor
  - Linux system monitoring
  - input event filtering
  - udevmon configuration
  - device event processing
  - Linux input management
  - real-time event monitoring
  - udev rule modification
features:
  - Intercept and filter input device events.
  - Modify events based on YAML configuration files.
  - Launch tasks based on specific input device events.
  - Utilize a flexible and customizable configuration system.
  - Monitor input devices for debugging and automation purposes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# udevmon

> Intercept and monitor input devices for launching tasks.
> Filters or modifies events according to configuration file(s) (default: `/etc/interception/udevmon.d/*.yaml`).
> More information: <https://gitlab.com/interception/linux/tools/-/tree/master#udevmon>.

- Start udevmon with specified configuration file:

`udevmon -c {{path/to/config.yaml}}`
