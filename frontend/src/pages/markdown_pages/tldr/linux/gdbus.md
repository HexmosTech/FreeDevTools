---
title: "DBus Interact - Control D-Bus Objects | Free DevTools"
name: gdbus
path: /freedevtools/tldr/linux/gdbus
canonical: "https://hexmos.com/freedevtools/tldr/linux/gdbus/"
description: "Interact with D-Bus objects using gdbus. Introspect interfaces, call methods, and monitor signals on the bus with this free online tool, no registration required."
category: linux
keywords:
  - D-Bus object interaction
  - gdbus command line tool
  - D-Bus introspection tool
  - Linux message bus control
  - gdbus method call
  - gdbus signal emission
  - D-Bus object monitoring
  - gdbus bus exploration
  - Linux inter-process communication
  - gdbus command examples
features:
  - List available names on the session or system bus
  - Introspect D-Bus objects to view interfaces and methods
  - Call specific methods on D-Bus objects with arguments
  - Emit signals from D-Bus objects with specified arguments
  - Monitor all messages on a D-Bus bus
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gdbus

> Interact with D-Bus objects.
> Part of GLib.
> More information: <https://manned.org/gdbus>.

- List all names on the session bus:

`gdbus list-names --session`

- List all names on the system bus:

`gdbus list-names --system`

- Introspect an object to see its interfaces and methods:

`gdbus introspect --session --dest {{destination_bus_name}} --object-path /{{path/to/object}}`

- Call a method on an object with arguments:

`gdbus call --session --dest {{destination_bus_name}} --object-path /{{path/to/object}} --method {{interface.method_name}} {{argument1 argument2 ...}}`

- Emit a signal from an object with arguments:

`gdbus emit --session --object-path /{{path/to/object}} --signal {{interface.signal_name}} {{argument1 argument2 ...}}`

- Monitor all messages on the session bus:

`gdbus monitor --session`
