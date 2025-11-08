---
title: "I2cdump - Dump I2C Registers | Online Free DevTools by Hexmos"
name: i2cdump
path: "/freedevtools/tldr/linux/i2cdump/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/i2cdump/"
description: "Dump I2C registers with I2cdump. Easily inspect and debug I2C device communication. Free online tool, no registration required."
category: linux
keywords:
  - I2C register dump
  - I2C device register dump
  - I2cdump command
  - Linux I2C
  - I2C bus analysis
  - I2C debugging
  - I2C communication
  - Hexadecimal register dump
  - System control I2C
  - Embedded system I2C
features:
  - Dump all registers of an I2C device
  - Bypass confirmation prompts during I2C register dumping
  - Specify I2C communication mode for dumping
  - Dump a specific range of registers
  - Inspect I2C device communication
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# i2cdump

> Dump I2C device registers.
> See also: `i2cdetect`, `i2cget`, `i2cset`.
> Note: All addresses should be specified in hexadecimal.
> More information: <https://manned.org/i2cdump>.

- Dump all registers of an I2C device:

`i2cdump {{i2cbus}} {{device_address}}`

- Dump all registers of an I2C device without asking for confirmation:

`i2cdump -y {{i2cbus}} {{device_address}}`

- Dump all registers of an I2C device using a specific mode:

`i2cdump {{i2cbus}} {{device_address}} {{b|w|c|s|i}}`

- Dump registers from `start` to `end` of an I2C device:

`i2cdump -r {{start}}-{{end}} {{i2cbus}} {{device_address}}`
