---
title: "Getconf - Control System Configuration | Online Free DevTools by Hexmos"
name: getconf
path: /freedevtools/tldr/linux/getconf
canonical: "https://hexmos.com/freedevtools/tldr/linux/getconf/"
description: "Control system configurations with Getconf. Retrieve configuration variables and system limits. Free online tool, no registration required."
category: linux
keywords:
  - Linux system configuration
  - Getconf command
  - Configuration variable retrieval
  - System limit checking
  - Linux environment variables
  - Process limit check
  - System architecture check
  - Configuration directory values
  - Environment variable lookup
  - Getconf grep search
features:
  - Retrieve system configuration values
  - List all available configuration variables
  - Check system architecture (32-bit or 64-bit)
  - Determine the maximum number of processes a user can run
  - Search for configuration values using grep
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# getconf

> Get configuration values from your Linux system.
> More information: <https://manned.org/getconf.1>.

- List [a]ll configuration values available:

`getconf -a`

- List the configuration values for a specific directory:

`getconf -a {{path/to/directory}}`

- Check if the system is 32-bit or 64-bit:

`getconf LONG_BIT`

- Check how many processes the current user can run at once:

`getconf CHILD_MAX`

- List every configuration value and then find patterns with the `grep` command (i.e every value with MAX in it):

`getconf -a | grep MAX`
