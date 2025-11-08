---
title: "Boltctl - Control Thunderbolt Devices | Online Free DevTools by Hexmos"
name: boltctl
path: "/freedevtools/tldr/linux/boltctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/boltctl/"
description: "Control Thunderbolt devices easily with Boltctl. Authorize, enroll, and manage your thunderbolt connections efficiently on Linux. Free online tool, no registration required."
category: linux
keywords:
- thunderbolt device control
- boltctl linux command
- linux thunderbolt manager
- thunderbolt authorization linux
- linux device management
- thunderbolt security linux
- boltctl device enrollment
- linux boltctl usage
- thunderbolt connection manager
- linux thunderbolt configuration
features:
- List connected Thunderbolt devices.
- Authorize Thunderbolt devices temporarily.
- Enroll Thunderbolt devices for persistent authorization.
- Revoke authorization from Thunderbolt devices.
- Display detailed information about Thunderbolt devices.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# boltctl

> Control thunderbolt devices.
> More information: <https://manned.org/boltctl>.

- List connected (and authorized) devices:

`boltctl`

- List connected devices, including unauthorized ones:

`boltctl list`

- Authorize a device temporarily:

`boltctl authorize {{device_uuid}}`

- Authorize and remember a device:

`boltctl enroll {{device_uuid}}`

- Revoke a previously authorized device:

`boltctl forget {{device_uuid}}`

- Show more information about a device:

`boltctl info {{device_uuid}}`
