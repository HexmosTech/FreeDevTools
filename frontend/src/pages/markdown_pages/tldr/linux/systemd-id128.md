---
title: "Generate Systemd IDs - Create Unique Identifiers | Online Free DevTools by Hexmos"
name: systemd-id128
path: /freedevtools/tldr/linux/systemd-id128
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-id128/"
description: "Generate unique systemd identifiers with systemd-id128.  Create random IDs, machine IDs, boot IDs, and invocation IDs easily. Free online tool, no registration required."
category: linux
keywords:
  - systemd id generator
  - systemd id128 command
  - linux id generator
  - systemd unique identifier
  - generate systemd ids
  - systemd boot id
  - systemd machine id
  - systemd invocation id
  - linux systemd tool
  - random id generator linux
features:
  - Generates random sd-128 identifiers.
  - Retrieves the current machine ID.
  - Retrieves the current boot ID.
  - Retrieves the current service invocation ID.
  - Outputs identifiers as UUIDs.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-id128

> Generate and print sd-128 identifiers.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-id128.html>.

- Generate a new random identifier:

`systemd-id128 new`

- Print the identifier of the current machine:

`systemd-id128 machine-id`

- Print the identifier of the current boot:

`systemd-id128 boot-id`

- Print the identifier of the current service invocation (this is available in systemd services):

`systemd-id128 invocation-id`

- Generate a new random identifier and print it as a UUID (five groups of digits separated by hyphens):

`systemd-id128 new {{[-u|--uuid]}}`
