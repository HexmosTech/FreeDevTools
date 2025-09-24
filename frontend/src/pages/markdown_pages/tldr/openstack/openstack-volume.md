---
title: "OpenStack Volume - Manage Volumes | Online Free DevTools by Hexmos"
name: openstack-volume
path: /freedevtools/tldr/openstack/openstack-volume
canonical: "https://hexmos.com/freedevtools/tldr/openstack/openstack-volume/"
description: "Manage OpenStack volumes with OpenStack Volume. Create, delete, and migrate volumes using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- OpenStack volume management
- Cinder volume control
- OpenStack block storage
- Volume creation OpenStack
- Volume deletion OpenStack
- Volume migration OpenStack
- OpenStack CLI volume
- Cloud volume manager
- Linux OpenStack commands
- OpenStack volume snapshots
features:
- List available OpenStack volumes across projects
- Display detailed information about a specific volume
- Create new volumes with specified size, image, or snapshot
- Delete one or more OpenStack volumes
- Migrate existing volumes to different hosts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openstack volume

> Manage OpenStack volumes.
> OpenStack Block Storage service, aka OpenStack Cinder, provides volumes to Nova vm's, Ironic bare-metal hosts, containers, and others.
> More information: <https://docs.openstack.org/python-openstackclient/latest/cli/command-objects/volume.html>.

- List volumes:

`openstack volume list --all-projects`

- Show volume details:

`openstack volume show {{volume_id}}`

- Create new volume:

`openstack volume create --size {{size_in_GB}} --image {{image_id}} --snapshot {{snapshot_id}} {{--bootable|--non-bootable}} {{volume_name}}`

- Delete volumes(s):

`openstack volume delete {{volume_id1 volume_id2 ...}}`

- Migrate volume to a new host:

`openstack volume migrate --host {{host_hostname}} {{instance_id}}`

- Set volume properties:

`openstack volume set --name {{volume_new_name}} --size {{volume_new_size}} {{--attached|--detached}} {{--bootable|--non-bootable}} {{volume_id}}`
