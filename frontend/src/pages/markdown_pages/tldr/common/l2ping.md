---
title: "L2ping - Ping Bluetooth Devices | Online Free DevTools by Hexmos"
name: l2ping
path: /freedevtools/tldr/common/l2ping
canonical: "https://hexmos.com/freedevtools/tldr/common/l2ping/"
description: "Ping Bluetooth devices quickly with L2ping. Diagnose connectivity issues and verify device status via command-line interface. Free online tool, no registration required."
category: common
keywords:
- l2ping bluetooth ping
- bluetooth ping linux
- bluetooth connectivity test
- l2cap echo request
- bluetooth diagnostic tool
- bluetooth command line ping
- linux bluetooth tools
- bluetooth network testing
- hci bluetooth ping
- bluetooth device discovery
features:
- Ping Bluetooth devices by MAC address
- Reverse ping Bluetooth devices
- Specify interface for Bluetooth ping
- Control data package size for Bluetooth pings
- Flood ping a Bluetooth device
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# l2ping

> Send an L2CAP echo request and receive an answer.
> More information: <https://manned.org/l2ping>.

- Ping a Bluetooth device:

`sudo l2ping {{mac_address}}`

- Reverse ping a Bluetooth device:

`sudo l2ping -r {{mac_address}}`

- Ping a Bluetooth device from a specified interface:

`sudo l2ping -i {{hci0}} {{mac_address}}`

- Ping Bluetooth device with a specified sized data package:

`sudo l2ping -s {{byte_count}} {{mac_address}}`

- Ping flood a Bluetooth device:

`sudo l2ping -f {{mac_address}}`

- Ping a Bluetooth device a specified amount of times:

`sudo l2ping -c {{amount}} {{mac_address}}`

- Ping a Bluetooth device with a specified delay between requests:

`sudo l2ping -d {{seconds}} {{mac_address}}`
