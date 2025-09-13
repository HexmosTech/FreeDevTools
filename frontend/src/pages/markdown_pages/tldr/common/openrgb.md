---
title: "Control RGB Lighting - OpenRGB Command | Free DevTools"
name: openrgb
path: /freedevtools/tldr/common/openrgb
canonical: "https://hexmos.com/freedevtools/tldr/common/openrgb/"
description: "Control RGB lighting devices with OpenRGB command. Manage colors, modes, and effects on your computer hardware. Free online tool, no registration required."
category: common
keywords:
- RGB lighting control
- OpenRGB command line
- Device color configuration
- Hardware lighting effects
- Linux RGB control
- Windows RGB control
- macOS RGB control
- Open source RGB
- RGB lighting customization
- Peripheral lighting sync
features:
- Control RGB lighting on supported devices.
- List available RGB devices on the system.
- Set the lighting mode for a specific device.
- Change the color of RGB lighting.
- Display help information for the OpenRGB command.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openrgb

> Control RGB lighting.
> More information: <https://gitlab.com/OpenRGBDevelopers/OpenRGB-Wiki/-/blob/stable/User-Documentation/Using-OpenRGB.md>.

- Start the OpenRGB GUI:

`openrgb`

- List devices supported by OpenRGB:

`openrgb --noautoconnect {{[-l|--list-devices]}}`

- Set the mode and color of a device:

`openrgb {{[-m|--mode]}} {{off|static|breathing|rainbow|flashing|...}} {{[-c|--color]}} {{random|red|00AAFF|...}}`

- Display help:

`openrgb {{[-h|--help]}}`
