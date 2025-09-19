---
title: "KDE Connect Control - Manage Devices & Share Files | Online Free DevTools by Hexmos"
name: kdeconnect-cli
path: /freedevtools/tldr/common/kdeconnect-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/kdeconnect-cli/"
description: "Control KDE Connect devices easily with KDE Connect CLI. Share files, send SMS messages, and simulate key presses effortlessly using the command line. Free online tool, no registration required."
category: common
keywords:
- KDE Connect control
- Linux device management
- command-line file sharing
- SMS sender cli
- device pairing tool
- remote control utility
- kdeconnect cli
- linux sms
- device unlock command
- key press simulator
features:
- List available KDE Connect devices
- Share files and URLs via command line
- Send SMS messages to specified numbers
- Simulate key presses on remote devices
- Unlock paired KDE Connect devices
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kdeconnect-cli

> Use KDE Connect for sharing files or text to a device, ringing it, unlocking it, and much more.
> More information: <https://kdeconnect.kde.org>.

- List all devices:

`kdeconnect-cli --list-devices`

- List available (paired and reachable) devices:

`kdeconnect-cli --list-available`

- Request pairing with a specific device, specifying its ID:

`kdeconnect-cli --pair --device {{device_id}}`

- Ring a device, specifying its name:

`kdeconnect-cli --ring --name "{{device_name}}"`

- Share an URL or file with a paired device, specifying its ID:

`kdeconnect-cli --share {{url|path/to/file}} --device {{device_id}}`

- Send an SMS with an optional attachment to a specific number:

`kdeconnect-cli --name "{{device_name}}" --send-sms "{{message}}" --destination {{phone_number}} --attachment {{path/to/file}}`

- Unlock a specific device:

`kdeconnect-cli --name "{{device_name}}" --unlock`

- Simulate a key press on a specific device:

`kdeconnect-cli --name "{{device_name}}" --send-keys {{key}}`
