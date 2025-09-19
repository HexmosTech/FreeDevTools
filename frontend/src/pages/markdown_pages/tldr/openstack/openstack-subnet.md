---
title: "OpenStack Subnet - Manage Network Subnets | Online Free DevTools by Hexmos"
name: openstack-subnet
path: /freedevtools/tldr/openstack/openstack-subnet
canonical: "https://hexmos.com/freedevtools/tldr/openstack/openstack-subnet/"
description: "Manage OpenStack network subnets with OpenStack Subnet command. Configure IP address blocks and network settings with ease. Free online tool, no registration required."
category: common
keywords:
- openstack subnet management
- openstack network configuration
- openstack subnet range
- openstack cli subnet
- openstack subnet create
- openstack subnet delete
- openstack subnet show
- openstack subnet dns
- openstack network subnet
- openstack subnet update
features:
- List available OpenStack subnets
- Display details of a specific subnet
- Create new subnets with specified ranges
- Delete existing OpenStack subnets
- Update subnet DNS and name settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openstack subnet

> Manage OpenStack subnets (IP address blocks within a network).
> More information: <https://docs.openstack.org/python-openstackclient/latest/cli/command-objects/subnet.html>.

- List all subnets:

`openstack subnet list`

- Show details of a specific subnet:

`openstack subnet show {{subnet_id_or_name}}`

- List subnets associated with a network:

`openstack subnet list --network {{network_id_or_name}}`

- Create a subnet with subnet range `192.168.0.0/24` in a given network:

`openstack subnet create --network {{network_id_or_name}} --subnet-range 192.168.0.0/24 {{subnet_name}}`

- Delete a subnet:

`openstack subnet delete {{subnet_id_or_name}}`

- Update a subnet with DNS `8.8.8.8` and set a new name:

`openstack subnet set --dns-nameserver 8.8.8.8 --name {{new_subnet_name}} {{subnet_id}}`
