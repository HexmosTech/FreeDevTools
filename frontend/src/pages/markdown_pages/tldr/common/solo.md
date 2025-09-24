---
title: "Solo Key Control - Interact with Solo Keys | Online Free DevTools by Hexmos"
name: solo
path: /freedevtools/tldr/common/solo
canonical: "https://hexmos.com/freedevtools/tldr/common/solo/"
description: "Control Solo hardware security keys with Solo. Update firmware, generate random bytes, and monitor serial output. Free online tool, no registration required."
category: common
keywords:
- solo key controller
- hardware security key manager
- solo key firmware update
- solo key random number generator
- solo key serial monitor
- solo key LED control
- solo key linux
- solo key macos
- solo key python
- solo key usb
features:
- List connected Solo keys
- Update Solo key firmware
- Blink Solo key LED
- Generate random bytes
- Monitor Solo key serial output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# solo

> Interact with Solo hardware security keys.
> More information: <https://github.com/solokeys/solo-python>.

- List connected Solos:

`solo ls`

- Update the currently connected Solo's firmware to the latest version:

`solo key update`

- Blink the LED of a specific Solo:

`solo key wink --serial {{serial_number}}`

- Generate random bytes using the currently connected Solo's secure random number generator:

`solo key rng raw`

- Monitor the serial output of a Solo:

`solo monitor {{path/to/serial_port}}`
