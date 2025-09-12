---
title: "VBoxManage - Start Virtual Machines | Free DevTools"
name: vboxmanage-startvm
path: /freedevtools/tldr/common/vboxmanage-startvm
canonical: "https://hexmos.com/freedevtools/tldr/common/vboxmanage-startvm/"
description: "Start virtual machines with VBoxManage. Manage virtual machine instances, including headless and GUI modes, efficiently using the command line. Free online tool, no registration required."
category: common
keywords:
- virtual machine control
- vboxmanage start vm
- virtualbox vm management
- vm headless start
- vm gui start
- vm password protection
- vm environment variables
- virtual machine uuid
- virtualbox command line
- cross-platform vm
features:
- Start virtual machines with specified UUID or name
- Launch VMs in different UI modes (headless, GUI, SDL, separate)
- Secure encrypted VMs using password files
- Secure encrypted VMs using password IDs
- Set environment variables when starting virtual machines
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage startvm

> Start a virtual machine.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-startvm>.

- Start a virtual machine:

`VBoxManage startvm {{vm_name|uuid}}`

- Start a virtual machine with the specified UI mode:

`VBoxManage startvm {{vm_name|uuid}} --type {{headless|gui|sdl|separate}}`

- Specify a password file to start an encrypted virtual machine:

`VBoxManage startvm {{vm_name|uuid}} --password {{path/to/password_file}}`

- Specify a password ID to start an encrypted virtual machine:

`VBoxManage startvm {{vm_name|uuid}} --password-id {{password_id}}`

- Start a virtual machine with an environment variable pair name value:

`VBoxManage startvm {{vm_name|uuid}} --put-env={{name}}={{value}}`
