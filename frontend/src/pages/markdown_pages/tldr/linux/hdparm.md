---
title: "Control Hard Drive Parameters - hdparm | Online Free DevTools by Hexmos"
name: hdparm
path: /freedevtools/tldr/linux/hdparm
canonical: "https://hexmos.com/freedevtools/tldr/linux/hdparm/"
description: "Control hard drive parameters with hdparm, set SATA and IDE drive settings for power management and performance tuning. Free online tool, no registration required."
category: linux
keywords:
  - hard drive parameters
  - sata parameters
  - ide parameters
  - hdparm command
  - disk management linux
  - storage device settings
  - advanced power management
  - spin down control
  - device identification
  - disk read speed test
features:
  - Retrieve hard drive identification information
  - Adjust advanced power management settings
  - Force a hard drive to enter standby mode
  - Set a hard drive's standby timeout
  - Test hard drive read speed
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hdparm

> Get and set SATA and IDE hard drive parameters.
> More information: <https://manned.org/hdparm>.

- Request the identification info of a given device:

`sudo hdparm -I {{/dev/device}}`

- Get the Advanced Power Management level:

`sudo hdparm -B {{/dev/device}}`

- Set the Advanced Power Management value (values 1-127 permit spin-down, and values 128-254 do not):

`sudo hdparm -B {{1}} {{/dev/device}}`

- Display the device's current power mode status:

`sudo hdparm -C {{/dev/device}}`

- Force a drive to immediately enter standby mode (usually causes a drive to spin down):

`sudo hdparm -y {{/dev/device}}`

- Put the drive into idle (low-power) mode, also setting its standby timeout:

`sudo hdparm -S {{standby_timeout}} {{device}}`

- Test the read speed of a specific device:

`sudo hdparm -tT {{device}}`
