---
title: "Modem Control - Manage Modems with mmcli | Free DevTools"
name: mmcli
path: /freedevtools/tldr/unknown/mmcli
canonical: "https://hexmos.com/freedevtools/tldr/unknown/mmcli/"
description: "Control modems effectively with mmcli. Manage connections, send SMS, and monitor network status using this command line interface. Free online tool, no registration required."
category: unknown
keywords:
- modem manager
- mmcli command
- linux modem control
- sms management
- network connection manager
- modem configuration
- command line modem tool
- mobile broadband utility
- 3g/4g modem control
- data connection management
features:
- List available modems
- Print detailed modem information
- Enable or disable a modem
- List SMS messages on a modem
- Delete SMS messages from a modem
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mmcli

> Control and monitor the ModemManager.
> More information: <https://www.freedesktop.org/software/ModemManager/man/latest/mmcli.1.html>.

- List available modems:

`mmcli --list-modems`

- Print information about a modem:

`mmcli --modem={{modem}}`

- Enable a modem:

`mmcli --modem={{modem}} --enable`

- List SMS messages available on the modem:

`sudo mmcli --modem={{modem}} --messaging-list-sms`

- Delete a message from the modem, specifying its path:

`sudo mmcli --modem={{modem}} --messaging-delete-sms={{path/to/message_file}}`
