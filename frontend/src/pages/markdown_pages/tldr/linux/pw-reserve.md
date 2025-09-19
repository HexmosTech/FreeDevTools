---
title: "Reserve PipeWire Devices - Control Audio with pw-reserve | Online Free DevTools by Hexmos"
name: pw-reserve
path: /freedevtools/tldr/linux/pw-reserve
canonical: "https://hexmos.com/freedevtools/tldr/linux/pw-reserve/"
description: "Control audio device reservation with pw-reserve.  Monitor or reserve PipeWire audio devices easily via command line. Free online tool, no registration required."
category: linux
keywords:
  - PipeWire device reservation
  - pw-reserve command
  - audio device control
  - Linux audio management
  - PipeWire audio monitoring
  - command-line audio tools
  - reserve audio device
  - PipeWire device manager
  - manage PipeWire devices
  - Linux command-line utilities
features:
  - Reserve audio devices for exclusive use.
  - Monitor the status of reserved audio devices.
  - Supports specifying devices by name.
  - Provides a simple command-line interface.
  - Integrates seamlessly with PipeWire.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pw-reserve

> Reserve a device for PipeWire.
> More information: <https://docs.pipewire.org/page_man_pw-reserve_1.html>.

- Reserve a device (currently only supports audio devices):

`pw-reserve {{[-n|--name]}} {{audioN}}`

- Monitor a device instead of reserving it:

`pw-reserve {{[-n|--name]}} {{audioN}} {{[-m|--monitor]}}`

- Display help:

`pw-reserve {{[-h|--help]}}`
