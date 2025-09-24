---
title: "OpenStack Server - Manage VMs | Online Free DevTools by Hexmos"
name: openstack-server
path: /freedevtools/tldr/openstack/openstack-server
canonical: "https://hexmos.com/freedevtools/tldr/openstack/openstack-server/"
description: "Manage OpenStack servers with this free tool. Control virtual machines, start/stop instances, and migrate servers easily. Free online tool, no registration required."
category: common
keywords:
- openstack server management
- virtual machine control
- nova server commands
- cloud instance manager
- openstack vm tool
- linux server command
- openstack cli commands
- server instance migration
- vm reboot utility
- cloud server delete
features:
- List all OpenStack servers and their status
- Start and stop OpenStack virtual machines
- Create new OpenStack server instances from images
- Delete multiple OpenStack server instances
- Migrate servers to different hosts with live migration
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openstack server

> Manage OpenStack virtual machines.
> OpenStack Compute service, aka OpenStack Nova, mainly hosts and manages cloud computing systems.
> More information: <https://docs.openstack.org/python-openstackclient/latest/cli/command-objects/server.html>.

- List servers:

`openstack server list`

- Start server(s):

`openstack server start {{instance_id1 instance_id2 ...}}`

- Stop server:

`openstack server stop {{instance_id1 instance_id2 ...}}`

- Create new server:

`openstack server create --image {{image_id}} --flavor {{flavor_id}} --network {{network_id}} --wait {{server_name}}`

- Delete server(s):

`openstack server delete {{instance_id1 instance_id2 ...}}`

- Migrate server to different host:

`openstack server migrate --live {{host_hostname}} {{--shared-migration|--block-migration}} --wait {{instance_id}}`

- Perform a soft or hard reset to the server:

`openstack server reboot {{--soft|--hard}} --wait {{instance_id}}`
