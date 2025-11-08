---
title: "QDBus Control - Manage IPC and RPC Calls | Online Free DevTools by Hexmos"
name: qdbus
path: "/freedevtools/tldr/common/qdbus/"
canonical: "https://hexmos.com/freedevtools/tldr/common/qdbus/"
description: "Control inter-process communication with QDBus. Execute methods and manage object properties via command line with this free online tool, no registration required."
category: common
keywords:
- QDBus IPC control
- QDBus RPC manager
- Linux IPC tool
- Qt DBus client
- KDE Plasma automation
- Command-line IPC
- DBus method execution
- Remote procedure call
- Service discovery
- Inter-process communication tool
features:
- List available DBus services
- Execute specific methods on DBus objects
- Display object properties and signals
- Automate KDE Plasma tasks via DBus
- Manage inter-process communication from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qdbus

> Inter-Process Communication (IPC) and Remote Procedure Calling (RPC) mechanism originally developed for Linux.
> More information: <https://doc.qt.io/qt-5/qtdbus-index.html>.

- List available service names:

`qdbus`

- List object paths for a specific service:

`qdbus {{service_name}}`

- List methods, signals and properties available on a specific object:

`qdbus {{service_name}} /{{path/to/object}}`

- Execute a specific method passing arguments and display the returned value:

`qdbus {{service_name}} /{{path/to/object}} {{method_name}} {{argument1}} {{argument2}}`

- Display the current brightness value in a KDE Plasma session:

`qdbus {{org.kde.Solid.PowerManagement}} {{/org/kde/Solid/PowerManagement/Actions/BrightnessControl}} {{org.kde.Solid.PowerManagement.Actions.BrightnessControl.brightness}}`

- Set a specific brightness to a KDE Plasma session:

`qdbus {{org.kde.Solid.PowerManagement}} {{/org/kde/Solid/PowerManagement/Actions/BrightnessControl}} {{org.kde.Solid.PowerManagement.Actions.BrightnessControl.setBrightness}} {{5000}}`

- Invoke volume up shortcut in a KDE Plasma session:

`qdbus {{org.kde.kglobalaccel}} {{/component/kmix}} {{invokeShortcut}} "{{increase_volume}}"`

- Gracefully log out and then do nothing, reboot or shut down:

`qdbus {{org.kde.Shutdown}} {{/Shutdown}} {{logout|logoutAndReboot|logoutAndShutdown}}`
