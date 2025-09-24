---
title: "LVChange - Control Logical Volumes | Online Free DevTools by Hexmos"
name: lvchange
path: /freedevtools/tldr/linux/lvchange
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvchange/"
description: "Control logical volumes with LVChange, enabling activation, deactivation, and permission management. Free online tool, no registration required."
category: linux
keywords:
- linux lvchange command
- logical volume manager
- lvm control panel
- activate logical volume
- deactivate logical volume
- set lvm permissions
- linux disk management
- volume group management
- lvm configuration tool
- lvchange automation
features:
- Activate or deactivate logical volumes
- Set read-only or read-write permissions
- Enable or disable autoactivation
- Skip activation during system startup
- Refresh logical volume metadata
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lvchange

> Change attributes or the activation state of logical volumes.
> More information: <https://manned.org/lvchange>.

- Activate a logical volume:

`lvchange {{[-a|--activate]}} y {{/dev/vg_name/lv_name}}`

- Deactivate a logical volume:

`lvchange {{[-a|--activate]}} n {{/dev/vg_name/lv_name}}`

- Enable autoactivation for a logical volume:

`lvchange {{[-a|--activate]}} ay {{/dev/vg_name/lv_name}}`

- Set a logical volume to read-only (use `rw` for read-write):

`lvchange {{[-p|--permission]}} r {{/dev/vg_name/lv_name}}`

- Skip activation for a logical volume:

`lvchange {{[-k|--setactivationskip]}} y {{/dev/vg_name/lv_name}}`

- Refresh a logical volume using the latest metadata:

`lvchange --refresh {{/dev/vg_name/lv_name}}`
