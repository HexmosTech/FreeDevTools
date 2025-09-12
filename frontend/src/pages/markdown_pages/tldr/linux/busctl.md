---
title: "Busctl - Introspect D-Bus Bus | Free DevTools"
name: busctl
path: /freedevtools/tldr/linux/busctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/busctl/"
description: "Introspect D-Bus bus with Busctl. Monitor messages, inspect object trees, and retrieve properties of services. Free online tool, no registration required."
category: linux
keywords:
- D-Bus introspection
- Linux D-Bus monitor
- Busctl command
- Systemd busctl
- D-Bus object tree
- Service property retrieval
- Message bus debugging
- Linux service introspection
- D-Bus method invocation
- Linux D-Bus tool
features:
- List all peers on the D-Bus bus
- Show process information for a bus service
- Dump messages exchanged on the bus
- Show the object tree of a service
- Retrieve object properties of a D-Bus service
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# busctl

> Introspect and monitor the D-Bus bus.
> More information: <https://www.freedesktop.org/software/systemd/man/busctl.html>.

- Show all peers on the bus, by their service names:

`busctl list`

- Show process information and credentials of a bus service, a process, or the owner of the bus (if no parameter is specified):

`busctl status {{service|pid}}`

- Dump messages being exchanged. If no service is specified, show all messages on the bus:

`busctl monitor {{service1 service2 ...}}`

- Show an object tree of one or more services (or all services if no service is specified):

`busctl tree {{service1 service2 ...}}`

- Show interfaces, methods, properties and signals of the specified object on the specified service:

`busctl introspect {{service}} {{path/to/object}}`

- Retrieve the current value of one or more object properties:

`busctl get-property {{service}} {{path/to/object}} {{interface_name}} {{property_name}}`

- Invoke a method and show the response:

`busctl call {{service}} {{path/to/object}} {{interface_name}} {{method_name}}`
