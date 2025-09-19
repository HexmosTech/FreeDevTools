---
title: "Iwlist Wireless Interface - Scan Networks | Online Free DevTools by Hexmos"
name: iwlist
path: /freedevtools/tldr/linux/iwlist
canonical: "https://hexmos.com/freedevtools/tldr/linux/iwlist/"
description: "Scan wireless networks and manage wireless interface settings with Iwlist.  Get detailed information about access points, frequencies, and security parameters. Free online tool, no registration required."
category: linux
keywords:
  - wireless network scanner
  - iwlist commands
  - linux wireless tools
  - network configuration linux
  - wifi interface management
  - wireless network details
  - iwlist scan command
  - wireless security parameters
  - linux wifi troubleshooting
  - access point detection
features:
  - Scan for nearby wireless access points and ad-hoc networks.
  - Display available wireless frequencies supported by the device.
  - List supported bit-rates for the wireless interface.
  - Retrieve WPA authentication parameters.
  - Show configured WPA encryption keys and supported key sizes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# iwlist

> Get detailed information from a wireless interface.
> More information: <https://manned.org/iwlist.8>.

- Display the list of access points and ad-hoc cells in range:

`iwlist {{wireless_interface}} scan`

- Display available frequencies in the device:

`iwlist {{wireless_interface}} frequency`

- List the bit-rates supported by the device:

`iwlist {{wireless_interface}} rate`

- List the WPA authentication parameters currently set:

`iwlist {{wireless_interface}} auth`

- List all the WPA encryption keys set in the device:

`iwlist {{wireless_interface}} wpakeys`

- List the encryption key sizes supported and list all the encryption keys set in the device:

`iwlist {{wireless_interface}} keys`

- List the various power management attributes and modes of the device:

`iwlist {{wireless_interface}} power`

- List generic information elements set in the device (used for WPA support):

`iwlist {{wireless_interface}} genie`
