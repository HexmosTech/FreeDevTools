---
title: "Networksetup - Control Network Settings | Online Free DevTools by Hexmos"
name: networksetup
path: "/freedevtools/tldr/osx/networksetup/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/networksetup/"
description: "Control network settings with networksetup. Configure network services, manage Wi-Fi connections, and get network information. Free online tool, no registration required."
category: osx
keywords:
- macos network configuration
- networksetup command osx
- wifi network manager mac
- osx network service control
- network connection settings mac
- airport network ssid finder
- macos network troubleshoot tool
- command line network control
- osx network service provider
- network interface information mac
features:
- List available network services on macOS
- Display detailed information for a specific network interface
- Retrieve the name of the currently connected Wi-Fi network
- Connect to a specified Wi-Fi network with a password
- Manage and configure various network settings via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# networksetup

> Configuration tool for Network System Preferences.
> More information: <https://support.apple.com/guide/remote-desktop/about-networksetup-apdd0c5a2d5/mac>.

- List available network service providers (Ethernet, Wi-Fi, Bluetooth, etc):

`networksetup -listallnetworkservices`

- Show network settings for a particular networking device:

`networksetup -getinfo "{{Wi-Fi}}"`

- Get currently connected Wi-Fi network name (Wi-Fi device usually en0 or en1):

`networksetup -getairportnetwork {{en0}}`

- Connect to a particular Wi-Fi network:

`networksetup -setairportnetwork {{en0}} {{Airport Network SSID}} {{password}}`
