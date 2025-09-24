---
title: "Balena Control - Manage IoT Devices | Online Free DevTools by Hexmos"
name: balena
path: /freedevtools/tldr/common/balena
canonical: "https://hexmos.com/freedevtools/tldr/common/balena/"
description: "Control IoT devices with Balena. Manage applications, devices, and flash OS images to connected drives. Free online tool, no registration required."
category: common
keywords:
- balena device management
- iot device control
- balena application deployment
- balenaOS flashing
- balena cloud cli
- openBalena cli
- balena login
- balena apps
- balena local flash
- raspberry pi balena
features:
- Log in to BalenaCloud or openBalena accounts.
- Create and manage Balena applications.
- List all applications within an account.
- List all devices associated with an account.
- Flash BalenaOS images to local drives.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# balena

> Interact with the balenaCloud, openBalena and the balena API.
> More information: <https://www.balena.io/docs/reference/cli/>.

- Log in to the balenaCloud account:

`balena login`

- Create a balenaCloud or openBalena application:

`balena app create {{app_name}}`

- List all balenaCloud or openBalena applications within the account:

`balena apps`

- List all devices associated with the balenaCloud or openBalena account:

`balena devices`

- Flash a balenaOS image to a local drive:

`balena local flash {{path/to/balenaos.img}} --drive {{drive_location}}`
