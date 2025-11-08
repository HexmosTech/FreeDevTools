---
title: "OpenStack Network - Manage Cloud Networks | Online Free DevTools by Hexmos"
name: openstack-network
path: "/freedevtools/tldr/openstack/openstack-network/"
canonical: "https://hexmos.com/freedevtools/tldr/openstack/openstack-network/"
description: "Manage OpenStack networks efficiently with OpenStack Network tool. Create, delete, enable, and disable cloud networks effortlessly. Free online tool, no registration required."
category: common
keywords:
- openstack network management
- cloud network control
- openstack cli network
- openstack network creation
- openstack network deletion
- openstack network configuration
- openstack network list
- openstack network show
- openstack network enable
- openstack network disable
features:
- List all available OpenStack networks
- Display detailed information about a specific network
- Create new networks with custom configurations
- Delete existing OpenStack networks
- Enable or disable network access and functionality
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openstack network

> Manage OpenStack network resources.
> More information: <https://docs.openstack.org/python-openstackclient/latest/cli/command-objects/network.html>.

- List all networks:

`openstack network list`

- Show details of a network:

`openstack network show {{network_id_or_name}}`

- Create a new network with a given name:

`openstack network create {{network_name}}`

- Delete a network:

`openstack network delete {{network_id_or_name}}`

- Enable a network:

`openstack network set --enable {{network_id_or_name}}`

- Disable a network:

`openstack network set --disable {{network_id_or_name}}`
