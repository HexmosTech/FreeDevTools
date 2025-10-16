---
title: "ESP8266 Flash Tool - Control ESP Chip Programming | Online Free DevTools by Hexmos"
name: esptool.py
path: "/freedevtools/tldr/common/esptool-py/"
canonical: "https://hexmos-com/freedevtools/tldr/common/esptool-py/"
description: "Control ESP chip programming with ESP8266 Flash Tool. Program firmware, erase flash and configure ESP devices using command line. Free online tool, no registration required."
category: common
keywords:
- esp8266 flash tool
- esp32 flash utility
- firmware programmer esp
- esp chip burner
- esp8266 programming tool
- esp32 flashing command
- esp erase flash command
- bootloader utility esp
- serial flasher esp8266
- esp programming linux
features:
- Flash firmware to ESP chips
- Erase the entire flash memory
- Specify the serial port for communication
- Set the baud rate for faster transfers
- Program ESP8266 and ESP32 chips
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# esptool.py

> Bootloader utility for Espressif chips (e.g. ESP8266).
> More information: <https://docs.espressif.com/projects/esptool/en/latest/esp32/>.

- Flash a firmware file to an ESP chip with a given port and baud rate:

`sudo esptool.py --port {{port}} --baud {{baud_rate}} write_flash 0x0 {{path/to/firmware.bin}}`

- Clear the flash of an ESP chip:

`sudo esptool.py --port {{port}} --baud {{baud_rate}} erase_flash`
