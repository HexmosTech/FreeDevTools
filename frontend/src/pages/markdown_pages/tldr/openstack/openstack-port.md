---
title: "OpenStack Port - Manage Network Ports | Online Free DevTools by Hexmos"
name: openstack-port
path: /freedevtools/tldr/openstack/openstack-port
canonical: "https://hexmos.com/freedevtools/tldr/openstack/openstack-port/"
description: "Manage network ports with OpenStack Port. Configure virtual network interfaces and control IP address assignments. Free online tool, no registration required."
category: common
keywords:
- openstack network port management
- openstack virtual interface configuration
- openstack port IP assignment
- openstack port creation
- openstack port deletion
- openstack network configuration
- openstack neutron port
- openstack port subnet association
- cloud network port control
- openstack port list
features:
- List all OpenStack network ports
- Display detailed port information
- Create ports on specific networks
- Assign fixed IPs to network ports
- Delete OpenStack network ports
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openstack port

> Manage OpenStack network ports (virtual network interfaces).
> More information: <https://docs.openstack.org/python-openstackclient/latest/cli/command-objects/port.html>.

- List all ports:

`openstack port list`

- Show detailed information about a specific port:

`openstack port show {{port_id_or_name}}`

- Create a port on a specific network:

`openstack port create --network {{network_id_or_name}} {{port_name}}`

- Create a port and assign it a fixed IP `192.168.1.50`:

`openstack port create --network {{network_id}} --fixed-ip subnet={{subnet_id}},ip-address=192.168.1.50 {{port_name}}`

- Delete a port:

`openstack port delete {{port_id_or_name}}`
