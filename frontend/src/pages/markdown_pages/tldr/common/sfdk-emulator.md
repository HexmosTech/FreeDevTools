---
title: "SFDK Emulator - Control Sailfish OS Emulators | Free DevTools"
name: sfdk-emulator
path: /freedevtools/tldr/common/sfdk-emulator
canonical: "https://hexmos.com/freedevtools/tldr/common/sfdk-emulator/"
description: "Control Sailfish OS emulators with SFDK Emulator. Manage emulator states, execute commands, and set properties for easy application testing. Free online tool, no registration required."
category: common
keywords:
- Sailfish OS emulator
- SFDK emulator control
- Sailfish OS development
- emulator management
- Sailfish OS testing
- Qt application development
- Sailfish OS command line
- application debugging
- emulator property editor
- Sailfish OS SDK
features:
- List installed emulators
- Start and stop emulators
- Display emulator status
- Execute commands within emulators
- Set and show emulator properties
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk emulator

> Maintains and controls emulators.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/40-testing-maintain/doc/command.emulator.adoc>.

- Display the installed emulators:

`sfdk emulator list`

- Start an emulator:

`sfdk emulator start {{name}}`

- Stop an emulator:

`sfdk emulator stop {{name}}`

- Display emulator status:

`sfdk emulator status {{name}}`

- Run an interactive shell on an emulator:

`sfdk emulator exec {{emulator}}`

- Execute a command on an emulator:

`sfdk emulator exec {{emulator}} {{command}}`

- Set a property:

`sfdk emulator set {{name}} {{property}}={{value}}`

- Show emulator properties:

`sfdk emulator show {{name}}`
