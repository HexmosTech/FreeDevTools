---
title: "I2cget - Read I2C Registers | Online Free DevTools by Hexmos"
name: i2cget
path: /freedevtools/tldr/linux/i2cget
canonical: "https://hexmos.com/freedevtools/tldr/linux/i2cget/"
description: "Read I2C registers with I2cget. Inspect device communication and debug embedded systems efficiently. Free online tool, no registration required."
category: linux
keywords:
- I2C register reader
- I2C device communication
- Linux I2C tool
- I2C debug command
- I2C bus access
- I2C register dump
- I2C address read
- Command-line I2C
- Embedded system debugging
- Linux system administration
features:
- Read data from specific I2C device registers.
- Specify the I2C bus to interact with.
- Bypass confirmation prompts for automated scripts.
- Select specific data access modes (byte, word, etc.).
- Inspect I2C device state and troubleshoot issues.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# i2cget

> Read from an register of an I2C device.
> See also: `i2cdetect`, `i2cdump`, `i2cset`.
> Note: All addresses should be specified in hexadecimal.
> More information: <https://manned.org/i2cget>.

- Read from a register of an I2C device:

`i2cget {{i2cbus}} {{device_address}} {{register_address}}`

- Read from a register of an I2C device without asking for confirmation:

`i2cget -y {{i2cbus}} {{device_address}} {{register_address}}`

- Read from a register of an I2C device using a specific mode:

`i2cget {{i2cbus}} {{device_address}} {{register_address}} {{b|w|c|s|i}}`
