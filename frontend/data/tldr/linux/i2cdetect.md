---
title: "Scan I2C Buses - I2C Detect Command | Online Free DevTools by Hexmos"
name: i2cdetect
path: "/freedevtools/tldr/linux/i2cdetect/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/i2cdetect/"
description: "Scan I2C buses with the i2cdetect command.  Quickly identify connected I2C devices using this simple command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - i2c bus scanner
  - i2c device detection
  - linux i2cdetect
  - i2cdetect command
  - i2c communication
  - embedded systems i2c
  - i2c hardware detection
  - i2c troubleshooting
  - system bus scanner
  - i2c peripheral detection
features:
  - Lists active I2C buses on the system.
  - Scans for devices on a specified I2C bus.
  - Identifies connected I2C devices with their addresses.
  - Provides detailed output for troubleshooting I2C connectivity.
  - Offers a quick and efficient way to detect I2C devices without confirmation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# i2cdetect

> Scan I2C buses.
> See also: `i2cdump`, `i2cget`, `i2cset`.
> More information: <https://manned.org/i2cdetect>.

- List active I2C buses:

`i2cdetect -l`

- Scan devices on an I2C bus:

`i2cdetect {{i2c_bus}}`

- Scan devices on an I2C bus without asking for confirmation:

`i2cdetect -y {{i2c_bus}}`
