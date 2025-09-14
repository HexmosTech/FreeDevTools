---
title: "Display Volume Groups - Manage Storage with vgs | Free DevTools"
name: vgs
path: /freedevtools/tldr/linux/vgs
canonical: "https://hexmos.com/freedevtools/tldr/linux/vgs/"
description: "Display Volume Groups with vgs. Manage storage allocation and logical volumes on Linux systems. Free online tool, no registration required."
category: linux
keywords:
  - volume group information
  - lvm volume groups
  - linux storage management
  - display logical volumes
  - vgs command line
  - storage space analysis
  - volume group details
  - lvm configuration
  - disk partition information
  - storage capacity monitoring
features:
  - Display comprehensive information about volume groups.
  - Show all volume groups present on the system.
  - Customize output to display specific fields.
  - Suppress header lines for cleaner output.
  - Separate output fields with a custom separator.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vgs

> Display information about volume groups.
> See also: `lvm`.
> More information: <https://manned.org/vgs>.

- Display information about volume groups:

`vgs`

- Display all volume groups:

`vgs {{[-a|--all]}}`

- Change default display to show more details:

`vgs {{[-v|--verbose]}}`

- Display only specific fields:

`vgs {{[-o|--options]}} {{field_name_1}},{{field_name_2}}`

- Append field to default display:

`vgs {{[-o|--options]}} +{{field_name}}`

- Suppress heading line:

`vgs --noheadings`

- Use separator to separate fields:

`vgs --separator =`
