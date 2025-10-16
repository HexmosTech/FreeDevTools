---
title: "Iproxy Forward Ports - Control USB Port Forwarding | Online Free DevTools by Hexmos"
name: iproxy
path: "/freedevtools/tldr/common/iproxy/"
canonical: "https://hexmos.com/freedevtools/tldr/common/iproxy/"
description: "Control USB port forwarding with Iproxy. Easily forward TCP ports over USB for debugging and development on iOS devices. Free online tool, no registration required."
category: common
keywords:
- usb port forwarding
- ios port forwarding
- tcp port proxy
- usbmuxd proxy
- iphone port forward
- ipad port forward
- iproxy command
- ios development
- usb debugging
- ios wifi sync
features:
- Forward TCP ports over USB to iOS devices.
- Proxy connections to specific devices via UDID.
- Enable network port forwarding for WiFi synced devices.
- Bind multiple local TCP ports simultaneously.
- Connect to device ports using command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# iproxy

> A proxy that binds local TCP ports to be forwarded to the specified ports on a usbmux device.
> More information: <https://manned.org/iproxy>.

- Bind a local TCP port and forward it to a port on the connected USB device:

`iproxy {{local_port}}:{{device_port}}`

- Bind multiple local TCP ports and forward them to the respective ports on the connected USB device:

`iproxy {{local_port1}}:{{device_port1}} {{local_port2}}:{{device_port2}}`

- Bind a local port and forward it to a specific device by UDID:

`iproxy --udid {{device_udid}} {{local_port}}:{{device_port}}`

- Bind a local port and forward it to a network-connected device with WiFi sync enabled:

`iproxy --network {{local_port}}:{{device_port}}`
