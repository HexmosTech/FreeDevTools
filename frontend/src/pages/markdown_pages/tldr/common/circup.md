---
title: "Circup Updater - Manage CircuitPython Libraries | Free DevTools"
name: circup
path: /freedevtools/tldr/common/circup
canonical: "https://hexmos.com/freedevtools/tldr/common/circup/"
description: "Manage CircuitPython libraries easily with Circup Updater. Install, update and freeze CircuitPython modules on your device. Free online tool, no registration required."
category: common
keywords:
- CircuitPython library manager
- CircuitPython module updater
- circup command line tool
- CircuitPython dependency management
- install CircuitPython libraries
- update CircuitPython libraries
- CircuitPython requirements file
- CircuitPython package manager
- circup install
- circup freeze
features:
- Interactively update CircuitPython modules
- Install new CircuitPython libraries by name
- Search for available CircuitPython libraries
- Generate a requirements.txt file of installed libraries
- Save installed libraries to a requirements.txt file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# circup

> The CircuitPython library updater.
> More information: <https://github.com/adafruit/circup>.

- Interactively update modules on a device:

`circup update`

- Install a new library:

`circup install {{library_name}}`

- Search for a library:

`circup show {{partial_name}}`

- List all libraries on a connected device in `requirements.txt` format:

`circup freeze`

- Save all libraries on a connected device in `requirements.txt` in current directory:

`circup freeze {{[-r|--requirement]}}`
