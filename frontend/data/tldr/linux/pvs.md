---
title: "PVS - Display Physical Volumes | Online Free DevTools by Hexmos"
name: pvs
path: "/freedevtools/tldr/linux/pvs/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pvs/"
description: "Display physical volumes with PVS on Linux. Inspect volume group attributes and manage storage efficiently. Free online tool, no registration required."
category: linux
keywords:
- physical volume display
- linux volume management
- lvm physical volumes
- pvs command linux
- disk volume information
- storage volume details
- linux storage management
- volume group attributes
- pvs verbose output
- physical disk overview
features:
- Display detailed information about physical volumes
- Show non-physical volumes using all option
- Customize output to display specific fields
- Suppress heading lines for cleaner output
- Utilize custom separators for field separation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pvs

> Display information about physical volumes.
> See also: `lvm`.
> More information: <https://manned.org/pvs>.

- Display information about physical volumes:

`pvs`

- Display non-physical volumes:

`pvs {{[-a|--all]}}`

- Change default display to show more details:

`pvs {{[-v|--verbose]}}`

- Display only specific fields:

`pvs {{[-o|--options]}} {{field_name_1}},{{field_name_2}}`

- Append field to default display:

`pvs {{[-o|--options]}} +{{field_name}}`

- Suppress heading line:

`pvs --noheadings`

- Use separator to separate fields:

`pvs --separator {{special_character}}`
