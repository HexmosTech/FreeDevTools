---
title: "Create AP - Generate Access Point | Online Free DevTools by Hexmos"
name: create_ap
path: "/freedevtools/tldr/linux/create_ap/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/create_ap/"
description: "Generate access points with Create AP, a powerful command-line tool for Linux. Set up Wi-Fi hotspots, manage network sharing, and customize adapter drivers. Free online tool, no registration required."
category: linux
keywords:
- access point generator
- wifi hotspot creator
- linux access point
- create_ap command
- wireless network setup
- internet sharing linux
- access point configuration
- wifi adapter driver
- command line access point
- network bridge creation
features:
- Create open or WPA/WPA2 encrypted access points.
- Enable internet sharing via Ethernet or Wi-Fi.
- Bridge network connections for seamless access.
- Customize Wi-Fi adapter drivers for compatibility.
- Configure access points without internet sharing.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# create_ap

> Create an AP (Access Point) at any channel.
> More information: <https://github.com/oblique/create_ap>.

- Create an open network with no passphrase:

`create_ap {{wlan0}} {{eth0}} {{access_point_ssid}}`

- Use a WPA + WPA2 passphrase:

`create_ap {{wlan0}} {{eth0}} {{access_point_ssid}} {{passphrase}}`

- Create an access point without Internet sharing:

`create_ap -n {{wlan0}} {{access_point_ssid}} {{passphrase}}`

- Create a bridged network with Internet sharing:

`create_ap -m bridge {{wlan0}} {{eth0}} {{access_point_ssid}} {{passphrase}}`

- Create a bridged network with Internet sharing and a pre-configured bridge interface:

`create_ap -m bridge {{wlan0}} {{br0}} {{access_point_ssid}} {{passphrase}}`

- Create an access port for Internet sharing from the same Wi-Fi interface:

`create_ap {{wlan0}} {{wlan0}} {{access_point_ssid}} {{passphrase}}`

- Choose a different Wi-Fi adapter driver:

`create_ap --driver {{wifi_adapter}} {{wlan0}} {{eth0}} {{access_point_ssid}} {{passphrase}}`
