---
title: "OpenStack Flavor - Manage Instance Flavors | Online Free DevTools by Hexmos"
name: openstack-flavor
path: "/freedevtools/tldr/openstack/openstack-flavor/"
canonical: "https://hexmos.com/freedevtools/tldr/openstack/openstack-flavor/"
description: "Manage OpenStack instance flavors effortlessly with OpenStack Flavor. Create, list, and delete virtual hardware templates for your cloud instances. Free online tool, no registration required."
category: common
keywords:
- openstack flavor manager
- openstack instance flavor
- virtual hardware template openstack
- openstack flavor list
- openstack flavor create
- openstack flavor delete
- cloud flavor management
- openstack cli flavor
- openstack flavor configuration
- openstack flavor customization
features:
- List available OpenStack instance flavors.
- Show detailed information about a specific flavor.
- Create new OpenStack flavors with custom configurations.
- Delete existing OpenStack instance flavors.
- Define ephemeral disk and swap space for OpenStack flavors.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openstack flavor

> Manage OpenStack instance flavors (virtual hardware templates).
> More information: <https://docs.openstack.org/python-openstackclient/latest/cli/command-objects/flavor.html>.

- List all flavors:

`openstack flavor list`

- Show details of a flavor:

`openstack flavor show {{flavor_id_or_name}}`

- Create a new flavor with 2 vCPUs, 4GB RAM, and 20GB disk:

`openstack flavor create {{flavor_name}} --vcpus 2 --ram 4096 --disk 20`

- Delete a flavor:

`openstack flavor delete {{flavor_id_or_name}}`

- Create a flavor with 10GB ephemeral disk and 512MB swap space:

`openstack flavor create {{flavor_name}} --vcpus 4 --ram 8192 --disk 40 --ephemeral 10 --swap 512`
