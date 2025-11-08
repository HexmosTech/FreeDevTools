---
title: "Create Wireless AP - Control WiFi Access Point with hostapd | Online Free DevTools by Hexmos"
name: hostapd
path: "/freedevtools/tldr/common/hostapd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/hostapd/"
description: "Create wireless access points with hostapd on Linux. Control WiFi networks, manage security settings and configure interfaces for wireless internet sharing. Free online tool, no registration required."
category: common
keywords:
- wireless access point configuration
- linux wifi hotspot
- hostapd configuration file
- wifi network manager
- wireless security protocol
- wifi interface controller
- command line access point
- linux wireless network
- create wifi access point
- access point manager
features:
- Start a wireless access point from the command line
- Configure security settings for a WiFi network
- Fork hostapd process into the background
- Define the interface used for wireless communication
- Control advanced parameters through a configuration file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hostapd

> Start an access point using a wireless interface.
> More information: <https://manned.org/hostapd>.

- Start an access point:

`sudo hostapd {{path/to/hostapd.conf}}`

- Start an access point, forking into the background:

`sudo hostapd -B {{path/to/hostapd.conf}}`
