---
title: "Control VirtualBox - Control VM State | Free DevTools"
name: vboxmanage-controlvm
path: /freedevtools/tldr/vboxmanager/vboxmanage-controlvm
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-controlvm/"
description: "Control VirtualBox virtual machine state with VBoxManage controlvm. Manage power, pausing, resuming and save current VM state. Free online tool, no registration required."
category: common
keywords:
- virtualbox control vm
- vm control power
- vboxmanage poweroff
- vm savestate
- virtual machine reset
- vboxmanage acpipowerbutton
- vboxmanage reboot
- virtualbox shutdown
- vboxmanage pause vm
- vboxmanage resume vm
features:
- Pause a running virtual machine.
- Resume a paused virtual machine.
- Perform a cold reset on a virtual machine.
- Power off a virtual machine immediately.
- Save the current state of a virtual machine.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage controlvm

> Change the state and the settings of a currently running virtual machine.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-controlvm>.

- Temporarily stop the execution of a virtual machine:

`VBoxManage controlvm {{uuid|vm_name}} pause`

- Resume the execution of a paused virtual machine:

`VBoxManage controlvm {{uuid|vm_name}} resume`

- Perform a cold reset on the virtual machine:

`VBoxManage controlvm {{uuid|vm_name}} reset`

- Poweroff a virtual machine with the same effect as pulling the power cable of a computer:

`VBoxManage controlvm {{uuid|vm_name}} poweroff`

- Shutdown the virtual machine and save its current state:

`VBoxManage controlvm {{uuid|vm_name}} savestate`

- Send an ACPI (Advanced Configuration and Power Interface) shutdown signal to the virtual machine:

`VBoxManage controlvm {{uuid|vm_name}} acpipowerbutton`

- Send command to reboot itself to the guest OS:

`VBoxManage controlvm {{uuid|vm_name}} reboot`

- Shutdown down the virtual machine without saving its state:

`VBoxManage controlvm {{uuid|vm_name}} shutdown`
