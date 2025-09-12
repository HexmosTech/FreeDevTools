---
title: "Control OpenStack Instances - Nova Command | Free DevTools"
name: nova
path: /freedevtools/tldr/unknown/nova
canonical: "https://hexmos.com/freedevtools/tldr/unknown/nova/"
description: "Control OpenStack compute instances with the Nova command line tool. Provision VMs, manage networking, and automate cloud infrastructure. Free online tool, no registration required."
category: unknown
keywords:
- OpenStack instance management
- nova command reference
- cloud compute automation
- virtual machine control
- OpenStack CLI tool
- nova boot command
- nova list instances
- OpenStack networking commands
- virtual server management
- cloud infrastructure control
features:
- List VMs across tenants
- Boot VMs on specific hosts
- Start and stop servers
- Attach network interfaces to VMs
- Manage OpenStack compute resources
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nova

> The OpenStack project that provides a way to provision compute instances.
> More information: <https://docs.openstack.org/nova/latest/>.

- List VMs on current tenant:

`nova list`

- List VMs of all tenants (admin user only):

`nova list --all-tenants`

- Boot a VM on a specific host:

`nova boot --nic net-id={{net_id}} --image {{image_id}} --flavor {{flavor}} --availability-zone nova:{{host_name}} {{vm_name}}`

- Start a server:

`nova start {{server}}`

- Stop a server:

`nova stop {{server}}`

- Attach a network interface to a specific VM:

`nova interface-attach --net-id {{net_id}} {{server}}`
