---
title: "LVM Logical Volumes - Display LVM Information | Free DevTools"
name: lvs
path: /freedevtools/tldr/linux/lvs
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvs/"
description: "Display LVM logical volume information with the lvs command.  Manage and view your logical volumes efficiently. Free online tool, no registration required."
category: linux
keywords:
  - logical volume display
  - lvs command linux
  - lvm information viewer
  - linux volume management
  - logical volume details
  - lvm display tool
  - linux lvs command
  - system volume information
  - lvm command line
  - volume status display
features:
  - Display detailed information about all logical volumes.
  - Show specific logical volume fields using the --options flag.
  - Customize the output format with --verbose and --noheadings.
  - Append specific fields to the default output.
  - Use a custom separator between fields in the output.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lvs

> Display information about logical volumes.
> See also: `lvm`.
> More information: <https://manned.org/lvs>.

- Display information about logical volumes:

`lvs`

- Display all logical volumes:

`lvs {{[-a|--all]}}`

- Change default display to show more details:

`lvs {{[-v|--verbose]}}`

- Display only specific fields:

`lvs {{[-o|--options]}} {{field_name_1}},{{field_name_2}}`

- Append field to default display:

`lvs {{[-o|--options]}} +{{field_name}}`

- Suppress heading line:

`lvs --noheadings`

- Use a separator to separate fields:

`lvs --separator {{=}}`
