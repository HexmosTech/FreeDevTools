---
title: "Generate Random Identity - Rig | Free DevTools"
name: rig
path: /freedevtools/tldr/linux/rig
canonical: "https://hexmos.com/freedevtools/tldr/linux/rig/"
description: "Generate random identity data with Rig. Create realistic fake names, addresses, and geographical information for development and testing. Free online tool, no registration required."
category: linux
keywords:
  - random data generator
  - fake identity generator
  - name address generator
  - data masking tool
  - address faker
  - geographic data generator
  - sample data generator
  - test data generator
  - linux data generator
  - command line data generator
features:
  - Generate random first and last names
  - Create geographically consistent addresses
  - Display male or female identities specifically
  - Use custom data files from a directory
  - Generate a specified number of identities
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rig

> Utility to piece together a random first name, last name, street number and address, along with a geographically consistent (ie, they all match the same area) city, state, ZIP code, and area code.
> More information: <https://manned.org/rig>.

- Display a random name (male or female) and address:

`rig`

- Display a [m]ale (or [f]emale) random name and address:

`rig -{{m|f}}`

- Use [d]ata files from a specific directory (default is `/usr/share/rig`):

`rig -d {{path/to/directory}}`

- Display a specific number of identities:

`rig -c {{number}}`

- Display a specific number of [f]emale identities:

`rig -f -c {{number}}`
