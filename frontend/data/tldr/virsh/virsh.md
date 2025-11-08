---
title: "Virsh - Manage Virtual Machines | Online Free DevTools by Hexmos"
name: virsh
path: "/freedevtools/tldr/virsh/virsh/"
canonical: "https://hexmos.com/freedevtools/tldr/virsh/virsh/"
description: "Manage virtual machines easily with Virsh, the command line tool for libvirt. Control VMs, start/stop domains, and edit configurations. Free online tool, no registration required."
category: common
keywords:
- virtual machine manager
- libvirt command line
- virsh vm control
- kvm virtual machines
- qemu virtual machines
- linux virtualization
- virtual machine management
- virsh domain management
- vm configuration editor
- command line virtualization
features:
- Connect to a hypervisor session
- List and manage virtual machine domains
- Create a guest from a configuration file
- Edit a guest's configuration using a text editor
- Save and restore the state of a virtual machine
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virsh

> Manage `virsh` guest domains. (Note: `guest_id` can be the ID, name or UUID of the guest).
> Some subcommands such as `list` have their own usage documentation.
> More information: <https://libvirt.org/manpages/virsh.html>.

- Connect to a hypervisor session:

`virsh connect {{qemu:///system}}`

- Activate a network named `default`:

`sudo virsh net-start {{default}}`

- List all domains:

`virsh list --all`

- Create a guest from a configuration file:

`virsh create {{path/to/config_file.xml}}`

- Edit a guest's configuration file (editor can be changed with $EDITOR):

`virsh edit {{guest_id}}`

- Start/reboot/shutdown/suspend/resume a guest:

`virsh {{command}} {{guest_id}}`

- Save the current state of a guest to a file:

`virsh save {{guest_id}} {{filename}}`

- Delete a running guest:

`virsh destroy {{guest_id}} && virsh undefine {{guest_id}}`
