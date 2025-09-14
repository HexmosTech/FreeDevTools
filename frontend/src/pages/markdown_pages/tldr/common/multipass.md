---
title: "Multipass - Manage Ubuntu VMs | Free DevTools"
name: multipass
path: /freedevtools/tldr/common/multipass
canonical: "https://hexmos.com/freedevtools/tldr/common/multipass/"
description: "Manage Ubuntu virtual machines easily with Multipass. Create, start, and delete VMs on your local machine using native hypervisors. Free online tool, no registration required."
category: common
keywords:
- Ubuntu VM manager
- multipass ubuntu
- linux virtual machine
- create ubuntu vm
- launch ubuntu instance
- ubuntu multipass command
- multipass cloud init
- vm instance management
- virtual machine linux
- multipass delete instance
features:
- Launch and manage Ubuntu virtual machines
- Create instances with cloud-init configuration
- List and inspect VM properties
- Start, stop, and delete instances by name
- Mount local directories into instances
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# multipass

> Manage Ubuntu virtual machines using native hypervisors.
> More information: <https://documentation.ubuntu.com/multipass/en/latest/reference/command-line-interface/#>.

- List the aliases that can be used to launch an instance:

`multipass find`

- Launch a new instance, set its name and use a cloud-init configuration file:

`multipass launch {{[-n|--name]}} {{instance_name}} --cloud-init {{configuration_file}}`

- List all the created instances and some of their properties:

`multipass list`

- Start a specific instance by name:

`multipass start {{instance_name}}`

- Show the properties of an instance:

`multipass info {{instance_name}}`

- Open a shell prompt on a specific instance by name:

`multipass shell {{instance_name}}`

- Delete an instance by name:

`multipass delete {{instance_name}}`

- Mount a directory into a specific instance:

`multipass mount {{path/to/local/directory}} {{instance_name}}:{{path/to/target/directory}}`
