---
title: "I2cset - Control I2C Devices | Online Free DevTools by Hexmos"
name: i2cset
path: /freedevtools/tldr/linux/i2cset
canonical: "https://hexmos.com/freedevtools/tldr/linux/i2cset/"
description: "Control I2C devices with i2cset. Easily set register values on I2C devices from the command line. Free online tool, no registration required."
category: linux
keywords:
- i2c device control
- i2c register write
- linux i2cset command
- i2c bus configuration
- smbus register set
- i2cset hexadecimal address
- embedded i2c control
- i2c command line tool
- linux i2c debugging
- i2c peripheral programming
features:
- Write to specific registers on I2C devices
- Set register values using hexadecimal addressing
- Force write operations without confirmation
- Specify data write modes for I2C communication
- Control I2C devices via command line in Linux
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# i2cset

> Set the value of a register of an I2C device.
> See also: `i2cdetect`, `i2cdump`, `i2cget`.
> Note: All addresses should be specified in hexadecimal.
> More information: <https://manned.org/i2cset>.

- Write to a register of an I2C device:

`i2cset {{i2cbus}} {{device_address}} {{register_address}} {{value}}`

- Write to a register of an I2C device without asking for confirmation:

`i2cset -y {{i2cbus}} {{device_address}} {{register_address}} {{value}}`

- Write to a register of an I2C device using a specific mode:

`i2cset {{i2cbus}} {{device_address}} {{register_address}} {{value}} {{b|w|c|s|i}}`
