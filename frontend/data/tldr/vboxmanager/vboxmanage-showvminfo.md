---
title: "VMInfo - Show Virtual Machine Info | Online Free DevTools by Hexmos"
name: vboxmanage-showvminfo
path: "/freedevtools/tldr/vboxmanager/vboxmanage-showvminfo/"
canonical: "https://hexmos.com/freedevtools/tldr/vboxmanager/vboxmanage-showvminfo/"
description: "Show VM information with VBoxManage, get details and logs of virtual machines. Analyze configurations with a simple command. Free online tool, no registration required."
category: common
keywords:
- virtual machine information
- vm info
- vboxmanage showvminfo
- virtualbox vm details
- vm configuration data
- machine readable vm data
- virtual machine logs
- virtualbox management
- vbox cli
- vm uuid
features:
- Display detailed information about virtual machines
- Show machine-readable output for scripting
- Retrieve virtual machine logs
- Specify password for encrypted virtual machines
- Display VM information using UUID or name
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# VBoxManage showvminfo

> Show information about registered virtual machine.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-showvminfo>.

- Show information about a particular virtual machine:

`VBoxManage showvminfo {{vm_name|uuid}}`

- Show more detailed information about a particular virtual machine:

`VBoxManage showvminfo --details {{vm_name|uuid}}`

- Show information in a machine readable format:

`VBoxManage showvminfo --machinereadable {{vm_name|uuid}}`

- Specify password ID if the virtual machine is encrypted:

`VBoxManage showvminfo --password-id {{password_id}} {{vm_name|uuid}}`

- Specify the password file if the virtual machine is encrypted:

`VBoxManage showvminfo --password {{path/to/password_file}} {{vm_name|uuid}}`

- Show the logs of a specific virtual machine:

`VBoxManage showvminfo --log {{vm_name|uuid}}`
